import Image from "next/image";

const evolvLogs = [
  {
    week: "Week 1",
    points: [
      "Deployed EVOLV v1",
      "Learned Next.js routing",
      "Understood layout and children",
      "Fixed npm + Windows issues",
      "Started EVOLV v2 planning",
    ],
  },
  {
    week: "Week 2",
    points: [
      "Built reusable MVP Card component",
      "Added dynamic MVP Lab",
      "Created Contact Page",
      "Practiced advanced debugging",
      "Shipped EVOLV v2",
      "Fixed Vercel deployment mismatch (GitHub repo issue)",
      "StackRoute Mini v0 shipped",
    ],
  },
  {
    week: "Week 3",
    points: [
      "Refactored navigation to category-based",
      "Integrated StackRoute into MVP Lab",
      "Implemented card-based routing",
      "Deployed updated platform structure",
      "StackRoute Mini v1 shipped",
    ],
  },
  {
    week: "Week 4",
    points: [
      "Added keyword-based recommendation engine",
      "Improved UI with responsive tech cards",
      "Added loading + validation UX",
      "Refined homepage structure",
    ],
  },
];

const praxcoreLogs = [
  {
    week: "Phase 1",
    points: [
      "Rebranded EVOLV → PraxCore",
      "Defined product-first direction",
      "Built StackForge (core logic + dataset)",
      "Implemented input normalization system",
      "Created Streamlit UI",
      "Deployed StackForge live",
    ],
  },
  {
    week: "Phase 2",
    points: [
      "Improved UI (grid + copy feature)",
      "Integrated StackForge into PraxCore",
      "Refined homepage + MVP Lab",
      "Aligned brand, product, and content",
    ],
  },
];

export default function BuildLog() {
  return (
    <div className="px-2 sm:px-0">
      <h1 className="text-3xl font-bold">Build Log</h1>

      {/* EVOLV SECTION */}
      <div className="mt-12">
        <div className="flex items-center gap-3">
          <Image src="/evolv_logo.png" alt="EVOLV" width={32} height={32} />
          <h2 className="text-2xl font-semibold">EVOLV (Foundation Phase)</h2>
        </div>

        <p className="text-gray-500 mt-2 max-w-xl">
          The initial phase focused on learning, experimentation, and building core development skills.
        </p>

        <div className="mt-6 grid gap-6">
          {evolvLogs.map((log, index) => (
            <div
              key={index}
              className="border border-gray-800 p-4 rounded-xl hover:border-gray-600 transition"
            >
              <p className="text-sm text-gray-500">{log.week}</p>

              <ul className="mt-2 text-gray-400 list-disc ml-6 space-y-1">
                {log.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* PRAXCORE SECTION */}
      <div className="mt-16">
        <div className="flex items-center gap-3">
          <Image src="/PraxCore.png" alt="PraxCore" width={32} height={32} />
          <h2 className="text-2xl font-semibold">PraxCore (Execution Phase)</h2>
        </div>

        <p className="text-gray-500 mt-2 max-w-xl">
          Transition to product-focused execution — building and shipping real MVPs.
        </p>

        <div className="mt-6 grid gap-6">
          {praxcoreLogs.map((log, index) => (
            <div
              key={index}
              className="border border-gray-800 p-4 rounded-xl hover:border-green-500/40 transition"
            >
              <p className="text-sm text-gray-500">{log.week}</p>

              <ul className="mt-2 text-gray-400 list-disc ml-6 space-y-1">
                {log.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}