import { useState } from "react";

const faqs = [
  {
    question: "How long does a design project usually take?",
    answer:
      "Most residential design projects range from 8 to 16 weeks, depending on scope and approvals.",
  },
  {
    question: "Do you work on both interiors and outdoor spaces?",
    answer:
      "Yes — we design interiors, patios, terraces, and landscape-adjacent living spaces.",
  },
  {
    question: "Can you collaborate with local contractors?",
    answer:
      "Absolutely. We partner with trusted contractors and consultants to execute each project smoothly.",
  },
  {
    question: "What design style does AIKA focus on?",
    answer:
      "Our work combines modern architecture, minimal interiors, natural materials, and timeless spatial experiences.",
  },
];

export default function FAQPage() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:px-16">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
            FAQ
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Questions about our architectural process.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Learn more about how AIKA approaches architecture,
            interiors, collaboration, and modern living spaces.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="mt-20 grid gap-6">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <div className="flex items-start justify-between gap-6">
                <h2 className="text-xl font-semibold leading-8 text-white transition duration-300 group-hover:text-slate-200">
                  {item.question}
                </h2>

                <div className="mt-1 h-2 w-2 rounded-full bg-white/40 transition duration-300 group-hover:bg-white" />
              </div>

              <p className="mt-5 max-w-3xl leading-8 text-slate-400 transition duration-300 group-hover:text-slate-300">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* SUBSCRIBE SECTION */}
        <div className="mt-28 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
              Stay Connected
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Subscribe for architecture insights and updates.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Receive occasional updates from AIKA Studio about design,
              architecture, interiors, and upcoming projects.
            </p>

            {/* INPUT */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[58px] w-full rounded-full border border-white/10 bg-black/40 px-6 text-white outline-none transition placeholder:text-slate-500 focus:border-white/30"
              />

              <a
                href={`mailto:rahmankv03@gmail.com?subject=AIKA Subscription&body=Subscribe: ${email}`}
                className="inline-flex h-[58px] items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition hover:bg-slate-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}