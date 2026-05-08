import Link from "next/link";

const mvps = [
  {
    title: "StackForge",
    description:
      "Personalized tech stack recommendations for developers.",
    status: "Live",
    link: "https://stackforge.streamlit.app/",
  },

  {
    title: "PROVAULT",
    description:
      "Freelance project and payment management system.",
    status: "Live",
    link: "https://provault1.vercel.app/",
  },
];

export default function MVPLab() {
  return (
    <div className="px-4 sm:px-6 py-10 min-h-screen bg-black text-white">

      {/* 🔰 Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold">
          MVP Lab
        </h1>

        <p className="mt-3 text-gray-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          A growing collection of real products built, tested,
          and shipped under PraxCore.
        </p>
      </div>

      {/* 🚀 MVP Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

        {mvps.map((mvp, index) => (
          <Link
            key={index}
            href={mvp.link}
            target="_blank"
          >
            <div
              className="
                group
                bg-[#111]
                border border-gray-800
                rounded-2xl
                p-6
                transition-all duration-300
                hover:border-green-500
                hover:-translate-y-1
                hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
              "
            >

              {/* 📦 Top Section */}
              <div className="flex items-start justify-between">

                <div>
                  <h3 className="text-xl font-semibold tracking-wide">
                    {mvp.title}
                  </h3>

                  <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                    {mvp.description}
                  </p>
                </div>

                <span
                  className="
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-green-500/10
                    text-green-400
                    border border-green-500/20
                  "
                >
                  {mvp.status}
                </span>

              </div>

              {/* 🔻 Bottom */}
              <div className="mt-6 flex items-center justify-between">

                <span className="text-sm text-gray-500">
                  Built under PraxCore
                </span>

                <span
                  className="
                    text-sm
                    text-gray-400
                    group-hover:text-green-400
                    transition
                  "
                >
                  Open →
                </span>

              </div>

            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}