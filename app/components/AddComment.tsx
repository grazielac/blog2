"use client";
import { useState, FormEvent, ChangeEvent } from "react";

interface AddCommentProps {
    onSubmit: (comment: string) => void;
}

function AddComment({ onSubmit }: AddCommentProps) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={comment}
          onChange={handleChange}
          placeholder="Add a comment"
          className="border p-2 rounded"
        />
        <button type="submit" className="ml-2 bg-gray-500 px-3 py-1 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddComment;
