export function DescriptionTabs({ fullDescription }: { fullDescription: string[] }) {
  return (
    <section className="px-60 pb-16 font-poppins flex flex-col text-justify justify-center">
      <div className="flex border-t border-gray-300 justify-center pt-6">
        <button className="px-6 py-3 font-semibold text-black hover:bg-black hover:text-white cursor-pointer">Description</button>
        <button className="px-6 py-3 text-gray-400 hover:bg-black hover:text-white transition cursor-pointer">Additional Information</button>
      </div>
      <div className="mt-6 text-[#9F9F9F] space-y-4 leading-relaxed">
        {fullDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
