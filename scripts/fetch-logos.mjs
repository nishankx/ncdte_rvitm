import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outDir = path.resolve(rootDir, "public/images/logos");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const SOURCES = [
  {
    key: "rsst",
    institution: "Rashtreeya Sikshana Samithi Trust (RV Educational Institutions)",
    primaryUrl: "https://www.rvei.edu.in",
    fallbackType: "page",
    fallbackUrl: "https://www.rvitm.edu.in",
  },
  {
    key: "rvitm",
    institution: "RV Institute of Technology and Management",
    primaryUrl: "https://www.rvitm.edu.in",
    fallbackType: "og",
    fallbackUrl: "https://www.rvitm.edu.in",
  },
  {
    key: "vtu",
    institution: "Visvesvaraya Technological University",
    primaryUrl: "https://vtu.ac.in",
    fallbackType: "wikimedia",
    wikimediaTitle: "File:Visvesvaraya Technological University logo.png",
  },
  {
    key: "aicte",
    institution: "All India Council for Technical Education",
    primaryUrl: "https://www.aicte-india.org",
    fallbackType: "wikimedia",
    wikimediaTitle: "File:AICTE logo.png",
  },
];

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function resolveUrl(base, relative) {
  try {
    return new URL(relative, base).href;
  } catch {
    return null;
  }
}

function extractCandidates(html, baseUrl) {
  const candidates = [];

  // 1. Check <header>, <nav>, elements with class/id containing logo or brand
  const headerNavBlocks = [];
  const headerNavRegex = /<(?:header|nav)[^>]*>([\s\S]*?)<\/(?:header|nav)>/gi;
  let match;
  while ((match = headerNavRegex.exec(html)) !== null) {
    headerNavBlocks.push(match[1]);
  }

  const classBlocks = [];
  const classRegex =
    /<div[^>]*(?:class|id)=["'][^"']*(?:logo|brand)[^"']*["'][^>]*>([\s\S]*?)<\/div>/gi;
  while ((match = classRegex.exec(html)) !== null) {
    classBlocks.push(match[1]);
  }

  const priorityHtml = [...headerNavBlocks, ...classBlocks].join("\n");

  const imgRegex = /<img\b([^>]*?)>/gi;
  while ((match = imgRegex.exec(html)) !== null) {
    const attrs = match[1];
    const isPriority = priorityHtml.includes(match[0]);

    const srcMatch = attrs.match(/\bsrc=["']([^"']+)["']/i);
    const altMatch = attrs.match(/\balt=["']([^"']+)["']/i);
    const classMatch = attrs.match(/\bclass=["']([^"']+)["']/i);
    const widthMatch = attrs.match(/\bwidth=["']?(\d+)["']?/i);

    if (!srcMatch) continue;
    const src = srcMatch[1];
    const alt = altMatch ? altMatch[1] : "";
    const className = classMatch ? classMatch[1] : "";
    const width = widthMatch ? parseInt(widthMatch[1], 10) : 0;

    const hasLogoKeyword =
      /logo|brand|emblem/i.test(src) ||
      /logo|brand|emblem/i.test(alt) ||
      /logo|brand|emblem/i.test(className);

    if (isPriority || hasLogoKeyword) {
      const fullUrl = resolveUrl(baseUrl, src);
      if (fullUrl) {
        candidates.push({
          url: fullUrl,
          isSvg: fullUrl.endsWith(".svg") || /\.svg\?/i.test(fullUrl),
          width,
          priority: isPriority ? 2 : 1,
        });
      }
    }
  }

  // 2. <meta property="og:image" content="...">
  const ogRegex = /<meta\b[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/gi;
  while ((match = ogRegex.exec(html)) !== null) {
    const fullUrl = resolveUrl(baseUrl, match[1]);
    if (fullUrl) {
      candidates.push({
        url: fullUrl,
        isSvg: false,
        width: 0,
        priority: 0,
      });
    }
  }

  // 3. <link rel="icon|apple-touch-icon" href="...">
  const iconRegex =
    /<link\b[^>]*rel=["'](?:apple-touch-icon|icon)["'][^>]*href=["']([^"']+)["'][^>]*>/gi;
  while ((match = iconRegex.exec(html)) !== null) {
    const fullUrl = resolveUrl(baseUrl, match[1]);
    if (fullUrl) {
      candidates.push({
        url: fullUrl,
        isSvg: fullUrl.endsWith(".svg"),
        width: 0,
        priority: -1,
      });
    }
  }

  // Deduplicate by url
  const unique = [];
  const seen = new Set();
  for (const c of candidates) {
    if (!seen.has(c.url)) {
      seen.add(c.url);
      unique.push(c);
    }
  }

  // Sort: prefer SVG, then higher priority, then larger width
  unique.sort((a, b) => {
    if (a.isSvg && !b.isSvg) return -1;
    if (!a.isSvg && b.isSvg) return 1;
    if (b.priority !== a.priority) return b.priority - a.priority;
    return b.width - a.width;
  });

  return unique;
}

async function tryDownloadImage(url) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT },
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });

    if (res.status !== 200) return null;

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.startsWith("image/")) return null;

    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length <= 2048) return null; // must be > 2 KB

    let ext = "png";
    if (contentType.includes("svg") || url.endsWith(".svg")) ext = "svg";
    else if (contentType.includes("webp") || url.endsWith(".webp")) ext = "webp";
    else if (contentType.includes("jpeg") || contentType.includes("jpg") || url.endsWith(".jpg"))
      ext = "jpg";

    return { buffer, ext, finalUrl: res.url || url };
  } catch {
    return null;
  }
}

async function fetchFromWikimedia(fileTitle) {
  try {
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(
      fileTitle,
    )}&prop=imageinfo&iiprop=url&format=json&origin=*`;
    const res = await fetch(apiUrl, {
      headers: { "User-Agent": USER_AGENT },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return null;
    const json = await res.json();
    const pages = json.query?.pages;
    if (!pages) return null;

    for (const pageId of Object.keys(pages)) {
      const page = pages[pageId];
      if (page.imageinfo && page.imageinfo[0]?.url) {
        return page.imageinfo[0].url;
      }
    }
  } catch {
    return null;
  }
  return null;
}

async function run() {
  const results = [];
  let hasFailure = false;
  const retrievedDate = new Date().toISOString().split("T")[0];

  for (const src of SOURCES) {
    let success = false;
    let savedFile = null;
    let finalUrl = null;
    let usedPageUrl = src.primaryUrl;

    console.log(`\nFetching logo for [${src.key}]: ${src.institution}...`);

    try {
      // Step 1: Fetch primary page
      let primaryHtml = null;
      try {
        const resp = await fetch(src.primaryUrl, {
          headers: { "User-Agent": USER_AGENT },
          redirect: "follow",
          signal: AbortSignal.timeout(15000),
        });
        if (resp.ok) {
          primaryHtml = await resp.text();
          usedPageUrl = resp.url || src.primaryUrl;
        }
      } catch (e) {
        console.warn(`  Primary URL fetch failed: ${e.message}`);
      }

      let candidates = [];
      if (primaryHtml) {
        candidates = extractCandidates(primaryHtml, usedPageUrl);
      }

      // Step 2: Try candidates
      for (const cand of candidates) {
        console.log(`  Trying candidate: ${cand.url}`);
        const downloaded = await tryDownloadImage(cand.url);
        if (downloaded) {
          savedFile = `${src.key}.${downloaded.ext}`;
          fs.writeFileSync(path.join(outDir, savedFile), downloaded.buffer);
          finalUrl = downloaded.finalUrl;
          success = true;
          break;
        }
      }

      // Step 3: Fallback if primary candidates failed
      if (!success) {
        console.log(`  Primary candidates exhausted, attempting fallback for [${src.key}]...`);
        if (src.fallbackType === "page" && src.fallbackUrl) {
          usedPageUrl = src.fallbackUrl;
          const fallbackResp = await fetch(src.fallbackUrl, {
            headers: { "User-Agent": USER_AGENT },
            signal: AbortSignal.timeout(15000),
          });
          if (fallbackResp.ok) {
            const fallbackHtml = await fallbackResp.text();
            // Look for footer/header logo on fallback page (e.g. image-3 or rsst)
            const fallbackCandidates = extractCandidates(fallbackHtml, src.fallbackUrl);
            for (const cand of fallbackCandidates) {
              const downloaded = await tryDownloadImage(cand.url);
              if (downloaded) {
                savedFile = `${src.key}.${downloaded.ext}`;
                fs.writeFileSync(path.join(outDir, savedFile), downloaded.buffer);
                finalUrl = downloaded.finalUrl;
                success = true;
                break;
              }
            }
          }
        } else if (src.fallbackType === "wikimedia" && src.wikimediaTitle) {
          usedPageUrl = `https://commons.wikimedia.org/wiki/${encodeURIComponent(src.wikimediaTitle)}`;
          const wikiUrl = await fetchFromWikimedia(src.wikimediaTitle);
          if (wikiUrl) {
            console.log(`  Found Wikimedia URL: ${wikiUrl}`);
            const downloaded = await tryDownloadImage(wikiUrl);
            if (downloaded) {
              savedFile = `${src.key}.${downloaded.ext}`;
              fs.writeFileSync(path.join(outDir, savedFile), downloaded.buffer);
              finalUrl = downloaded.finalUrl;
              success = true;
            }
          }
        }
      }
    } catch (err) {
      console.error(`  Error processing ${src.key}: ${err.message}`);
    }

    if (success) {
      results.push({
        key: src.key,
        institution: src.institution,
        status: "SUCCESS",
        savedFile,
        sourcePage: usedPageUrl,
        finalUrl,
      });
      console.log(`  ✓ Saved ${savedFile} (${finalUrl})`);
    } else {
      results.push({
        key: src.key,
        institution: src.institution,
        status: "FAILED",
        savedFile: "-",
        sourcePage: usedPageUrl,
        finalUrl: "-",
      });
      console.error(`  ✗ Failed to fetch logo for ${src.key}`);
      hasFailure = true;
    }
  }

  // Write SOURCES.md
  let markdown = `# Institution Logo Sources\n\n`;
  markdown += `Retrieved on: ${retrievedDate}\n\n`;
  markdown += `> **Notice**: Verify usage rights and trademark guidelines with respective institutions before production use.\n\n`;
  markdown += `| Key | Institution | Source Page URL | Final File URL | Saved As | Status |\n`;
  markdown += `| --- | ----------- | --------------- | -------------- | -------- | ------ |\n`;

  for (const r of results) {
    markdown += `| ${r.key} | ${r.institution} | ${r.sourcePage} | ${r.finalUrl} | ${r.savedFile} | ${r.status} |\n`;
  }

  fs.writeFileSync(path.join(outDir, "SOURCES.md"), markdown, "utf-8");
  console.log(`\nWrote ${path.join(outDir, "SOURCES.md")}`);

  // Print results table
  console.log("\nLogo Acquisition Results:");
  console.table(
    results.map((r) => ({
      Key: r.key,
      Status: r.status,
      File: r.savedFile,
      SourcePage: r.sourcePage,
    })),
  );

  if (hasFailure) {
    console.warn("\nOne or more logos could not be fetched. Text fallbacks will be used.");
    process.exitCode = 1;
  } else {
    console.log("\nAll logos fetched successfully.");
  }
}

run();
