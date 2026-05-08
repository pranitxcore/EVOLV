export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-10">

      {/* 🔰 Hero Section */}
      <section className="mt-10 max-w-5xl">

        <p className="text-green-400 text-sm tracking-[0.3em] uppercase">
          PraxCore
        </p>

        <h1 className="mt-4 text-4xl sm:text-6xl font-bold leading-tight">
          Less Talk. <br />
          More Build.
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed">
          PraxCore is a build-first space focused on turning
          execution into real products — practical systems
          designed through experimentation, iteration, and
          real-world feedback.
        </p>

        {/* 🚀 CTA */}
        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href="/mvp-lab"
            className="
              px-5 py-3
              bg-green-500
              text-black
              rounded-xl
              font-medium
              hover:bg-green-400
              transition
            "
          >
            Explore MVP Lab
          </a>

        </div>

      </section>

      {/* ⚡ Featured Launch */}
      <section className="mt-24">

        <div
          className="
            relative
            overflow-hidden
            bg-gradient-to-br
            from-[#111]
            to-[#0b0b0b]
            border border-gray-800
            rounded-3xl
            p-8 sm:p-10
          "
        >

          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 blur-3xl rounded-full" />

          {/* Launch Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs tracking-wide uppercase">
            ● New Launch
          </div>

          {/* Main Content */}
          <div className="relative z-10 mt-6 max-w-3xl">

            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              PROVAULT v0 <br />
              officially shipped.
            </h2>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              A freelance project and payment management
              system built to simplify workflow tracking,
              invoices, dues, and payment visibility —
              all in one structured vault.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://provault1.vercel.app/"
                target="_blank"
                className="
                  px-5 py-3
                  bg-green-500
                  text-black
                  rounded-xl
                  font-medium
                  hover:bg-green-400
                  transition
                "
              >
                Launch PROVAULT
              </a>

              <a
                href="/mvp-lab"
                className="
                  px-5 py-3
                  border border-gray-800
                  rounded-xl
                  hover:border-green-500
                  hover:text-green-400
                  transition
                "
              >
                View MVP Lab
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* 🛠️ Tech Stack */}
      <section className="mt-24">

        <h2 className="text-3xl font-semibold">
          Tech Stack
        </h2>

        <p className="text-gray-400 mt-2 max-w-xl">
          Tools and technologies used to build, test,
          and ship products quickly.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">

          {[
            "Next.js",
            "React",
            "Tailwind CSS",
            "Supabase",
            "Node.js",
            "Python",
            "Vercel",
            "JavaScript",
          ].map((tech, index) => (
            <div
              key={index}
              className="
                bg-[#111]
                border border-gray-800
                rounded-xl
                p-4
                text-center
                text-sm
                hover:border-green-500
                hover:text-green-400
                transition
              "
            >
              {tech}
            </div>
          ))}

        </div>

      </section>

      {/* 🔻 Footer */}
      <footer className="mt-24 border-t border-gray-900 pt-6">

        <p className="text-sm text-gray-500">
          Built and shipped under{" "}
          <span className="text-green-400">
            PraxCore
          </span>
        </p>

      </footer>

    </div>
  );
}