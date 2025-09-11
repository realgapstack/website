import Section from "./Section";

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
    <Section className="pt-8 pb-8 md:pt-12 md:pb-11">
      <h2 className="mb-6 text-xl font-bold text-center text-gray-900 md:text-3xl md:mb-12">
        Payment Methods Suited To Your Customers
      </h2>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="p-3 bg-background rounded-[10px] md:p-[5px]"
          >
            <img
              src={method.image}
              alt={method.alt}
              className="w-full h-auto mb-2 md:mb-1"
            />
            <h3 className="text-xs font-semibold text-center md:text-base md:text-left">
              {method.title}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
