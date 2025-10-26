"use client";
import { useState } from "react";

interface SortDropdownProps {
  onChange: (sort: "asc" | "desc") => void;
}

function SortDropdown({ onChange }: SortDropdownProps) {
  const [value, setValue] = useState<"asc" | "desc">("asc");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as "asc" | "desc";
    setValue(selected);
    onChange(selected);
  };

  return (
    <div className="mb-4 flex w-full">
      <label className="text-sm bg-gray-200 py-2 px-2 rounded-2xl p-8 m-5">
        Sort by date:
      </label>
      <select
        value={value}
        onChange={handleChange}
        className="text-sm bg-gray-200 py-2 px-4 rounded-2xl m-5"
      >
        <option value="asc">Oldest first</option>
        <option value="desc">Newest first</option>
      </select>
    </div>
  );
}

export default SortDropdown;
