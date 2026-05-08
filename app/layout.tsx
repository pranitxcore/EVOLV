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
      <body className="bg-black text-white antialiased">

        <div className="min-h-screen">

          {/* 🚀 Floating Navbar */}
          <header className="sticky top-0 z-50 px-4 sm:px-6 pt-4">

            <div
              className="
                max-w-6xl mx-auto
                backdrop-blur-xl
                bg-white/[0.03]
                border border-white/10
                rounded-2xl
                px-5 sm:px-6
                py-4
                shadow-[0_0_40px_rgba(0,0,0,0.35)]
              "
            >

              <div
                className="
                  flex flex-col sm:flex-row
                  items-center
                  justify-between
                  gap-5
                "
              >

                {/* 🟢 Brand */}
                <Link
                  href="/"
                  className="
                    flex items-center gap-3
                    group
                  "
                >

                  {/* Logo */}
                  <div className="relative">

                    {/* Glow */}
                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

                    <div
                      className="
                        relative
                        border border-white/10
                        rounded-full
                        p-[2px]
                        overflow-hidden
                      "
                    >

                      <Image
                        src="/PraxCore.png"
                        alt="PraxCore Logo"
                        width={44}
                        height={44}
                        className="rounded-full"
                        priority
                      />

                    </div>

                  </div>

                  {/* Text */}
                  <div>

                    <h1
                      className="
                        text-lg font-bold
                        tracking-[0.28em]
                        text-white
                        group-hover:text-green-400
                        transition
                      "
                    >
                      PRAXCORE
                    </h1>

                    <p className="text-[10px] tracking-[0.25em] text-gray-500 uppercase">
                      Build • Ship • Iterate
                    </p>

                  </div>

                </Link>

                {/* 🔗 Nav Links */}
                <nav
                  className="
                    flex flex-wrap
                    items-center
                    justify-center
                    gap-2
                  "
                >

                  {[
                    { name: "Home", href: "/" },
                    { name: "Build Log", href: "/build-log" },
                    { name: "MVP Lab", href: "/mvp-lab" },
                    { name: "About", href: "/about" },
                    { name: "Contact", href: "/contact" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="
                        px-4 py-2
                        rounded-xl
                        text-sm
                        text-gray-400
                        border border-transparent
                        hover:border-green-500/20
                        hover:bg-green-500/10
                        hover:text-green-400
                        transition-all duration-300
                      "
                    >
                      {item.name}
                    </Link>
                  ))}

                </nav>

              </div>

            </div>

          </header>

          {/* 📦 Main Content */}
          <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
            {children}

            {/* 🔻 Footer */}
            <footer
              className="
                mt-24
                border-t border-gray-900
                pt-6
                text-center
              "
            >

              <p className="text-sm text-gray-500">
                Built and shipped under{" "}
                <span className="text-green-400">
                  PraxCore
                </span>
              </p>

            </footer>

          </main>

        </div>

      </body>
    </html>
  );
}