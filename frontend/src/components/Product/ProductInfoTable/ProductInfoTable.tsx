import { ProductInfoTableProps } from "@/interfaces/ProductInfoTableProps";

export function ProductInfoTable({ productId, categoryName, socialIcons }: ProductInfoTableProps) {
  const tags = ["Sofa", "Chair", "Home", "Shop"];

  return (
    <table className="text-normal mt-10 text-[#9F9F9F] border-spacing-y-4 border-separate">
      <tbody>
        <tr>
          <td className="pr-8">SKU</td>
          <td className="pr-6">:</td>
          <td>SS00{productId}</td>
        </tr>
        <tr>
          <td className="pr-8">Category</td>
          <td className="pr-6">:</td>
          <td>{categoryName}</td>
        </tr>
        <tr>
          <td className="pr-8">Tags</td>
          <td className="pr-6">:</td>
          <td>
            {tags.map((tag, index) => (
              <span key={tag}>
                {tag}
                {index < tags.length - 1 && ", "}
              </span>
            ))}
          </td>
        </tr>
        <tr>
          <td className="pr-8">Share</td>
          <td className="pr-6">:</td>
          <td className="flex gap-6">
            {socialIcons.map(({ icon, alt, href }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={alt} className="w-5 h-5 cursor-pointer" />
              </a>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
