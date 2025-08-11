import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="mt-24 flex items-center justify-center flex-col gap-8">
      {/* Contact */}
      <div className="max-w-2xl w-full items-center space-y-6 text-center">
        <h1 className="md:text-5xl text-xl font-bold">
          Hey I'm your <span className="text-primary">Personal Planner</span>
        </h1>
        <p className="text-lg">
          Tell me what you want and I'll handle the rest
        </p>
      </div>

      {/* Input */}

      <div className="max-w-2xl w-full flex items-center justify-center border border-input rounded-lg p-4 shadow-md relative">
        <Textarea
          placeholder="Tell Me What You Want"
          className="w-full h-28 bg-transparent border-none focus-visible:ring-0"
        />

        <Button size={"icon"} className="absolute right-4 bottom-4">
          <Send />
        </Button>
      </div>

      {/* Suggestion List */}

      {/* Video Section */}
    </div>
  );
}

export default Hero;
