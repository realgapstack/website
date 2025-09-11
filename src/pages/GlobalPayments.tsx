import Button from "@/components/Button";
import { ContactSalesSheet } from "@/components/ContactSalesSheet";
import { useContactSales } from "@/hooks/useContactSales";
// import { Section } from "lucide-react";
import { CustomCarousel } from "@/components/CustomCarousel";
import Section from "@/components/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // Adjust the import path based on your project setup
import AutoScroll from "embla-carousel-auto-scroll";
import GapstackFeatures from "../components/GapstackFeatures";
import PaymentMethods from "../components/PaymentMethods";

const slides = [
  {
    image: "/images/image_four.png",
    title: "Our Platform",
    bullets: [
      "Full suite of APIs that fits the targeted audience",
      "Highly flexible to adapt to business innovations",
      "Extensive developer tools to ease and speed up integration",
    ],
  },
  {
    image: "/images/image_five.png",
    title: "Our Platform",
    bullets: [
      "Architecture designed for scalability & data protection",
      "Compliance management tools",
      "Real time transactions and notifications",
    ],
  },
];

const GlobalPayments = () => {
  const { openSheet, isOpen, closeSheet } = useContactSales();
  const logos = [
    { name: "OR.SEND", logo: "orisend" },
    { name: "NMB", logo: "nmb" },
    { name: "Credit Bank", logo: "credit-bank" },
    { name: "Simba Money", logo: "simba-money" },
    { name: "Kenswitch", logo: "kenswitch" },
  ];
  return (
    <div className="">
      <Section className="relative pt-10 pb-8 text-center">
        <div className="relative max-w-[618px] mx-auto">
          <h1 className="relative z-10 mb-4 text-4xl font-bold md:leading-14 md:text-5xl md:mb-6 text-balance">
            Building Trust And Driving Growth By Revolutionizing How Money Moves
            Across Borders.
          </h1>
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-2/3 w-[587px] h-96 object-covering opacity-20"
        >
          <source src="/tester.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p className="text-gray-600 text-base text-[13px] mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed z-10 relative">
          With Gapstack, you can create new revenue streams and build customer
          loyalty by offering seamless, transparent multi-currency, multi
          country solutions. Our platform ensure security and compliance every
          step of the way.
        </p>
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-6">
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

      <Section className="">
        <div className="container grid items-center grid-cols-12 mx-auto sm:px-4 align-center">
          <div className="col-span-3 py-12 border-r border-dotted border-grey">
            <p className="text-center text-muted-foreground ">
              Powering global payments for:
            </p>
          </div>

          <div className="relative w-full col-span-9 overflow-hidden">
            <Carousel
              opts={{
                loop: true,
                dragFree: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 1,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="flex">
                {[...logos, ...logos].map((company, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-shrink-0 mx-4 basis-auto"
                  >
                    <img
                      src={`/images/logos/${company.logo}.png`}
                      alt={company.name}
                      className="object-contain transition-opacity duration-300 h-11 hover:opacity-100"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </Section>
      <GapstackFeatures />
      <PaymentMethods />
      <Section className="pt-16 bg-background md:pt-28">
        <CustomCarousel slides={slides} />
      </Section>
      <div className="relative w-full h-px border-t border-dotted border-grey" />
      <section className="text-center py-8 md:py-16 max-w-[979px] mx-auto border-l border-r border-dotted border-l-grey border-r-grey">
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
