import { ContactSalesSheet } from "@/components/ContactSalesSheet";
import Section from "@/components/Section";
import { useContactSales } from "@/hooks/useContactSales";
import Button from "../components/Button";

// Reusable feature item component
interface Feature {
  title: string;
  icon: string;
  bg: string;
  description: string;
}

const FeatureItem = ({ title, icon, bg, description }: Feature) => (
  <div className="text-center md:text-left">
    <div
      className={`flex items-center justify-center w-10 h-10 mb-2 mx-auto md:mx-0 rounded-full ${bg}`}
    >
      <img src={`/icons/${icon}.svg`} alt="" className="w-5 h-5" />
    </div>
    <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 md:text-base">{description}</p>
  </div>
);

const GlobalTrade = () => {
  const { openSheet, isOpen, closeSheet } = useContactSales();

  const features: Feature[] = [
    {
      title: "Onboarding For Finance",
      icon: "user-search-01",
      bg: "bg-orange/20",
      description:
        "Our solution, powered by artificial intelligence and connected to key government and business databases, cuts from days to minutes Know Your Customer (KYC) and Know Your Business (KYB) compliance, resulting in faster decision making.",
    },
    {
      title: "Supply Chain Finance",
      icon: "container-truck-01",
      bg: "bg-primary-blue/20",
      description:
        "From invoice discounting, reverse factoring to distributor finance, Gapstack unlocks working capital for your trade transactions, allowing you to access finance immediately, via USD, WhatsApp, Web & Telegram, wherever you are.",
    },
    {
      title: "Trade Finance Solutions",
      icon: "boat",
      bg: "bg-purple-primary/20",
      description:
        "Unlock strategic funding pockets for international trade. We have built robust automation to streamline trade finance processes which help in accessing import and export financing.",
    },
    {
      title: "Enterprise Management",
      icon: "tags",
      bg: "bg-green/20",
      description:
        "We even provide the ERP tools for you to manage business flows, optimise your finance and improve your credit scoring.",
    },
  ];

  return (
    <>
      <Section
        className="px-4 pt-10 text-center border-b-0 pb-7"
        wrapperClassName="border-b-0"
      >
        <h1 className="mb-4 text-2xl font-bold leading-tight md:text-5xl lg:text-5xl md:mb-6 text-balance">
          The single Digital Trade Financing Platform
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-sm leading-relaxed text-gray-600 md:text-base md:mb-8">
          At Gapstack, we digitize your buyer- supplier arrangements; unlock and
          accelerate funding from your international and domestic value chain
          while expanding your unique business relationships.
        </p>
        <div className="flex flex-col justify-center gap-4 px-4 sm:flex-row sm:gap-6">
          <Button onClick={openSheet}>Contact Sales</Button>
        </div>
      </Section>

      <div className="relative w-full h-px border-t border-dotted border-grey">
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

      <div className="relative ">
        <div className="absolute z-10 w-full h-px border-t border-dotted border-grey top-5" />

        <Section
          className="relative pt-6 md:pt-10 bg-background rounded-2xl"
          wrapperClassName="border-0!"
        >
          <div className="relative px-4 mx-auto w-fit">
            <img
              src="/images/bid_bonds.png"
              alt="Placeholder"
              className="h-64 md:h-[27rem] w-auto max-w-full"
            />
            {/* Gradient overlay on top of image (right fade) */}
            <div className="pointer-events-none absolute right-0 left-0 bg-gradient-to-r from-[rgba(244,248,249,0)] to-[rgba(244,248,249,1)] h-8 md:h-14 bottom-0" />
          </div>
        </Section>
        <div className="absolute z-10 w-full h-px border-t border-dotted border-grey bottom-5" />
      </div>
      <div className="relative w-full h-px border-t border-dotted border-grey">
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

      <Section className="px-4 py-8 md:py-16">
        {/* Trade Operating System Section */}
        <div className="mt-8 md:mt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-4xl">
              Trade Operating Systems
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-sm text-gray-600 md:text-base">
              Using a single technology platform, and with key financiers, we
              provide all the solutions for business to access trade and supply
              chain finance to expand their markets.
            </p>
          </div>
          <div className="grid items-start grid-cols-1 gap-6 mt-6 lg:grid-cols-12 md:gap-8 md:mt-8">
            {/* Image */}
            <div className="h-48 overflow-hidden bg-gray-200 rounded-lg md:h-full lg:col-span-4">
              <img
                src="/images/os_image.png"
                alt="Person handling fruits"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Features */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8 md:gap-8 lg:pr-2">
              {features.map((f) => (
                <FeatureItem key={f.title} {...f} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        wrapperClassName="bg-[url('/images/global_progress_bg.jpg')] bg-cover bg-center"
        className="relative py-8 mx-auto overflow-hidden md:py-12"
      >
        <div className="relative z-10">
          <div className="relative z-10 px-6 text-center text-white md:px-8">
            <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              Built For Global Progress
            </h2>
            <div className="max-w-xl mx-auto">
              <p className="text-sm leading-relaxed md:text-base">
                We are passionate about trade. We understand trade is the true
                agent of economic transformation for the world. Gapstack's
                platform is a comprehensive suite of automation, financing &
                community to let businesses grow, trading domestically and
                internationally.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="px-4 py-8 md:py-16">
        {/* Explore Section */}
        <div className="mt-8 text-center md:mt-16">
          <h2 className="text-2xl font-bold md:text-4xl">
            Explore The Gapstack Advantage Now
          </h2>
          <Button size="lg" className="mt-6" onClick={openSheet}>
            Unlock Your Potential
          </Button>
        </div>

        {/* Three Columns */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-0.5">
          <div className="text-center md:text-left">
            <div className="rounded-lg">
              <img
                src="/images/explore_one.png"
                alt="Bid Bonds"
                className="w-full h-auto max-w-sm mx-auto md:max-w-none"
                height={160}
                width={316}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold md:text-xl">
              Gapstack For Banks
            </h3>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Optimize your eco-system and value chain financing processes with
              Gapstack. Enrich your market acquisition strategy through our
              comprehensive digital onboarding tool and manage credit risk
              dynamically through our data engine to grow profitable
              relationship with new and existing businesses.
            </p>
          </div>
          <div className="text-center md:text-left">
            <div className="rounded-lg">
              <img
                src="/images/explore_two.png"
                alt="Bid Bonds"
                className="w-full h-auto max-w-sm mx-auto md:max-w-none"
                height={160}
                width={316}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold md:text-xl">
              Gapstack for Businesses
            </h3>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Access working capital. Grow your business. Gapstack provides the
              means to connect you to your buyers, suppliers and financiers.
            </p>
          </div>
          <div className="text-center md:text-left">
            <div className="rounded-lg">
              <img
                src="/images/explore_three.png"
                alt="Bid Bonds"
                className="w-full h-auto max-w-sm mx-auto md:max-w-none"
                height={160}
                width={316}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold md:text-xl">
              Gapstack for Agents
            </h3>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Digitize your capital deployment and explore new trade asset
              classes. Build verticals of interest to your investment strategy.
              Manage your portfolio directly on the platform.
            </p>
          </div>
        </div>
      </Section>
      <ContactSalesSheet open={isOpen} onOpenChange={closeSheet} />
    </>
  );
};

export default GlobalTrade;
