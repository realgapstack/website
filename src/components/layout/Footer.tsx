import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-[979px] mx-auto">
        <div className="flex justify-between pb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="">
              <Link to="/">
                <img src="/logo.svg" alt="Gapstack Logo" />
              </Link>
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">
                Kenya
              </h4>
              <p className="text-purple-primary text-sm">Nairobi</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">
                India
              </h4>
              <p className="text-purple-primary text-sm">New Delhi</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">
                Singapore
              </h4>
              <p className="text-purple-primary text-sm">Singapore</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:sales@gapstack.com"
              className="text-purple-primary text-sm hover:underline"
            >
              sales@gapstack.com
            </a>
            <a
              href="https://www.linkedin.com/company/gapstack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="text-purple-primary text-sm">
          Gapstack {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
