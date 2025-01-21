import { Header } from "@/components/splash/header";

export default function SplashLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
