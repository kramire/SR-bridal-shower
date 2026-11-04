import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Save the Date - Sarah's Bridal Shower`,
  description: `Let's celebrate the bride-to-be!`,
  metadataBase: new URL('https://sarah-bridal-shower-2027.netlify.app/save-the-date'),
  robots: {
    index: false,
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}