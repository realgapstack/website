import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Button from "./Button";

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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    message?: string;
  }>({});

  const totalSteps = 4;
  const carouselRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setCurrentStep(newIndex + 1);
    },
  };

  const handleNext = () => carouselRef.current?.slickNext();
  const handlePrevious = () => carouselRef.current?.slickPrev();

  const handleComplete = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://demo.gapstack.com:8443/website-backend/message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

      setFormData({ fullName: "", email: "", message: "" });
      setErrors({});
      setCurrentStep(1);
      onOpenChange(false);
    } catch (err) {
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (value: string) => {
    if (!value) return "Email is required";
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(value)) return "Enter a valid email";
    return "";
  };

  const validateFullName = (value: string) => {
    if (!value || !value.trim()) return "Full name is required";
    if (value.trim().length < 2) return "Full name is too short";
    return "";
  };

  const validateMessage = (value: string) => {
    if (!value || !value.trim()) return "Message is required";
    if (value.trim().length < 10) return "Message is too short";
    return "";
  };

  const setField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    let err = "";
    if (field === "fullName") err = validateFullName(value);
    if (field === "email") err = validateEmail(value);
    if (field === "message") err = validateMessage(value);
    setErrors((prev) => ({ ...prev, [field]: err || undefined }));
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="bg-background w-full sm:w-[40%] h-full flex flex-col"
      >
        <div className="flex justify-end p-4 sm:hidden">
          <button
            onClick={() => onOpenChange(false)}
            className="p-2 rounded-md hover:bg-muted"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* Steps */}
        <div className="flex-1 overflow-hidden">
          <Slider
            ref={carouselRef}
            {...settings}
            className="h-full overflow-hidden"
          >
            {/* Step 1 */}
            <CustomSlide>
              <h2 className="mb-4 text-2xl font-bold">Partner with Gapstack</h2>
              <p className="mb-8 text-muted-foreground">
                Digital Infrastructure that connects people and markets enabling
                seamless flow of value.
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
                value={formData.fullName}
                placeholder="Enter your full name"
                onChange={(e) => setField("fullName", e.target.value)}
                className="text-lg border-0 border-b rounded-none shadow-none border-muted-foreground focus:border-b-2 focus:border-purple-500 focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none focus:outline-none"
              />
              {errors.fullName && (
                <div className="mt-2 text-sm text-red-500">
                  {errors.fullName}
                </div>
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
                Email Address
              </label>
              <Input
                type="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={(e) => setField("email", e.target.value)}
                className="text-lg border-0 border-b rounded-none shadow-none border-muted-foreground focus:border-b-2 focus:border-purple-500 focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none focus:outline-none"
              />
              {errors.email && (
                <div className="mt-2 text-sm text-red-500">{errors.email}</div>
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
              <label className="mb-1 text-sm font-medium text-muted-foreground">
                Your Message
              </label>
              <Textarea
                value={formData.message}
                placeholder="Tell us how we can help you..."
                onChange={(e) => setField("message", e.target.value)}
                className="min-h-[120px] text-lg border-0 border-b border-muted-foreground rounded-none focus:border-b-2 focus:border-purple-500 focus:ring-0 focus-visible:ring-0 focus-visible:shadow-none focus:outline-none shadow-none resize-none"
              />
              {errors.message && (
                <div className="mt-2 text-xs text-red-500">
                  {errors.message}
                </div>
              )}
              <div className="mt-8">
                <Button
                  onClick={handleComplete}
                  className={`bg-purple-primary hover:bg-purple-700 text-white px-8 ${
                    !formData.message.trim() ||
                    isSubmitting ||
                    Object.values(errors).some(Boolean)
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </CustomSlide>
          </Slider>
        </div>
        {/* Pagination + Nav */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-muted-foreground">
            <span className="text-xl font-bold text-foreground">
              {currentStep}
            </span>
            <span className="mx-1 text-base font-normal text-muted-foreground">
              /
            </span>
            <span className="text-base font-normal text-muted-foreground">
              {totalSteps}
            </span>
          </div>
          <div className="flex">
            <button
              onClick={handlePrevious}
              className="p-3 mr-2 rounded-sm cursor-pointer bg-purple-primary"
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 mr-2 rounded-sm cursor-pointer bg-purple-primary"
              disabled={currentStep === totalSteps}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
