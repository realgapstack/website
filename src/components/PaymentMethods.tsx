interface PaymentMethod {
  image: string;
  alt: string;
  title: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    image: "/images/banks.png",
    alt: "Bank",
    title: "Banks",
  },
  {
    image: "/images/wallets.png",
    alt: "Wallet",
    title: "Wallets",
  },
  {
    image: "/images/cards.png",
    alt: "Card",
    title: "Cards",
  },
  {
    image: "/images/cash.png",
    alt: "Cash",
    title: "Cash",
  },
];

export default function PaymentMethods() {
  return (
    <section className="py-8 md:py-16 max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300">
      <div className="md:px-0">
        <div className="">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Payment Methods Suited To Your Customers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="p-[5px] bg-background rounded-[10px]">
                <img
                  src={method.image}
                  alt={method.alt}
                  // width={223}
                  // height={100}
                  className="w-full h-auto"
                />
                <h3 className="font-semibold text-sm md:text-base">
                  {method.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
