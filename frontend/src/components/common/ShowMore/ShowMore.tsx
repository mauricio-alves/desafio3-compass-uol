import { Link } from "react-router-dom";

export function ShowMore() {
  return (
    <div className="flex justify-center mt-8 gap-6">
      <button className="border border-[var(--color-yellow)] text-[var(--color-yellow)] py-3 px-20 rounded hover:bg-[var(--color-yellow)] hover:text-white transition cursor-pointer font-poppins">
        <Link to="/category/all">Show More</Link>
      </button>
    </div>
  );
}
