import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              href="/junior-sheet"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Junior Sheet
            </Link>
            <Link
              href=""
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Leetfront
            </Link>
            <Link
              href=""
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              System Design
            </Link>
            <Link
              href=""
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Blogs
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Get started
            </Button>
            {/* <Button size="sm">Sign up</Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function RightArrowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
