import React from "react";

type Props = {
  data?: any;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function TimberContactPage({ data, theme }: Props) {
  return (
    <div
      className="min-h-screen py-16 px-6 sm:px-12 transition-colors duration-300"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {data?.title || "Start Your Timber Project"}
          </h1>
          <p className="text-lg opacity-80">
            {data?.subtitle || "Have a vision for custom wood architecture? Reach out to our engineering and design team."}
          </p>
        </div>

        {/* Contact Form Container */}
        <div
          className="p-8 sm:p-10 rounded-2xl border shadow-sm"
          style={{
            backgroundColor: `${theme.text}05`,
            borderColor: `${theme.text}15`,
          }}
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 opacity-80">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
                  style={{
                    backgroundColor: `${theme.text}08`,
                    borderColor: `${theme.text}20`,
                    color: theme.text,
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 opacity-80">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
                  style={{
                    backgroundColor: `${theme.text}08`,
                    borderColor: `${theme.text}20`,
                    color: theme.text,
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 opacity-80">
                Project Details
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your architectural, structural, or woodworking requirements..."
                className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
                style={{
                  backgroundColor: `${theme.text}08`,
                  borderColor: `${theme.text}20`,
                  color: theme.text,
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg font-bold transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
              style={{
                backgroundColor: theme.button || theme.primary,
                color: theme.background,
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}