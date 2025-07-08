import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found.</h2>
      <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="border border-[var(--color-yellow)] text-[var(--color-yellow)] py-3 px-20 rounded hover:bg-[var(--color-yellow)] hover:text-white transition cursor-pointer font-poppins">
        Back to Home
      </Link>
    </div>
  );
}
