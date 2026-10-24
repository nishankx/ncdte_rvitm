import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] ${className}`}>{children}</div>
  );
}
