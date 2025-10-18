import { BarChart3, Calendar, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import NewsletterForm from "./newsletter-form";

export default function Page() {
  return (
    <div className="grid-pattern min-h-screen bg-background">
      {/* Header */}
      <header className="border-border/40 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg lowercase">framebase26</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-3 py-1">
              {"Coming Soon"}
            </Badge>

            {/* Hero Section */}
            <h1 className="mb-6 text-balance font-bold text-4xl md:text-6xl lg:text-7xl">
              From idea to publish in one platform
            </h1>

            <p className="mx-auto mb-12 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
              {
                "The complete social media management platform. Create content, schedule posts, and analyze performance - all from one powerful dashboard."
              }
            </p>

            <NewsletterForm />

            {/* Features Grid */}
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              <Card className="border-border/50 bg-card/30 p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{"Content Creation"}</h3>
                  <p className="text-muted-foreground text-sm">
                    {
                      "AI-powered content generation and design tools to create engaging posts in minutes."
                    }
                  </p>
                </div>
              </Card>

              <Card className="border-border/50 bg-card/30 p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{"Smart Scheduling"}</h3>
                  <p className="text-muted-foreground text-sm">
                    {
                      "Schedule across all platforms with optimal timing recommendations for maximum reach."
                    }
                  </p>
                </div>
              </Card>

              <Card className="border-border/50 bg-card/30 p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{"Advanced Analytics"}</h3>
                  <p className="text-muted-foreground text-sm">
                    {
                      "Track performance, engagement, and ROI with comprehensive analytics and insights."
                    }
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-border/40 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0">
            <span className="text-muted-foreground text-sm lowercase">
              {"© 2025 framebase26. All rights reserved."}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
