import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about-us" },
        { title: "Services", url: "/services" },
        { title: "Our Team", url: "/our-team" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { title: "Instagram", url: "https://www.instagram.com" },
        { title: "Twitter", url: "https://www.x.com" },
        { title: "Facebook", url: "https://www.facebook.com" },
        { title: "LinkedIn", url: "https://www.linkedin.com" },
      ],
    },
  ];
  return (
    <footer className="bg-[#292929] flex flex-col text-white">
      <div className="flex max-md:flex-col flex-wrap justify-between sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/bauen-logo2.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-10">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col gap-4 text-base min-w-[120px]"
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap border-t border-gray-600 sm:px-16 px-6 py-4">
        <p>@2024 Bauen by Setiawan Harish Pradana. All Rights Reserved.</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
