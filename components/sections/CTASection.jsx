import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Take Control?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
              Start managing your subscriptions today and see how much you can
              save.
            </p>
          </div>
          <div className="space-x-4">
            <Button
              size="lg"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90"
            >
              Stop Overpaying Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
