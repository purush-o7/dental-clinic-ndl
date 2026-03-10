import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
  size?: number;
}

export function ToothIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 2C4.5 2 2 4 2 7c0 2 .5 3.5 1.5 5.5C4.5 14.5 5 16 5.5 18c.4 1.5.8 4 1.5 4s1.2-1.5 2-3.5c.5-1.2 1-2 3-2s2.5.8 3 2c.8 2 1.3 3.5 2 3.5s1.1-2.5 1.5-4c.5-2 1-3.5 2-5.5C21.5 10.5 22 9 22 7c0-3-2.5-5-5-5-1.5 0-2.5.5-3.5 1.5L12 5l-1.5-1.5C9.5 2.5 8.5 2 7 2z" />
    </svg>
  );
}

export function ToothImplantIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 2C5 2 3 3.5 3 6c0 1.5.5 3 1.5 4.5S6 13 6 14" />
      <path d="M17 2c2 0 4 1.5 4 4 0 1.5-.5 3-1.5 4.5S18 13 18 14" />
      <path d="M12 2c-1 0-2 .5-3 1.5L12 6l3-2.5C14 2.5 13 2 12 2z" />
      <rect x="9" y="14" width="6" height="2" rx="0.5" />
      <rect x="9.5" y="17" width="5" height="1.5" rx="0.5" />
      <rect x="10" y="19.5" width="4" height="1.5" rx="0.5" />
      <rect x="10.5" y="22" width="3" height="1" rx="0.5" />
    </svg>
  );
}

export function DentalMirrorIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="7" r="5" />
      <path d="M13 11l8 8" />
      <circle cx="9" cy="7" r="2.5" strokeDasharray="2 2" />
    </svg>
  );
}

export function BracesIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="8" width="4" height="5" rx="1" />
      <rect x="10" y="8" width="4" height="5" rx="1" />
      <rect x="17" y="8" width="4" height="5" rx="1" />
      <line x1="7" y1="10.5" x2="10" y2="10.5" />
      <line x1="14" y1="10.5" x2="17" y2="10.5" />
      <line x1="2" y1="10.5" x2="3" y2="10.5" />
      <line x1="21" y1="10.5" x2="22" y2="10.5" />
    </svg>
  );
}

export function SmileTeethIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 13a10 10 0 0 0 20 0" />
      <path d="M5 13v-1.5C5 10.5 5.5 10 6.5 10h1C8.5 10 9 10.5 9 11.5V13" />
      <path d="M9 13v-1.5c0-1 .5-1.5 1.5-1.5h1c1 0 1.5.5 1.5 1.5V13" />
      <path d="M15 13v-1.5c0-1 .5-1.5 1.5-1.5h1c1 0 1.5.5 1.5 1.5V13" />
    </svg>
  );
}

export function ToothSparkleIcon({ className, size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 4C5 4 3 5.5 3 8c0 1.5.5 3 1.5 4.5S6 15 6 16c.3 1 .7 3 1.2 3s.8-1.2 1.5-2.5C9.2 15.2 9.8 14.5 11 14.5s1.8.7 2.3 2c.7 1.3 1 2.5 1.5 2.5s.9-2 1.2-3c0-1 .5-2.5 1.5-4.5S19 9.5 19 8c0-2.5-2-4-4-4-1 0-1.8.4-2.5 1L11 6.5 9.5 5C8.8 4.4 8 4 7 4z" />
      <path d="M18 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" stroke="none" />
      <path d="M21 8l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FloatingTooth({
  className,
  size = 32,
}: IconProps) {
  return (
    <div className={cn("animate-tooth-bounce text-primary/15", className)}>
      <ToothIcon size={size} />
    </div>
  );
}

export function ToothDecoration({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute", className)}>
      <ToothIcon size={48} className="text-primary/[0.07]" />
    </div>
  );
}
