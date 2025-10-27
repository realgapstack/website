import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Slider from "react-slick";
import { toast } from "sonner";
import { z } from "zod";
import Button from "./Button";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name is too short")
    .max(100, "Full name is too long"),
  email: z.email("Enter a valid email"),
  message: z
    .string()
    .min(10, "Message is too short")
    .max(500, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

interface ContactSalesSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CustomSlide = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center h-full px-4">{children}</div>
  );
};

export function ContactSalesSheet({
  open,
  onOpenChange,
}: ContactSalesSheetProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const carouselRef = useRef<Slider>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (_: any, next: number) => setCurrentStep(next + 1),
  };

  const handleNext = () => carouselRef.current?.slickNext();
  const handlePrevious = () => carouselRef.current?.slickPrev();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch(
        "https://demo.gapstack.com:8443/website-backend/message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.fullName,
            email: data.email,
            message: data.message,
          }),
        }
      );

      if (!res.ok) throw new Error();

      toast.success("Message sent successfully ✅");
      reset();
      setCurrentStep(1);
      onOpenChange(false);
    } catch {
      toast.error("Something went wrong. Please try again ❌");
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-background w-full sm:w-[40%] h-full flex flex-col">
        <div className="flex justify-end p-4 sm:hidden">
          <button
            onClick={() => onOpenChange(false)}
            className="p-2"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 overflow-hidden"
        >
          <Slider
            ref={carouselRef}
            {...settings}
            className="h-full overflow-hidden"
          >
            {/* Step 1 */}
            <CustomSlide>
              <h2 className="mb-4 text-2xl font-bold">Partner with Gapstack</h2>
              <p className="mb-8 text-muted-foreground">
                Digital Infrastructure that connects people and markets.
              </p>
              <div className="inline-block">
                <Button
                  onClick={handleNext}
                  className="px-4 py-2 text-base text-white bg-purple-primary hover:bg-purple-700"
                >
                  Get Started
                </Button>
              </div>
            </CustomSlide>

            {/* Step 2 */}
            <CustomSlide>
              <label className="mb-1 text-sm font-medium text-muted-foreground">
                Full Name
              </label>
              <Input
                {...register("fullName")}
                placeholder="Your full name"
                className="text-lg border-0 border-b rounded-none shadow-none border-muted-foreground focus:border-b-2 focus:border-purple-500 focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none focus:outline-none"
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
              <div className="mt-8">
                <Button
                  onClick={handleNext}
                  className="px-8 text-white bg-purple-primary hover:bg-purple-700"
                >
                  Continue
                </Button>
              </div>
            </CustomSlide>

            {/* Step 3 */}
            <CustomSlide>
              <label className="mb-1 text-sm font-medium text-muted-foreground">
                Email
              </label>
              <Input
                {...register("email")}
                placeholder="Your email"
                className="text-lg border-0 border-b rounded-none shadow-none border-muted-foreground focus:border-b-2 focus:border-purple-500 focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none focus:outline-none"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
              <div className="mt-8">
                <Button
                  onClick={handleNext}
                  className="px-8 text-white bg-purple-primary hover:bg-purple-700"
                >
                  Continue
                </Button>
              </div>
            </CustomSlide>

            {/* Step 4 */}
            <CustomSlide>
              <label className="text-sm">Message</label>
              <Textarea
                {...register("message")}
                placeholder="Tell us how we can help..."
                className="min-h-[120px] text-lg border-0 border-b border-muted-foreground rounded-none focus:border-b-2 focus:border-purple-500 focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none focus:outline-none shadow-none resize-none"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
              <div className="mt-8">
                <Button type="submit" className="mt-8" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </div>
            </CustomSlide>
          </Slider>
        </form>

        <div className="flex items-center justify-between py-4">
          <span className="text-sm text-muted-foreground">
            {currentStep} / {totalSteps}
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="p-2 text-white rounded bg-purple-primary"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === totalSteps}
              className="p-2 text-white rounded bg-purple-primary"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
