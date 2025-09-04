import Button from "@/components/Button";
import { ContactSalesSheet } from "@/components/ContactSalesSheet";
import { useContactSales } from "@/hooks/useContactSales";
import GapstackFeatures from "../components/GapstackFeatures";
import PaymentMethods from "../components/PaymentMethods";

const GlobalPayments = () => {
  const { openSheet, isOpen, closeSheet } = useContactSales();
  const logos = [
    { name: "OR.SEND", logo: "orisend" },
    { name: "NMB", logo: "nmb" },
    { name: "Credit Bank", logo: "credit-bank" },
    { name: "Simba Money", logo: "simba-money" },
    { name: "Menswitch", logo: "kenswitch" },
  ];
  return (
    <div className="">
      <section className="text-center py-8 md:py-16 max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300">
        <div className="">
          <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl md:mb-6 text-balance">
            Building Trust And Driving Growth By Revolutionizing How Money Moves
            Across Borders.
          </h1>
          <p className="text-gray-600 text-base text-[13px] mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            With Gapstack, you can create new revenue streams and build customer
            loyalty by offering seamless, transparent multi-currency, multi
            country solutions. Our platform ensure security and compliance every
            step of the way.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-6">
            <Button onClick={openSheet}> Unlock Your Potential</Button>
          </div>
        </div>
      </section>

      <div className="relative w-full h-px border-t border-gray-300 border-dotted">
        <div className="absolute left-1/2 top-0 w-full max-w-[979px] -translate-x-1/2">
          <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 -translate-y-1.5">
            <svg viewBox="0 0 12 12" className="w-full h-full">
              <path
                d="M6 0v12M0 6h12"
                stroke="#7c3aed"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute right-0 top-0 w-3 h-3 translate-x-1.5 -translate-y-1.5">
            <svg viewBox="0 0 12 12" className="w-full h-full">
              <path
                d="M6 0v12M0 6h12"
                stroke="#7c3aed"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <section className="w-full max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300">
        <div className="relative rounded-2xl overflow-hidden bg-gray-100">
          <img
            src="/images/image_two.png"
            alt=""
            className=" w-full h-48 md:h-96 object-cover"
          />
        </div>
      </section>

      <div className="relative w-full h-px border-t border-gray-300 border-dotted">
        <div className="absolute left-1/2 top-0 w-full max-w-[979px] -translate-x-1/2">
          <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 -translate-y-1.5">
            <svg viewBox="0 0 12 12" className="w-full h-full">
              <path
                d="M6 0v12M0 6h12"
                stroke="#7c3aed"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute right-0 top-0 w-3 h-3 translate-x-1.5 -translate-y-1.5">
            <svg viewBox="0 0 12 12" className="w-full h-full">
              <path
                d="M6 0v12M0 6h12"
                stroke="#7c3aed"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <section className="max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300">
        <div className="container mx-auto px-4 grid grid-cols-12 items-center align-center">
          <div className="col-span-3 border-r border-gray-300 border-dotted py-12">
            <p className="text-center text-muted-foreground ">
              Powering global payments for:
            </p>
          </div>

          <div className="relative w-full overflow-hidden col-span-9">
            <div className="relative flex">
              {/* Left gradient fade */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

              {/* Right gradient fade */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

              {/* First set of logos */}
              <div className="flex shrink-0 items-center justify-around min-w-full animate-scroll">
                {logos.map((company, index) => (
                  <div key={index} className="mx-6">
                    <img
                      src={`/images/logos/${company.logo}.png`}
                      alt={company.name}
                      className="h-11 object-contain hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Second set of logos for seamless looping */}
              <div className="flex shrink-0 items-center justify-around min-w-full animate-scroll">
                {logos.map((company, index) => (
                  <div key={`duplicate-${index}`} className="mx-6">
                    <img
                      src={`/images/logos/${company.logo}.png`}
                      alt={company.name}
                      className="h-11 object-contain hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-px border-t border-gray-300 border-dotted" />

      <GapstackFeatures />

      <div className="relative w-full h-px border-t border-gray-300 border-dotted" />

      <PaymentMethods />

      <div className="relative w-full h-px border-t border-gray-300 border-dotted" />

      <section className="pt-8 md:pt-16 max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300 bg-background">
        <div className=" md:px-0">
          <div className="grid items-end gap-8 lg:grid-cols-12 md:gap-10 ">
            <div className="col-span-7">
              <img
                src="/images/image_four.png"
                alt=""
                className="w-full object-cover rounded-tr-2xl h-60 md:h-80"
              />
            </div>
            <div className="col-span-4">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:mb-6">
                Our Platform
              </h2>

              <ul className=" text-gray-600 list-disc list-inside pb-5">
                <li>Full suite of APIs the fits targeted audience</li>
                <li> Highly flexible to adapt to business innovations</li>
                <li>
                  Extensive developer tools to ease and speed up integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-px border-t border-gray-300 border-dotted" />

      <section className="text-center py-8 md:py-16 max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300">
        <div className=" md:px-0">
          <div className="">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl md:mb-8">
              Let's Explore What Is Possible ....
            </h2>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-[#7c60ff29] shadow-[0px_0px_7px_#7c60ffe6] bg-gradient-to-r from-[#7c60ffe6] to-[#7c60ffcc] text-sm">
              <span className="font-medium text-white">
                Unlock Your Potential
              </span>
            </button>
          </div>
        </div>
      </section>

      <ContactSalesSheet open={isOpen} onOpenChange={closeSheet} />
    </div>
  );
};

export default GlobalPayments;
