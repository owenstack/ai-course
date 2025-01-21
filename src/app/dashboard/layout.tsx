import { Sidebar } from "@/components/dashboard/side-bar";

export default function DashboardLayout({
	children,
}: { children: React.ReactNode }) {
	return <Sidebar>{children}</Sidebar>;
}
