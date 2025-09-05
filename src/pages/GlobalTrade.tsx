import Section from "@/components/Section";
import Button from "../components/Button";

const GlobalTrade = () => {
  return (
    <div>
      <Section className="text-center">
        <div className="">
          <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl md:mb-6 text-balance">
            The single Digital Trade Financing Platform
          </h1>
          <p className="text-gray-600 text-base text-[13px] mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            At Gapstack, we digitize your buyer- supplier arrangements; unlock
            and accelerate funding from your international and domestic value
            chain while expanding your unique business relationships.
          </p>
          <div className="flex flex-col justify-center gap-4 px-4 sm:flex-row sm:gap-6">
            <Button>Contact Sales</Button>
          </div>
        </div>
      </Section>

      <div className="relative w-full h-px border-t border-grey border-dotted">
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

      <Section className="">
        <div className="">
          <div className="relative">
            <div className="w-full mx-auto">
              <img
                src="/images/bid_bonds.png"
                alt="Placeholder"
                // layout="fill"
                // objectFit="contain"
                className="h-[27rem] w-full"
              />
            </div>
            {/* Corner plus icons - only in video section */}
            {/* <div className="absolute w-4 h-4 text-gray-400 -top-2 -left-2">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path
                      d="M8 0v16M0 8h16"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="absolute w-4 h-4 text-gray-400 -top-2 -right-2">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path
                      d="M8 0v16M0 8h16"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div> */}
            {/* <div className="absolute w-4 h-4 text-gray-400 -bottom-2 -left-2">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path
                      d="M8 0v16M0 8h16"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="absolute w-4 h-4 text-gray-400 -bottom-2 -right-2">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path
                      d="M8 0v16M0 8h16"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div> */}
          </div>
        </div>
      </Section>

      <div className="relative w-full h-px border-t border-grey border-dotted">
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

      <Section className="py-8 md:py-16">
        {/* Trade Operating System Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold ">Trade Operating System</h2>
            <p className="mt-4 text-[13px] text-gray-600 max-w-xl mx-auto">
              Using a single technology platform, and with key financiers, we
              provide all the solutions for business to access trade and supply
              chain finance to expand their markets.
            </p>
          </div>
          <div className="grid items-start grid-cols-12 gap-8 mt-8">
            {/* Image */}
            <div className="h-full col-span-4 overflow-hidden bg-gray-200 rounded-lg">
              <img
                src="/images/os_image.png" // Replace with actual image URL or path
                alt="Person handling fruits"
                // width={384}
                // height={416}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Features */}
            <div className="grid grid-cols-2 col-span-8 gap-8 pr-2">
              <div className="">
                <div className="flex items-center justify-center w-8 h-8 mb-2 bg-orange-100 rounded-full">
                  <img
                    src={`/icons/user-search-01.svg`}
                    alt=""
                    // height={20}
                    // width={20}
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold ">
                  Onboarding For Finance
                </h3>
                <p className="mt-2 text-gray-600">
                  Our solution, powered by artificial intelligence and connected
                  to key government and business databases, cuts from days to
                  minutes KnowYourCustomer (KYC)and KnowYourBusiness (KYB)
                  compliance, resulting in faster decision making.
                </p>
              </div>
              <div className="">
                <div className="flex items-center justify-center w-8 h-8 mb-2 bg-blue-100 rounded-full">
                  <img
                    src={`/icons/container-truck-01.svg`}
                    alt=""
                    // height={20}
                    // width={20}
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold ">Supply Chain Finance</h3>
                <p className="mt-2 text-gray-600">
                  From invoice discounting, reverse factoring to distributor
                  finance, Gapstack unlocks working capital for your trade
                  transactions, allowing you to access finance immediately, via
                  USD, WhatsApp, Web & Telegram, wherever you are.
                </p>
              </div>
              <div className="">
                <div className="flex items-center justify-center w-8 h-8 mb-2 bg-pink-100 rounded-full">
                  <img
                    src={`/icons/boat.svg`}
                    alt=""
                    height={20}
                    width={20}
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold ">
                  Trade Finance Solutions
                </h3>
                <p className="mt-2 text-gray-600">
                  Unlock strategic funding pockets for international trade. We
                  have built robust automation to streamline trade finance
                  processes which help in accessing import and export financing.
                </p>
              </div>
              <div className="">
                <div className="flex items-center justify-center w-8 h-8 mb-2 bg-green-100 rounded-full">
                  <img
                    src={`/icons/tags.svg`}
                    alt=""
                    // height={20}
                    // width={20}
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold ">
                  Enterprise Management
                </h3>
                <p className="mt-2 text-gray-600">
                  We even provide the ERP tools for you tomanage business flows,
                  optimise your finance and improve your credit scoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        wrapperClassName="bg-[url('/images/global_progress_bg.jpg')] bg-cover bg-center"
        className="relative mx-auto overflow-hidden py-12"
      >
        <div className="relative z-10 ">
          <div className="relative z-10 px-8 text-center text-white">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Built For Global Progress
            </h2>
            <div className="max-w-xl mx-auto">
              <p className="text-[13px] leading-relaxed">
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

      <Section className="py-8 md:py-16">
        {/* Explore Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold ">
            Explore The Gapstack Advantage Now
          </h2>
          <Button size="lg" className="mt-6">
            Unlock Your Potential
          </Button>
        </div>

        {/* Three Columns */}
        <div className="mt-12 grid grid-cols-3 gap-8 pt-0.5">
          <div className="">
            <div className="rounded-lg">
              <img
                src="/images/explore_one.png"
                alt="Bid Bonds"
                // layout="fill"
                // objectFit="contain"
                className=""
                height={160}
                width={316}
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold ">Gapstack For Banks</h3>
            <p className="mt-2 text-gray-600">
              Optimize your eco-system and value chain financing processes with
              Gapstack. Enrich your market acquisition strategy through our
              comprehensive digital onboarding tool and manage credit risk
              dynamically through our data engine to grow profitable
              relationship with new and existing businesses.
            </p>
          </div>
          <div className="">
            <div className="rounded-lg">
              <img
                src="/images/explore_two.png"
                alt="Bid Bonds"
                // layout="fill"
                // objectFit="contain"
                className=""
                height={160}
                width={316}
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold ">
              Gapstack for Businesses
            </h3>
            <p className="mt-2 text-gray-600">
              Access working capital. Grow your business. Gapstack provides the
              means to connect you to your buyers, suppliers and financiers.
            </p>
          </div>
          <div className="">
            <div className="rounded-lg">
              <img
                src="/images/explore_three.png"
                alt="Bid Bonds"
                // layout="fill"
                // objectFit="contain"
                className=""
                height={160}
                width={316}
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold ">Gapstack for Agents</h3>
            <p className="mt-2 text-gray-600">
              Digitize your capital deployment and explore new trade asset
              classes. Build verticals of interest to your investment strategy.
              Manage your portfolio directly on the platform.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GlobalTrade;
