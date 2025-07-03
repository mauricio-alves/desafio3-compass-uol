import { LinkGroup } from "@/interfaces/LinkGroup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newsletterSchema } from "@/schemas/newsletterSchema";
import { NewsletterFormData } from "@/interfaces/NewsletterFormData";

const linkGroups: LinkGroup[] = [
  {
    title: "Links",
    links: [
      { label: "Home", href: "#" },
      { label: "Shop", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Payment Options", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Privacy Policies", href: "#" },
    ],
  },
];

export function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: yupResolver(newsletterSchema),
  });

  function handleSubscribe(data: NewsletterFormData) {
    alert(`Subscribed with email: ${data.email}`);
    reset();
  }

  return (
    <footer className="bg-[var(--color-white)] border-t border-gray-200 py-12 text-gray-600 font-poppins flex flex-col items-center">
      <div className="grid grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">Funiro.</h2>
          <p className="leading-relaxed text-normal">400 University Drive Suite 200 Coral Gables,</p>
          <p className=" text-normal">FL 33134 USA</p>
        </div>
        <div className='flex gap-18'>
          {linkGroups.map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-gray-400 mb-4 text-normal">{title}</h3>
              <ul className="space-y-2 flex flex-col gap-8 mt-13">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-black hover:underline text-normal">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-gray-400 mb-4 text-normal">Newsletter</h3>
          <form onSubmit={handleSubmit(handleSubscribe)} className="flex flex-col gap-2" noValidate>
            <div className="flex border-b border-black">
              <input type="email" placeholder="Enter Your Email Address" {...register("email")} className="flex-1 outline-none bg-transparent text-black placeholder:text-gray-400 py-1 text-sm" />
              <button type="submit" className="text-black font-semibold uppercase cursor-pointer ml-4 tracking-wide hover:underline text-sm">
                Subscribe
              </button>
            </div>
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </form>
        </div>
      </div>
      <div className="text-normal text-black text-left mt-10 border-t border-gray-200 pt-4">
        <p>2023 funiro. All rights reserved</p>
      </div>
    </footer>
  );
}
