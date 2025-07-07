import { useProduct } from "@/hooks/useProduct";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import facebookIcon from "@/assets/icons/facebook.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import { Breadcrumb } from "../Breadcrumb";
import { ProductGallery } from "../ProductGallery";
import { ProductInfoTable } from "../ProductInfoTable";
import { DescriptionTabs } from "../DescriptionTabs";
import { ProductRating } from "../ProductRating";
import { SizeSelector } from "../SizeSelector";
import { ColorSelector } from "../ColorSelector";
import { ProductActions } from "../ProductActions";
import { Products } from "@/components/common/Products";

export function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const socialIcons = [
    {
      icon: facebookIcon,
      alt: "Share on Facebook",
      href: "#",
    },
    {
      icon: linkedinIcon,
      alt: "Share on LinkedIn",
      href: "#",
    },
    {
      icon: twitterIcon,
      alt: "Share on Twitter",
      href: "#",
    },
  ];

  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  return loading ? (
    <section className="py-16">
      <h2 className="text-heading-1 font-poppins font-bold text-center mb-6">Carregando...</h2>
      <p className="text-center text-gray-500">Carregando...</p>
    </section>
  ) : error || !product ? (
    <section className="py-16">
      <p className="text-center text-[var(--color-red)]">{error}</p>
    </section>
  ) : (
    <>
      <Breadcrumb productName={product.name} />
      <section className="flex flex-col md:flex-row gap-26 py-10 px-24 mb-6">
        <ProductGallery images={product.images} selectedImage={selectedImage ?? product.images[0]} onSelect={setSelectedImage} />
        <div className="flex-1 space-y-4 font-poppins">
          <h2 className="text-heading-1">{product.name}</h2>
          <p className="text-2xl text-[#9F9F9F]">Rs. {product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
          <div>
            <p className="text-gray-700 py-4 pr-40">{product.description}</p>
          </div>
          <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSelect={setSelectedSize} />
          <ColorSelector colors={product.colors} selectedColor={selectedColor} onSelect={setSelectedColor} />
          <ProductActions quantity={quantity} setQuantity={setQuantity} />
          <ProductInfoTable productId={product.id} categoryName={product.category.name} socialIcons={socialIcons} />
        </div>
      </section>
      <DescriptionTabs fullDescription={product.fullDescription} />
      <div className="mb-10">
        <Products initialCount={4} title="Related Products" />
      </div>
    </>
  );
}
