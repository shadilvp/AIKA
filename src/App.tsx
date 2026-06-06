import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import FAQPage from "./pages/faq";
import BlogPage from "./pages/blog";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import aikaLogo from "./assets/aika.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">

        {/* HEADER */}
        <header className="fixed left-0 right-0 top-0 z-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

            {/* LOGO */}
            <Link to="/">
              <img
                src={aikaLogo}
                alt="AIKA logo"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="transition duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition hover:bg-white/10 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </header>

        {/* MOBILE OVERLAY */}
        <div
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            mobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* MOBILE DRAWER */}
        <div
          className={`fixed right-0 top-0 z-50 flex h-screen w-[82%] max-w-[340px] flex-col bg-[#0A0A0A] px-8 py-8 shadow-2xl transition-transform duration-500 lg:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* TOP */}
          <div className="flex items-center justify-between">
            <img
              src={aikaLogo}
              alt="AIKA logo"
              className="h-14 w-auto object-contain"
            />

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
            >
              <X size={18} />
            </button>
          </div>

          {/* NAV LINKS */}
          <nav className="mt-16 flex flex-col gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium tracking-tight text-white transition hover:text-slate-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* FOOTER */}
          <div className="mt-auto border-t border-white/10 pt-6">
            <p className="text-sm leading-7 text-slate-400">
              AIKA Studio — Architecture and interiors crafted with clarity,
              simplicity, and modern elegance.
            </p>
          </div>
        </div>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/projects/all" element={<AllProjectsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;