import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/common/container";
import { ToothIcon, FloatingTooth } from "@/components/common/dental-icons";
import { CLINIC } from "@/lib/data";
import { HeroActions } from "./hero-actions";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden lg:min-h-[80vh]">
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
        <div className="absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl animate-pulse-soft [animation-delay:1.5s]" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-secondary blur-3xl animate-pulse-soft [animation-delay:3s]" />
      </div>

      {/* Floating tooth decorations */}
      <div className="pointer-events-none absolute inset-0 -z-5 overflow-hidden">
        <FloatingTooth className="absolute top-20 left-[10%] [animation-delay:0s]" size={28} />
        <FloatingTooth className="absolute top-40 right-[15%] [animation-delay:1s]" size={20} />
        <FloatingTooth className="absolute bottom-32 left-[20%] [animation-delay:2s]" size={24} />
        <FloatingTooth className="absolute top-60 left-[50%] [animation-delay:0.5s]" size={16} />
        <FloatingTooth className="absolute bottom-48 right-[25%] [animation-delay:1.5s]" size={22} />
      </div>

      <Container className="flex min-h-screen items-center py-20 lg:min-h-[80vh] lg:py-0">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content - entrance animations via CSS */}
          <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left animate-fade-up">
            <Badge variant="secondary" className="mb-6 w-fit mx-auto lg:mx-0 animate-fade-down [animation-delay:200ms]">
              <ToothIcon size={14} className="mr-1.5" />
              Trusted by 5000+ Patients
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-fade-up [animation-delay:100ms]">
              Your Smile,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Our Passion
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground mx-auto lg:mx-0 animate-fade-up [animation-delay:200ms]">
              Welcome to {CLINIC.name} — Nandyal&apos;s trusted destination
              for advanced dental care. From implants to cosmetic dentistry,
              we deliver beautiful, healthy smiles with compassion and
              expertise.
            </p>
            <div className="animate-fade-up [animation-delay:400ms]">
              <HeroActions />
            </div>
          </div>

          {/* Doctor photo with floating elements */}
          <div className="order-1 lg:order-2 flex items-center justify-center animate-blur-in [animation-delay:300ms]">
            <div className="relative">
              {/* Tooth outline background decoration — desktop only */}
              <Image
                src="/tooth-outline-teal.png"
                alt=""
                width={740}
                height={740}
                aria-hidden="true"
                className="pointer-events-none absolute -z-10 hidden lg:block w-[56rem] max-w-none animate-pulse-soft left-[68%] -translate-x-1/2 bottom-0 translate-y-[30%]"
              />

              {/* Spinning subtle ring */}
              <div className="absolute inset-0 -m-3 rounded-full border-2 border-dashed border-primary/10 animate-spin-slow sm:-m-4" />

              <div className="h-52 w-52 sm:h-64 sm:w-64 lg:h-96 lg:w-96 overflow-hidden rounded-full bg-primary/80 ring-4 ring-primary/60 ring-offset-2 ring-offset-background sm:ring-offset-4 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/dr-km-reddy.webp"
                  alt="Dr. K.M. Reddy"
                  width={384}
                  height={384}
                  className="h-full w-full object-cover object-[center_15%]"
                  priority
                />
              </div>

              {/* Floating stat cards — hidden on small mobile, shown from sm up */}
              <div className="absolute -right-4 top-2 hidden sm:block rounded-xl bg-background/90 p-2 sm:p-3 shadow-xl backdrop-blur-sm animate-float sm:-right-6 sm:top-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <ToothIcon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">11+</p>
                    <p className="text-[10px] text-muted-foreground">Years Exp.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 bottom-2 hidden sm:block rounded-xl bg-background/90 p-2 sm:p-3 shadow-xl backdrop-blur-sm animate-float-delayed sm:-left-6 sm:bottom-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">98%</p>
                    <p className="text-[10px] text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-2 bottom-16 hidden lg:block rounded-xl bg-background/90 p-3 shadow-xl backdrop-blur-sm animate-float [animation-delay:1s]">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">5K+</p>
                    <p className="text-[10px] text-muted-foreground">Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
