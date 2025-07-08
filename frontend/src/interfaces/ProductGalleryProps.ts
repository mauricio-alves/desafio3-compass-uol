export interface ProductGalleryProps {
  images: string[];
  selectedImage: string;
  onSelect: (img: string) => void;
}
