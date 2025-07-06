import StarRatings from "react-star-ratings";

export function ProductRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-2">
      <StarRatings rating={rating} starRatedColor="#FFC700" numberOfStars={5} starDimension="20px" starSpacing="2px" name="rating" />
      <div className="h-8 w-px bg-gray-600 mx-3" />
      <span className="text-[#9F9F9F]">{reviewCount} Customer Review</span>
    </div>
  );
}
