import Button from "../components/Button";

const TradeFinance = () => {
  return (
    <div>
      <section className="text-center py-8 md:py-16 max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight text-balance">
            The single Digital Trade Financing Platform
          </h1>
          <p className="text-gray-600 text-base text-[13px] mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            At Gapstack, we digitize your buyer- supplier arrangements; unlock
            and accelerate funding from your international and domestic value
            chain while expanding your unique business relationships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <Button>Contact Sales</Button>
          </div>
        </div>
      </section>

      <div className="w-full h-px border-t border-dotted border-gray-300 relative">
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
            {/* <div className="absolute -top-2 -left-2 w-4 h-4 text-gray-400">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path
                      d="M8 0v16M0 8h16"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 text-gray-400">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path
                      d="M8 0v16M0 8h16"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div> */}
            {/* <div className="absolute -bottom-2 -left-2 w-4 h-4 text-gray-400">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path
                      d="M8 0v16M0 8h16"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 text-gray-400">
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
      </section>

      <div className="w-full h-px border-t border-dotted border-gray-300 relative">
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

      <section className="py-8 md:py-16 max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300">
        {/* Trade Operating System Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-indigo-900">
              Trade Operating System
            </h2>
            <p className="mt-4 text-[13px] text-gray-600 max-w-xl mx-auto">
              Using a single technology platform, and with key financiers, we
              provide all the solutions for business to access trade and supply
              chain finance to expand their markets.
            </p>
          </div>
          <div className="mt-8 items-start grid grid-cols-12 gap-8">
            {/* Image */}
            <div className="bg-gray-200 rounded-lg overflow-hidden col-span-4 h-full">
              <img
                src="/images/os_image.png" // Replace with actual image URL or path
                alt="Person handling fruits"
                // width={384}
                // height={416}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Features */}
            <div className="grid grid-cols-2 gap-8 col-span-8 pr-2">
              <div className="">
                <div className="w-8 h-8 bg-orange-100 rounded-full mb-2 justify-center items-center flex">
                  <img
                    src={`/icons/user-search-01.svg`}
                    alt=""
                    // height={20}
                    // width={20}
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900">
                  Onboarding Finance
                </h3>
                <p className="mt-2 text-gray-600">
                  Our solution, powered by artificial intelligence and connected
                  to key government and business databases, cuts from days to
                  minutes KnowYourCustomer (KYC)and KnowYourBusiness (KYB)
                  compliance, resulting in faster decision making.
                </p>
              </div>
              <div className="">
                <div className="w-8 h-8 bg-blue-100 rounded-full mb-2 justify-center items-center flex">
                  <img
                    src={`/icons/container-truck-01.svg`}
                    alt=""
                    // height={20}
                    // width={20}
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900">
                  Supply Chain Finance
                </h3>
                <p className="mt-2 text-gray-600">
                  From invoice discounting, reverse factoring to distributor
                  finance, Gapstack unlocks working capital for your trade
                  transactions, allowing you to access finance immediately, via
                  USD, WhatsApp, Web & Telegram, wherever you are.
                </p>
              </div>
              <div className="">
                <div className="w-8 h-8 bg-pink-100 rounded-full mb-2 justify-center items-center flex">
                  <img
                    src={`/icons/boat.svg`}
                    alt=""
                    height={20}
                    width={20}
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900">
                  Trade Finance Solutions
                </h3>
                <p className="mt-2 text-gray-600">
                  Unlock strategic funding pockets for international trade. We
                  have built robust automation to streamline trade finance
                  processes which help in accessing import and export financing.
                </p>
              </div>
              <div className="">
                <div className="w-8 h-8 bg-green-100 rounded-full mb-2 justify-center items-center flex">
                  <img
                    src={`/icons/tags.svg`}
                    alt=""
                    // height={20}
                    // width={20}
                    className=""
                  />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900">
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
      </section>

      {/* Built For Global Progress Section */}
      <section className=" mx-auto relative overflow-hidden">
        {/* Background overlay */}

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/global_progress_bg.jpg" // You'll need to add this image
            alt="Global Progress Background"
            // fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-[979px] mx-auto relative z-10  border-l border-r border-dotted border-l-gray-300 border-r-gray-300 py-16 md:py-24 ">
          <div className="relative z-10 text-center text-white px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built For Global Progress
            </h2>
            <p className="text-[13px]  max-w-4xl mx-auto leading-relaxed">
              We are passionate about trade. We understand trade is the true
              agent of economic transformation for the world. Gapstack's
              platform is a comprehensive suite of automation, financing &
              community to let businesses grow, trading domestically and
              internationally.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px border-t border-dotted border-gray-300 relative">
        {/* <div className="absolute left-1/2 top-0 w-full max-w-[979px] -translate-x-1/2">
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
            </div> */}
      </div>

      <section className="py-8 md:py-16 max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300">
        {/* Explore Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-indigo-900">
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
            <h3 className="mt-4 text-xl font-semibold text-indigo-900">
              Gapstack For Banks
            </h3>
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
            <h3 className="mt-4 text-xl font-semibold text-indigo-900">
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
            <h3 className="mt-4 text-xl font-semibold text-indigo-900">
              Gapstack for Agents
            </h3>
            <p className="mt-2 text-gray-600">
              Digitize your capital deployment and explore new trade asset
              classes. Build verticals of interest to your investment strategy.
              Manage your portfolio directly on the platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradeFinance;
