import "./globals.css";
import Link from "next/link";
import Image from "next/image";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased"><div>
        <nav className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 px-8 py-4 border-b border-gray-800">
  <div className="flex items-center gap-2">
    <Image src="/PraxCore.png" alt="EVOLV Logo" width={100} height={100} className="rounded-full"/>
    <span className="font-bold">PRAXCORE</span>
  </div>

  <div className="flex flex-wrap justify-center gap-6">
    <Link href="/" className="hover:text-gray-400 transition">Home</Link>
    <Link href="/build-log" className="hover:text-gray-400 transition">Build Log</Link>
    <Link href="/mvp-lab" className="hover:text-gray-400 transition">MVP Lab</Link> 
    <Link href="/about" className="hover:text-gray-400 transition">About</Link>
    <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
    {/* <Link href="/algoscale">AlgoScale</Link> */}
    {/* <Link href="/toolkit/execution-engine" className="hover:text-gray-400 transition">Execution Engine</Link> */}
  </div>
</nav>
        <main className="max-w-4xl mx-auto px-6 py-10">
          {children}
          <footer className="mt-20 border-t border-gray-800 pt-6 text-gray-500 text-sm text-center opacity-80">
            PraxCore — less talk, more build.
          </footer>
        </main></div>
      </body>
    </html>
  );
}
