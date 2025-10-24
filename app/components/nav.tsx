import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div>
      <div className="text-sm flex gap-4 justify-around border-t-gray-400 border-b-gray-400 border-t-1 border-b-1 pt-7 pb-7">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/">Personal</Link>
        <span>/</span>
        <Link href="/">Lifestyle</Link>
        <span>/</span>
        <Link href="/">Creative</Link>
        <span>/</span>
        <Link href="/">Travel</Link>
      </div>
    </div>
  );
}

export default Nav;
