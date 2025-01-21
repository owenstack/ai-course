"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { GridPattern } from "../ui/grid-pattern";

export function SplashMain() {
	return (
		<>
			<section className="relative flex items-center justify-center w-full overflow-hidden bg-background p-20">
				<div className="flex flex-col items-center gap-4 z-10">
					<div
						className={cn(
							buttonVariants({ variant: "outline" }),
							"rounded-full px-2 py-1",
						)}
					>
						<p>Owen's Membership - Join Now</p>
						<Link
							href={"/dashboard"}
							className={cn(
								buttonVariants({ variant: "ghost", size: "icon" }),
								"ml-2 rounded-full",
							)}
						>
							<ChevronRight />
						</Link>
					</div>
					<p className="whitespace-pre-wrap text-center text-5xl font-semibold tracking-tighter">
						AI Course <span className="text-primary">Generator</span>
					</p>
					<p>
						Revolutionize your course creation with our AI-powered app,
						delivering engaging and high quality courses in minutes.
					</p>
					<Link
						href={"/dashboard"}
						className={cn(buttonVariants({ size: "lg" }))}
					>
						<span>Get started</span>
						<ChevronRight />
					</Link>
				</div>
				<GridPattern
					width={20}
					height={20}
					x={-1}
					y={-1}
					className={cn(
						"[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
					)}
				/>
			</section>
		</>
	);
}
