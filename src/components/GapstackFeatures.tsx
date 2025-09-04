interface Feature {
  iconBgColor: string;
  icon: string;
  title: string;
  items: string[];
}

const features: Feature[] = [
  {
    iconBgColor: "bg-orange-100",
    icon: "nano-technology",
    title: "Powerful and cutting-edge technology",
    items: ["Modern scalable API", "Easy integration", "Simplified operations"],
  },
  {
    iconBgColor: "bg-blue-100",
    icon: "user-sharing",
    title: "Build relationships with vendors",
    items: [
      "Partner management services",
      "Reconciliation services",
      "Revenue Assurance",
    ],
  },
  {
    iconBgColor: "bg-green-100",
    icon: "tags",
    title: "White Labelled",
    items: [
      "Customized with your brand and logo",
      "Control your pricing and promo strategy",
      "with a high degree of flexibility",
      "API first & Cloud native platform",
    ],
  },
  {
    iconBgColor: "bg-purple-100",
    icon: "magic-wand-01",
    title: "AI - assisted",
    items: [
      "Leveraging AI for Global payments",
      "Leveraging AI for Analytics",
      "Leveraging AI for Operational Efficiency",
    ],
  },
];

interface GapstackFeaturesProps {
  title?: string;
  imagePlaceholderBg?: string;
}

export default function GapstackFeatures({
  title = "Gapstack Global Payments",
  imagePlaceholderBg = "bg-pink-200",
}: GapstackFeaturesProps) {
  return (
    <section className="py-8 md:py-16 max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300">
      <div className="md:px-0">
        <div className="">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            {title}
          </h2>
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-5">
              <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl border border-gray-200 overflow-hidden">
                <div
                  className={`absolute inset-0 ${imagePlaceholderBg} flex items-center justify-center`}
                >
                  <img
                    src="/images/image_three.png"
                    alt="image_two"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-6 md:space-8 grid grid-cols-2 col-span-7">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3 md:gap-4">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${feature.iconBgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <img
                      src={`/icons/${feature.icon}.svg`}
                      alt=""
                      // height={20}
                      // width={20}
                      className=""
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                      {feature.title}
                    </h3>
                    <ul className="text-gray-600 text-xs md:text-sm space-y-1">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="list-disc list-inside">
                          {" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
