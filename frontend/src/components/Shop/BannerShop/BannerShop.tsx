import bgImage from "@/assets/images/banner-shop.png";
import arrow from "@/assets/icons/arrow-right.svg";

export function BannerShop() {
  return (
    <section className="w-full h-80 flex flex-col justify-center items-center text-center bg-cover bg-center relative" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute" />
      <div className="relative z-10">
        <h1 className="text-5xl font-semibold text-black font-poppins mt-8">Shop</h1>
        <p className="text-normal text-black font-poppins mt-4">
          <span className="font-semibold">Home</span>
          <img src={arrow} alt="Arrow" className="mx-2 inline w-5 h-5" />
          <span className="">Shop</span>
        </p>
      </div>
    </section>
  );
}
