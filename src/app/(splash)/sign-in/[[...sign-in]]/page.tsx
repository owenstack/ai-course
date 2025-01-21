import Background from "@/assets/background-image-1.webp";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="relative hidden bg-muted lg:block">
				<img
					src={Background.src}
					alt="Image"
					className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex flex-1 items-center justify-center">
					<SignIn />
				</div>
			</div>
		</div>
	);
}
