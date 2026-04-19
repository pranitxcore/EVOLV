import MVPCard from "../components/MVPCard";
import Link from "next/link";

const mvps = [
  {
    title: "StackForge",
    description: "Personalized tech stack recommendations for developers.",
    status: "Live",
    link: "https://stackforge.streamlit.app/",
  },
];

export default function MVPLab() {
  return (
    <div className="px-2 sm:px-0">
      
      {/* Header */}
      <div className="mt-10">
        <h1 className="text-3xl font-bold">MVP Lab</h1>
        <p className="mt-2 text-gray-500 max-w-xl">
          A collection of real products built and shipped under PraxCore.
        </p>
      </div>

      {/* MVP Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {mvps.map((mvp, index) => (
          <Link key={index} href={mvp.link} target="_blank">
            <div className="group border border-gray-800 rounded-xl p-5 transition hover:border-gray-600 hover:bg-gray-900">
              
              <h3 className="text-lg font-medium">{mvp.title}</h3>
              
              <p className="text-gray-500 mt-2">
                {mvp.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-green-500 text-sm font-medium">
                  {mvp.status}
                </span>

                <span className="text-sm text-gray-400 group-hover:text-white transition">
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