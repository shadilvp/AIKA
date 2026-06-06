import { useEffect, useState } from "react";

import AboutPage from "./about";
import FAQPage from "./faq";
import BlogPage from "./blog";
import ContactPage from "./contact";
import ProjectsPage from "./ProjectsPage";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern architectural interior with strong lines",
  },
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    alt: "Minimalist home exterior with glass and concrete",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxury architectural living space with bold contrast",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <img
              key={slide.src + index}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-16 text-center sm:px-10 lg:px-16">
          <span className="mb-6 inline-flex text-sm uppercase tracking-[0.35em] text-slate-200">
            AIKA Studio
          </span>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Architecture shaped by simplicity, light, and lasting detail.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            From modern homes to thoughtful interiors, AIKA creates spaces that
            feel calm, functional, and deeply connected to the people who live
            in them.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href="https://wa.me/917012890599?text=Hello%20AIKA%20Space%2C%20I%20would%20like%20to%20inquire%20about%20your%20architecture%20and%20interior%20design%20services.%20Please%20let%20me%20know%20how%20I%20can%20get%20in%20touch%20with%20you.%20Thank%20you."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-white/60 px-10 text-sm font-semibold text-black backdrop-blur-sm transition hover:bg-white"
            >
              Talk With Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/40 px-4 py-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-white" : "bg-slate-400/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* IMPORTED SECTIONS */}
      <AboutPage />
      <FAQPage />
      <BlogPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}