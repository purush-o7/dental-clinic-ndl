import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { DOCTOR } from "@/lib/data";

export function DoctorProfile() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl">
        <Image
          src="/dr-km-reddy.webp"
          alt={DOCTOR.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 448px"
          priority
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {DOCTOR.name}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{DOCTOR.title}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {DOCTOR.qualifications.map((q) => (
            <Badge key={q} variant="secondary">
              {q}
            </Badge>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          {DOCTOR.bio}
        </p>
      </div>
    </div>
  );
}
