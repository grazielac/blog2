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

    }

  return (
    <div className="mb-4">
        <label className="mr- font-semibold text-gray-700">Sort by date:</label>
        <select value={value}
        onChange={handleChange}
        className="border p-1 rounded">
        <option value="asc">Oldest first</option>
        <option value="desc">Newest first</option>
        </select>
      
    </div>
  );
}

export default SortDropdown


 