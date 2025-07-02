import BannerImage from "@/assets/images/banner-home.png";

export function Banner() {
  return (
    <section className="w-full h-[500px] bg-cover bg-center flex items-center justify-end relative" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="absolute w-[640px] h-[316px] bottom-0 bg-[#FFF3E3] px-12 py-21 rounded-lg mr-15">
        <p className="text-black text-medium font-poppins leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
      </div>
    </section>
  );
}
