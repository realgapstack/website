import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Button from "./Button";

interface ContactSalesSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleComplete = async () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      setSubmitError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(
        "https://demo.gapstack.com:8443/website-backend/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Reset form and close on success
      setCurrentStep(1);
      setFormData({ fullName: "", email: "", message: "" });
      onOpenChange(false);

      // You might want to show a success message here
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setCurrentStep(1);
      setFormData({ fullName: "", email: "", message: "" });
    }
    onOpenChange(newOpen);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent
        side="right"
        className="bg-background transition-transform duration-300 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full w-full sm:w-[40%] overflow-y-auto h-full"
      >
        <SheetHeader className="mb-8">
          <SheetTitle className="sr-only">Gapstack Onboarding</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full p-4">
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center">
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    Let's get started
                  </h2>
                  <p className="text-muted-foreground">
                    Tell us about yourself and how we can help with your
                    business needs. We'll get back to you as soon as possible.
                  </p>
                </div>
                <Button
                  onClick={handleNext}
                  className="bg-purple-primary hover:bg-purple-700 text-white w-full py-6 text-base"
                >
                  Get Started
                </Button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="space-y-8">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="text-sm font-medium text-muted-foreground mb-1 block"
                    >
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      placeholder="Enter your full name"
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="text-lg p-0 border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-purple-500"
                    />
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button
                    // variant="ghost"
                    onClick={handlePrevious}
                    className="text-muted-foreground"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="bg-purple-primary hover:bg-purple-700 text-white px-8"
                    // disabled={!formData.fullName.trim()}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="space-y-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-muted-foreground mb-1 block"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      placeholder="Enter your email address"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="text-lg p-0 border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-purple-500"
                    />
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button
                    // variant="ghost"
                    onClick={handlePrevious}
                    className="text-muted-foreground"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="bg-purple-primary hover:bg-purple-700 text-white px-8"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-8">
                <div className="space-y-8">
                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-muted-foreground mb-1 block"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px] text-lg p-0 border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-purple-500 resize-none"
                    />
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button
                    // variant="ghost"
                    onClick={handlePrevious}
                    className="text-muted-foreground"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleComplete}
                    className={`bg-purple-primary hover:bg-purple-700 text-white px-8 ${
                      !formData.message.trim() || isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
                {submitError && (
                  <div className="mt-4 text-sm text-red-500">{submitError}</div>
                )}
              </div>
            )}
          </div>

          {submitError && (
            <div className="mt-4 text-sm text-red-500">{submitError}</div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
