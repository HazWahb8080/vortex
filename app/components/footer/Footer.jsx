import { logoImage } from "@/app/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    name: "Management",
    link: "/management",
  },
  {
    name: "Reporting",
    link: "/reporting",
  },
  {
    name: "Tracking",
    link: "/tracking",
  },
  {
    name: "Subscribe",
    link: "/subscribe",
  },
];

function Footer() {
  return (
    <footer className="w-full items-center justify-center flex flex-col bg-white px-12 md:px-20">
      <div className="w-full items-center justify-between flex my-12 relative">
        <Image height={80} width={80} alt="logo" src={logoImage} />
        <div className="w-full flex-col-1 lg:flex lg:space-x-6 space-y-2 md:space-y-0 items-end justify-end">
          {footerLinks.map((link) => (
            <Link key={link.name} href={link.link}>
              <p className="smooth text-black/40 hover:text-black cursor-pointer text-right">
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <span className="h-[0.5px] bg-black/10 w-full my-2" />
      <div className="w-full items-center justify-between flex-col-1 md:flex my-12 space-y-4 md:space-y-0">
        <h3 className="w-full md:w-2/3 text-xs text-black/80">
          These Terms will be applied fully and affect to your use of this
          Website. By using this Website, you agreed to accept all terms and
          conditions written in here. You must not use this Website if you
          disagree with any of these Website Standard Terms and Conditions.
        </h3>
        <span className="flex space-x-5">
          <Link href="linkedin.com/youraccount" target="_blank">
            <Image
              src="/images/footer/linkedin.png"
              alt="linkedin-logo"
              height={30}
              width={30}
              className="opacity-50 hover:opacity-100 smooth cursor-pointer"
            />
          </Link>
          <Link href="twitter.com/youraccount" target="_blank">
            <Image
              src="/images/footer/twitter.png"
              alt="twitter-logo"
              height={30}
              width={30}
              className="opacity-50 hover:opacity-100 smooth cursor-pointer"
            />
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
