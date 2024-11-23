import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const mainFont = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pete Pongpeauk",
	description: "Pete Pongpeauk",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body style={{ fontFamily: mainFont.style.fontFamily }}>
				{children}
			</body>
		</html>
	);
}
