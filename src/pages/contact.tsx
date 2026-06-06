export default function ContactPage() {
  return (
    <section className="bg-black text-white">
      {/* HERO */}
      <div className="relative h-[45vh] overflow-hidden">
        <img
          src="/contactop.avif"
          alt="Architecture"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-300">
              Contact
            </p>

            <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl">
              Let's Create Something Timeless
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">

        {/* CONTACT INFO */}
        <div className="grid gap-4 md:grid-cols-3">

          <div className="border border-white/10 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Email
            </p>

            <p className="mt-4 text-sm text-slate-300">
              rahmankv03@gmail.com
            </p>
          </div>

          <div className="border border-white/10 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Location
            </p>

            <p className="mt-4 text-sm text-slate-300">
              Valanchery, Malappuram
            </p>
          </div>

          <div className="border border-white/10 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Studio Hours
            </p>

            <p className="mt-4 text-sm text-slate-300">
              Monday — Saturday
              <br />
              9:00 AM — 6:00 PM
            </p>
          </div>

        </div>

        {/* FORM + IMAGE */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2">

          {/* FORM */}
          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Send Message
            </p>

            <h2 className="mt-4 text-3xl font-light tracking-tight">
              Tell us about your project.
            </h2>

            <p className="mt-4 max-w-lg text-base leading-8 text-slate-400">
              Whether you're planning a new residence, a renovation,
              or a commercial space, we'd love to hear about your vision.
            </p>

            <form className="mt-10 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-white/10 bg-transparent px-5 py-4 text-sm outline-none transition focus:border-white/30"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-white/10 bg-transparent px-5 py-4 text-sm outline-none transition focus:border-white/30"
              />

              <input
                type="text"
                placeholder="Project Type"
                className="w-full border border-white/10 bg-transparent px-5 py-4 text-sm outline-none transition focus:border-white/30"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full resize-none border border-white/8 bg-transparent px-3 py-3 text-sm outline-none transition focus:border-white/30"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center border border-white px-8 py-4 text-sm uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
              >
                Send Inquiry
              </button>

            </form>

          </div>

          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src="/contact right.avif"
              alt="Modern Architecture"
              className="h-full min-h-[600px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 border-t border-white/10 pt-16 text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            AIKA Studio
          </p>

          <h3 className="mt-4 text-2xl font-light">
            Architecture rooted in simplicity and purpose.
          </h3>

          <a
            href="mailto:rahmankv03@gmail.com"
            className="mt-8 inline-flex border border-white px-8 py-4 text-sm uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
          >
            Contact Us
          </a>

        </div>

      </div>
    </section>
  );
}