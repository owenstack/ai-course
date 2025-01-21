"use client";

import { cn } from "@/lib/utils";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import {
	ChevronsUp,
	Home,
	Layers,
	LogOut,
	type LucideIcon,
	Menu as MenuIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "../logo";
import { Button, buttonVariants } from "../ui/button";
import { Progress } from "../ui/progress";

interface Menu {
	icon: LucideIcon;
	title: string;
	url: string;
}

export function Sidebar({ children }: { children: React.ReactNode }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const menuLink: Menu[] = [
		{ icon: Home, title: "Home", url: "/dashboard" },
		{ icon: Layers, title: "Explore", url: "/dashboard/explore" },
		{ icon: ChevronsUp, title: "Upgrade", url: "/dashboard/upgrade" },
	];

	return (
		<>
			<header className="fixed top-0 right-0 left-0 md:left-64 z-50 flex h-16 items-center justify-between border-b bg-background px-6">
				<Button
					variant={"outline"}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className="md:hidden"
				>
					<MenuIcon className="h-6 w-6" />
				</Button>
				<Logo className="truncate" />
				<UserButton />
			</header>
			<aside
				className={cn(
					"fixed left-0 top-0 h-screen w-64 flex-col justify-between border-r bg-background p-6 transition-transform md:flex",
					isSidebarOpen
						? "flex translate-x-0"
						: "-translate-x-full md:translate-x-0",
				)}
			>
				<div className="flex flex-col items-center gap-4">
					<Logo />
					<hr className="w-full" />
					<nav className="flex w-full flex-col gap-2">
						{menuLink.map(({ icon: Icon, title, url }) => (
							<Link
								key={title}
								className={cn(
									buttonVariants({ variant: "ghost" }),
									"w-full justify-start gap-2",
								)}
								href={url}
								onClick={() => setIsSidebarOpen(false)}
							>
								<Icon className="h-4 w-4" /> {title}
							</Link>
						))}
						<div
							className={cn(
								buttonVariants({ variant: "ghost" }),
								"justify-start gap-2",
							)}
						>
							<LogOut className="h-4 w-4" />
							<SignOutButton />
						</div>
					</nav>
				</div>
				<div className="flex flex-col items-center gap-4">
					<Progress value={25} max={100} className="w-full" />
					<p className="text-sm text-muted-foreground">5 out of 5 courses</p>
					<p className="text-center text-sm">
						Upgrade your plan for unlimited course generation
					</p>
				</div>
			</aside>
			<main className="mt-16 p-6 md:ml-64">{children}</main>
		</>
	);
}
