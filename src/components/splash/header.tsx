import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "../logo";
import { Button, buttonVariants } from "../ui/button";

export function Header() {
	return (
		<header className="sticky top-0 z-20 border-b flex items-center gap-4 justify-between px-4 py-2 bg-background">
			<Logo />
			<Link href="/dashboard" className={cn(buttonVariants())}>
				Get started
			</Link>
		</header>
	);
}
