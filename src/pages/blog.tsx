const posts = [
  {
    title: "Designing with texture and shadow",
    summary:
      "How subtle materials and contrast create atmosphere in every room.",
  },
  {
    title: "Modern patios for year-round living",
    summary:
      "Planning outdoor spaces that feel integrated, private, and elegant.",
  },
  {
    title: "Lighting layered interiors for calm",
    summary:
      "The role of indirect light, warm surfaces, and sculptural fixtures.",
  },
];

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-black sm:px-10 lg:px-16">
      {/* ARCHITECTURAL BACKGROUND */}
      <img
        src="/building.avif"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[70] grayscale"
      />

      {/* <img
        src="/building.avif"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[80]"
      /> */}

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Journal
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Stories from architecture, interiors, and thoughtful living.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Perspectives from AIKA Studio on modern living, spatial design,
            materials, and architectural atmosphere.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="mx-auto mt-16 h-px max-w-4xl bg-black/10" />

        {/* POSTS */}
        <div className="mt-20 divide-y divide-black/10 border-y border-black/10 backdrop-blur-[1px]">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group cursor-pointer py-10 transition duration-500 hover:bg-black/[0.02]"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-xl font-medium tracking-tight transition duration-300 group-hover:translate-x-1">
                    {post.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {post.summary}
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400 transition duration-300 group-hover:text-black">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* QUOTE */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <p className="text-2xl font-light italic leading-relaxed text-slate-700">
            "Architecture should quietly enrich everyday life through light,
            proportion, and thoughtful detail."
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">
            AIKA Studio
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://wa.me/917012890599?text=Hello%20AIKA%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20your%20architecture%20and%20interior%20design%20services.%20Please%20let%20me%20know%20how%20I%20can%20get%20in%20touch%20with%20you.%20Thank%20you."
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-black/10 px-8 text-sm font-medium transition duration-300 hover:bg-black hover:text-white"
          >
            Contact AIKA
          </a>
        </div>
      </div>
    </section>
  );
}
