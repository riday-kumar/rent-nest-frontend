import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const propertyTypes = ["Apartment", "House", "Villa", "Commercial"];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="container mx-auto px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-bold text-white">
              Rent<span className="text-primary">Nest</span>
            </Link>

            <p className="mt-5 leading-7 text-gray-400">
              Discover verified properties for rent and sale. RentNest helps you
              find your perfect home with a secure and hassle-free experience.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-slate-800 p-2 transition hover:bg-primary hover:text-white"
              >
                <FaFacebook size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-2 transition hover:bg-primary hover:text-white"
              >
                <FaTwitter size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-2 transition hover:bg-primary hover:text-white"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-2 transition hover:bg-primary hover:text-white"
              >
                <FaLinkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Property Types
            </h3>

            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type}>
                  <Link
                    href={`/properties?category=${type.toLowerCase()}`}
                    className="transition hover:text-primary"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 " />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 " />
                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 " />
                <p>support@rentnest.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-6 md:flex-row">
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} RentNest. All rights reserved.
          </p>

          <Image
            src="/ssl.png"
            alt="Payment Methods"
            width={300}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
