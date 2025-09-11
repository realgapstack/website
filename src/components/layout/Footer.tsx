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
    <p className="text-sm text-purple">{address}</p>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-[979px] mx-auto border-l border-r border-dotted border-grey pt-8 pb-7 px-4 md:px-0">
        <div className="flex flex-col gap-8 pb-8 md:flex-row md:justify-between md:gap-0">
          <div className="flex items-center justify-start flex-shrink-0">
            <Link to="/">
              <img
                src="/logo_two.svg"
                alt="Gapstack Logo"
                className="w-auto h-8 md:h-9"
              />
            </Link>
          </div>

          <div className="flex flex-wrap items-start gap-6 md:items-center md:gap-10">
            <div className="flex-1 min-w-0 md:flex-initial">
              <FooterLocationItem location="Kenya" address="Nairobi" />
            </div>
            <div className="flex-1 min-w-0 md:flex-initial">
              <FooterLocationItem location="India" address="New Delhi" />
            </div>
            <div className="basis-full md:flex-initial">
              <FooterLocationItem location="Singapore" address="Singapore" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 md:items-end">
            <a
              href="mailto:sales@gapstack.com"
              className="text-sm text-purple hover:underline"
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

        {/* Bottom area: partner badge and copyright - center on mobile */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/icons/mastercard.svg"
              alt="Mastercard"
              className="w-auto h-10 md:h-12"
            />
            <p className="text-sm text-center md:text-left">
              Mastercard Partner
            </p>
          </div>
          <div>
            <p className="text-sm text-center text-purple-primary md:text-right">
              Gapstack {new Date().getFullYear()}. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
