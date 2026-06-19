"use client";

import { useState } from "react";

export default function ProductImage({
  src,
  alt,
  brand,
  className = "",
}: {
  src: string;
  alt: string;
  brand?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300 ${className}`}>
        <span className="text-neutral-500 font-bold tracking-tight text-center px-4 uppercase text-sm">
          {brand ?? alt}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
