"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Topics() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Systemdesign</CardTitle>
          <CardDescription>
            Streamline your system design process with our cutting-edge tools
            and expert guidance.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-muted-foreground">
            Unlock your full potential with our comprehensive system design
            solutions.
          </p>
          <Button>Learn More</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>JuniorSheet</CardTitle>
          <CardDescription>
            Elevate your coding skills with our interactive programming
            challenges and resources.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-muted-foreground">
            Conquer coding challenges and master the art of problem-solving with
            JuniorSheet.
          </p>
          <Button onClick={() => router.push("/junior-sheet")}>
            Explore Now
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Leetfront</CardTitle>
          <CardDescription>
            Become a frontend development pro with our curated collection of
            tutorials and projects.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-muted-foreground">
            Elevate your frontend skills and build stunning web applications
            with Leetfront.
          </p>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}
