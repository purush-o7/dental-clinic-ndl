import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DOCTOR } from "@/lib/data";

export function DoctorCredentials() {
  return (
    <Tabs defaultValue="education" className="mt-12">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="awards">Awards</TabsTrigger>
        <TabsTrigger value="publications">Publications</TabsTrigger>
      </TabsList>

      <TabsContent value="education" className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTOR.education.map((edu) => (
            <Card key={edu.degree}>
              <CardHeader>
                <CardTitle className="text-base">{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="awards" className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTOR.awards.map((award) => (
            <Card key={award.title}>
              <CardHeader>
                <CardTitle className="text-base">{award.title}</CardTitle>
                <CardDescription>{award.organization}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{award.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="publications" className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTOR.publications.map((pub) => (
            <Card key={pub.title}>
              <CardHeader>
                <CardTitle className="text-base">{pub.title}</CardTitle>
                <CardDescription>{pub.journal}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{pub.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
