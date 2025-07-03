import trophyIcon from "@/assets/icons/trophy.svg";
import checkIcon from "@/assets/icons/check.svg";
import shippingIcon from "@/assets/icons/shipping.svg";
import supportIcon from "@/assets/icons/support.svg";
import { FeatureItem } from "@/interfaces/FeatureItem";

const features: FeatureItem[] = [
  {
    icon: trophyIcon,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: checkIcon,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: shippingIcon,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: supportIcon,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

export function Features() {
  return (
    <section className="bg-[var(--color-orange-light)] py-26">
      <div className="px-4 flex justify-center flex-wrap gap-14">
        {features.map(({ icon, title, description }) => (
          <div key={title} className="flex items-center gap-4">
            <img src={icon} alt={title} className="w-15 h-15 object-contain" />
            <div className="font-poppins">
              <h3 className="text-2xl font-semibold text-black">{title}</h3>
              <p className="text-large text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
