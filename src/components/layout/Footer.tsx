import { Link } from "react-router-dom";

const FooterLocationItem = ({
  location,
  address,
}: {
  location: string;
  address: string;
}) => (
  <div>
    <h4 className="mb-4 text-sm font-semibold text-gray-900 md:text-base">
      {location}
    </h4>
    <p className="text-sm text-purple-primary">{address}</p>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 pt-12 pb-7">
        <div className="flex justify-between pb-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <img
                src="/logo_two.svg"
                alt="Gapstack Logo"
                className="w-auto h-9"
              />
            </Link>
          </div>
          <div className="flex gap-10">
            <FooterLocationItem location="Kenya" address="Nairobi" />
            <FooterLocationItem location="India" address="New Delhi" />
            <FooterLocationItem location="Singapore" address="Singapore" />
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:sales@gapstack.com"
              className="text-sm text-purple-primary hover:underline"
            >
              sales@gapstack.com
            </a>
            <a
              href="https://www.linkedin.com/company/gapstack/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              <img
                src="/icons/linkedin-02.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <img
              src="/icons/mastercard.svg"
              alt="Mastercard"
              className="w-auto h-12"
            />
            <p>Mastercard Partner</p>
          </div>
          <div>
            <p className="text-sm text-purple-primary">
              Gapstack {new Date().getFullYear()}. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
