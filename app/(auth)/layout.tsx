import "@/styles/globals.css";
import { ConvexClientProvider } from "../convex-client-provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ConvexClientProvider>{children}</ConvexClientProvider>;
}
