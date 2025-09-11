import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

interface Slide {
  image: string;
  title: string;
  bullets: string[];
}

interface CustomCarouselProps {
  slides: Slide[];
  className?: string;
}

export function CustomCarousel({ slides, className }: CustomCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    handleSelect();
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className={`relative w-full ${className || ""}`}>
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 6000,
            stopOnLastSnap: true,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-0">
                <div className="md:col-span-7 min-h-[200px] md:min-h-[236px]">
                  <img
                    src={slide.image}
                    alt={`${slide.title} screenshot`}
                    className="object-cover w-full h-full rounded-lg md:rounded-tr-lg md:rounded-bl-none md:rounded-tl-none md:rounded-br-none"
                  />
                </div>
                <div className="flex flex-col justify-center px-4 pb-12 md:col-span-5 md:px-0 md:pr-6 md:pb-0">
                  <h2 className="mb-3 text-lg font-bold md:text-2xl md:mb-4">
                    {slide.title}
                  </h2>
                  <ul className="pl-4 space-y-1 text-sm list-disc md:pl-5 md:text-base">
                    {slide.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 md:right-[34.7%] md:left-auto md:transform-none flex items-center gap-1 bottom-3 md:bottom-2 bg-background px-2 py-1 rounded-full"
        role="tablist"
        aria-label="Carousel indicators"
      >
        {slides.map((_, dotIndex) => {
          const active = current === dotIndex;
          return (
            <button
              key={dotIndex}
              onClick={() => api?.scrollTo(dotIndex)}
              className={`h-2 rounded-full transition-all duration-300 bg-purple-primary ${
                active ? "w-4 md:w-6" : "w-2"
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
              aria-selected={active}
              role="tab"
            />
          );
        })}
      </div>
    </div>
  );
}
