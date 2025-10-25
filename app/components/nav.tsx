import React from "react";
import Link from "next/link";

function Nav() {
  const tags = ["all", "personal", "travel", "career", "creative"];

  return (
    <div>
      <div className="text-sm flex gap-4 justify-around border-t-gray-400 border-b-gray-400 border-t border-b pt-8 pb-7">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag === "all" ? null : tag)}
            className="text-gray-700 hover:text-blue-500 uppercase"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Nav;
