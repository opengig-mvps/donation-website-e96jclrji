'use client' ;
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, Heart, DollarSign } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-sky-200">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-sky-300">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-sky-900">
                    Make a Difference Today
                  </h1>
                  <p className="max-w-[600px] text-sky-800 md:text-xl">
                    Your contributions can bring hope and change to those in need. Join us in making the world a better place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    Donate Now
                  </Button>
                  <Button className="h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    Learn More
                  </Button>
                </div>
              </div>
              <img
                src="https://placehold.co/600x400.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-sky-700">Why Donate With Us?</h2>
                <p className="max-w-[900px] text-sky-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We ensure that every penny you donate reaches those in need. Transparency and trust are at the heart of what we do.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Heart className="h-12 w-12 text-red-600" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold text-sky-800">Impactful Giving</h3>
                  <p className="text-sky-700">
                    Your donations create tangible impacts on lives.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <DollarSign className="h-12 w-12 text-green-600" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold text-sky-800">Secure Transactions</h3>
                  <p className="text-sky-700">Your contributions are safe with our top-notch security.</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Check className="h-12 w-12 text-success-600" />
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold text-sky-800">Verified Trust</h3>
                  <p className="text-sky-700">
                    We are trusted by thousands for our commitment to transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-sky-700">What Our Donors Say</h2>
                <p className="max-w-[900px] text-sky-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from those who have joined us in this journey of hope and change.
                </p>
              </div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card className="flex flex-col items-start space-y-4 p-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none text-sky-800">John Doe</p>
                      <p className="text-xs text-sky-700">Philanthropist</p>
                    </div>
                  </div>
                  <p className="text-sky-700">
                    "Donating through this platform has been a transformative experience, bringing joy and hope to many."
                  </p>
                </Card>
                <Card className="flex flex-col items-start space-y-4 p-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none text-sky-800">Sarah Miller</p>
                      <p className="text-xs text-sky-700">Entrepreneur</p>
                    </div>
                  </div>
                  <p className="text-sky-700">
                    "The platform is intuitive, and the impact reports are a great way to see where my donation goes."
                  </p>
                </Card>
                <Card className="flex flex-col items-start space-y-4 p-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://placehold.co/100x100.png" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none text-sky-800">Michael Johnson</p>
                      <p className="text-xs text-sky-700">Teacher</p>
                    </div>
                  </div>
                  <p className="text-sky-700">
                    "It's heartwarming to know that my donations are making a real difference in people's lives."
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-sky-700">Get Involved</h2>
                <p className="max-w-[900px] text-sky-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the first step towards changing lives. Join us in our mission to create a world full of hope and opportunities.
                </p>
              </div>
              <Button className="h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Start Donating
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-sky-200 p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-sky-800">
          <div className="grid gap-1">
            <h3 className="font-semibold">About Us</h3>
            <a href="#" className="hover:underline">Our Story</a>
            <a href="#" className="hover:underline">Mission</a>
            <a href="#" className="hover:underline">Impact</a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Get Involved</h3>
            <a href="#" className="hover:underline">Volunteer</a>
            <a href="#" className="hover:underline">Corporate Sponsorship</a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">FAQs</a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <a href="#" className="hover:underline">Support</a>
            <a href="#" className="hover:underline">Feedback</a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;