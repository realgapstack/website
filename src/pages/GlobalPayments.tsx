import Button from "@/components/Button";
import { ContactSalesSheet } from "@/components/ContactSalesSheet";
import { useContactSales } from "@/hooks/useContactSales";
// import { Section } from "lucide-react";
import Section from "@/components/Section";
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
      <Section className="pt-10 pb-8 text-center">
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
      </Section>

      <div className="relative w-full">
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

      <Section wrapperClassName="">
        <div className="relative overflow-hidden bg-gray-100 rounded-2xl">
          <img
            src="/images/image_two.png"
            alt=""
            className="object-cover w-full h-48 md:h-96"
          />
        </div>
      </Section>
      <div className="relative">
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

      <Section className="h-12" />

      {/* <section className="w-full max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300">
        <div className="relative overflow-hidden bg-gray-100 rounded-2xl">
          <img
            src="/images/image_two.png"
            alt=""
            className="object-cover w-full h-48 md:h-96"
          />
        </div>
      </section> */}

      <Section className="">
        <div className="container grid items-center grid-cols-12 px-4 mx-auto align-center">
          <div className="col-span-3 py-12 border-r border-gray-300 border-dotted">
            <p className="text-center text-muted-foreground ">
              Powering global payments for:
            </p>
          </div>

          <div className="relative w-full col-span-9 overflow-hidden">
            <div className="relative flex">
              {/* First set of logos */}
              <div className="flex items-center justify-around min-w-full shrink-0 animate-scroll">
                {logos.map((company, index) => (
                  <div key={index} className="mx-6">
                    <img
                      src={`/images/logos/${company.logo}.png`}
                      alt={company.name}
                      className="object-contain transition-opacity duration-300 h-11 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>

              {/* Second set of logos for seamless looping */}
              <div className="flex items-center justify-around min-w-full shrink-0 animate-scroll">
                {logos.map((company, index) => (
                  <div key={`duplicate-${index}`} className="mx-6">
                    <img
                      src={`/images/logos/${company.logo}.png`}
                      alt={company.name}
                      className="object-contain transition-opacity duration-300 h-11 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <GapstackFeatures />

      <PaymentMethods />

      <section className="pt-8 md:pt-16 max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300 bg-background">
        <div className=" md:px-0">
          <div className="grid items-end gap-8 lg:grid-cols-12 md:gap-10 ">
            <div className="col-span-7">
              <img
                src="/images/image_four.png"
                alt=""
                className="object-cover w-full rounded-tr-2xl h-60 md:h-80"
              />
            </div>
            <div className="col-span-4">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl md:mb-6">
                Our Platform
              </h2>

              <ul className="pb-5 text-gray-600 list-disc list-inside ">
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
