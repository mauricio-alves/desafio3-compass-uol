export function ProductGallery({ images, selectedImage, onSelect }: { images: string[]; selectedImage: string; onSelect: (img: string) => void }) {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-6">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`thumb-${idx}`} className={`w-16 h-16 object-cover border rounded cursor-pointer ${selectedImage === img ? "ring-2 ring-black" : ""}`} onClick={() => onSelect(img)} />
        ))}
      </div>
      <img src={selectedImage} alt="Main" className="w-[500px] h-[500px] object-cover rounded bg-[var(--color-orange-light)]" />
    </div>
  );
}
