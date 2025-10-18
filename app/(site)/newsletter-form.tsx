"use client";

import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { subscribe } from "./subscribe";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    await subscribe(email);
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="mx-auto mb-16 max-w-md">
      {!isSubmitted ? (
        <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-background/50 text-base"
                required
              />
            </div>
            <Button
              type="submit"
              className="h-12 w-full font-medium text-base"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"></div>
                  <span>{"Joining..."}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>{"Join Waitlist"}</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </div>
              )}
            </Button>
          </form>
          <p className="mt-4 text-muted-foreground text-xs">
            {"No spam. Unsubscribe at any time."}
          </p>
        </Card>
      ) : (
        <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
              <CheckIcon className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-semibold text-lg">{"You're on the list!"}</h3>
            <p className="text-muted-foreground">
              {"We'll notify you when we launch. Thanks for your interest!"}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
