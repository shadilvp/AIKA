
export default function AboutPage() {
  return (
    <section className="flex min-h-screen w-full items-center bg-black px-6 py-20 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* IMAGE */}
        <div className="relative flex items-center justify-center order-1 lg:order-2">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <img
              src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern architecture by AIKA"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[620px] lg:w-[520px]"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="order-2 space-y-6 text-center lg:order-1 lg:space-y-8 lg:text-left">
          <div className="space-y-4 lg:space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 sm:text-sm">
              About AIKA
            </p>

            <h1 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:mx-0 lg:text-6xl">
              Thoughtful architecture rooted in simplicity and purpose.
            </h1>
          </div>

          <div className="space-y-5">
            <p className="text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              AIKA is an architecture and interior design studio based in
              Valanchery, Malappuram, focused on creating spaces that feel
              timeless, functional, and deeply connected to the people who
              experience them.
            </p>

            <p className="text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
              Our design philosophy blends modern architecture with natural
              balance, allowing every project to reflect clarity, comfort, and
              refined detail through thoughtful spatial experiences.
            </p>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center pt-2 lg:justify-start lg:pt-4">
            <a
              href="https://www.instagram.com/aika_space?igsh=MWhzaGhobGJxaTNqeQ=="
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition hover:bg-slate-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
