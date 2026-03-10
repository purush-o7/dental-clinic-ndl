import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ToothIcon, ToothImplantIcon, ToothSparkleIcon, BracesIcon, SmileTeethIcon, DentalMirrorIcon } from "@/components/common/dental-icons";
import type { Feature } from "@/lib/types";

const featureIcons: Record<string, React.ReactNode> = {
  award: <ToothSparkleIcon size={28} />,
  cpu: <ToothImplantIcon size={28} />,
  heart: <ToothIcon size={28} />,
  wallet: <SmileTeethIcon size={28} />,
  layers: <BracesIcon size={28} />,
  users: <DentalMirrorIcon size={28} />,
};

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="group border-border/50 bg-background/80 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
      <CardHeader>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
          {featureIcons[feature.iconName] ?? <ToothIcon size={28} />}
        </div>
        <CardTitle className="text-lg">{feature.title}</CardTitle>
        <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
