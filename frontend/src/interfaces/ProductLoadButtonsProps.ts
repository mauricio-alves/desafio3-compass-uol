export interface ProductLoadButtonsProps {
  visibleCount: number;
  total: number;
  initialCount: number;
  onShowMore: () => void;
  onShowLess: () => void;
}
