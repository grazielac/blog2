"use client";
import { useRouter } from "next/navigation";

function HomeButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

  return (
    <div>
      <div className="text-sm flex gap-4 justify-around border-t-gray-400 border-b-gray-400 border-t border-b pt-8 pb-7">
        <button onClick={handleClick} className="text-gray-700 hover:text-blue-500 uppercase">
          Home
        </button>
      </div>
    </div>
  );
}

export default HomeButton;
