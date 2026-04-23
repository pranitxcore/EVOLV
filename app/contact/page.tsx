export default function Contact() {
  return (
    <div className="max-w-2xl px-2 sm:px-0">
      
      {/* Header */}
      <h1 className="text-4xl font-bold">Let’s Connect</h1>

      <p className="mt-4 text-gray-500">
        PraxCore is built in public. If you have feedback, ideas, or want to collaborate —
        feel free to reach out.
      </p>

      {/* Contact Cards */}
      <div className="mt-10 space-y-6">
        
        {/* Email */}
        <div className="border border-gray-800 rounded-xl p-5 hover:border-gray-600 hover:bg-gray-900 transition">
          <p className="text-sm text-gray-400">📧 Email</p>
          <p className="mt-2 text-lg font-medium break-all">
            pranitchauhan782@gmail.com
          </p>
        </div>

        {/* Instagram */}
        <div className="border border-gray-800 rounded-xl p-5 hover:border-gray-600 hover:bg-gray-900 transition">
          <p className="text-sm text-gray-400">📱 Instagram</p>
          <p className="mt-2 text-lg font-medium">
            @praxcore.next
          </p>
        </div>

        {/* Open To */}
        <div className="border border-gray-800 rounded-xl p-5 hover:border-gray-600 hover:bg-gray-900 transition">
          <p className="text-sm text-gray-400">🤝 Open to</p>
          <p className="mt-2 text-gray-500">
            Feedback · Collaborations · MVP Ideas
          </p>
        </div>

      </div>

      {/* Footer Line */}
      <p className="mt-16 text-gray-600 text-sm">
        Less Talk. More Build.
      </p>
    </div>
  );
}