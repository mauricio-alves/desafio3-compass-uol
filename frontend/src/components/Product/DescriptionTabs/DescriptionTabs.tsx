import { DescriptionTabsProps } from "@/interfaces/DescriptionTabsProps";

export function DescriptionTabs({ fullDescription }: DescriptionTabsProps) {
  return (
    <section className="px-52 pb-16 font-poppins flex flex-col text-justify justify-center">
      <div className="flex justify-center pt-6 text-2xl">
        <button className="px-6 py-3 font-semibold text-black hover:bg-black hover:text-white cursor-pointer">Description</button>
        <button className="px-6 py-3 text-gray-400 hover:bg-black hover:text-white transition cursor-pointer">Additional Information</button>
      </div>
      <div className="mt-10 text-[#9F9F9F] space-y-8 leading-relaxed">
        {fullDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
