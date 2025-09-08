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
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-7 min-h-[236px]">
                  <img
                    src={slide.image}
                    alt={`${slide.title} screenshot`}
                    className="object-cover w-full h-full rounded-tr-lg"
                  />
                </div>
                <div className="flex flex-col justify-center md:col-span-5 md:pr-6">
                  <h2 className="mb-4 text-2xl font-bold">{slide.title}</h2>
                  <ul className="pl-5 space-y-1 list-disc">
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
        className="absolute right-[38%] flex items-center gap-1 bottom-5 bg-background"
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
                active ? " w-6" : "w-2"
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
