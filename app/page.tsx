export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mt-10">
        <h1 className="text-4xl font-bold">
          Less Talk. More Build.
        </h1>

        <p className="mt-4 text-gray-500 max-w-xl">
          PraxCore is where ideas turn into real, working products — built with a focus on execution, not theory.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/mvp-lab"
            className="px-4 py-2 border border-gray-800 rounded hover:bg-gray-900 transition"
          >
            Explore MVP Lab
          </a>

          <a
            href="https://stackforge.streamlit.app"
            target="_blank"
            className="px-4 py-2 border border-gray-800 rounded hover:bg-gray-900 transition"
          >
            Try StackForge
          </a>
        </div>
      </section>

      {/* MVP Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">MVP Lab</h2>
        <p className="text-gray-500 mt-2">
          A collection of real products built and shipped under PraxCore.
        </p>

        <div className="mt-8 border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition">
          <h3 className="font-medium text-lg">StackForge</h3>

          <p className="text-gray-500 mt-2">
            Personalized tech stack recommendations for developers.
          </p>

          <div className="mt-3 flex items-center gap-4">
            <span className="text-green-500 text-sm">Live</span>

            <a
              href="https://stackforge.streamlit.app"
              target="_blank"
              className="text-sm underline hover:text-white"
            >
              Open →
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <p className="text-gray-500 mt-2">
          Tools and technologies I use to build and ship products.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Python",
            "MongoDB / Supabase",
            "Vercel",
          ].map((tech, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded p-3 text-center hover:bg-gray-900 transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}