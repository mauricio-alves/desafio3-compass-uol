import { ColorSelectorProps } from "@/interfaces/ColorSelectorProps";

export function ColorSelector({ colors, selectedColor, onSelect }: ColorSelectorProps) {
  return (
    <div className="space-y-1 py-2">
      <p className="text-[#9F9F9F]">Color</p>
      <div className="flex gap-4">
        {colors.map((color) => (
          <button key={color} className={`w-8 h-8 rounded-full border cursor-pointer transition ${selectedColor === color ? "ring-2 ring-black" : ""}`} style={{ backgroundColor: color }} onClick={() => onSelect(color)} />
        ))}
      </div>
    </div>
  );
}
