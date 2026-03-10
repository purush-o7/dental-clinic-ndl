import { ToothIcon } from "@/components/common/dental-icons";
import type { FamilyCardBenefit } from "@/lib/types";

export function BenefitItem({ benefit }: { benefit: FamilyCardBenefit }) {
  return (
    <div className="group flex gap-3 rounded-xl border border-border/50 bg-background/80 p-4 transition-all duration-300 hover:shadow-md hover:border-primary/20">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <ToothIcon size={16} />
      </div>
      <div>
        <p className="font-medium">{benefit.title}</p>
        <p className="text-sm text-muted-foreground">{benefit.description}</p>
      </div>
    </div>
  );
}
