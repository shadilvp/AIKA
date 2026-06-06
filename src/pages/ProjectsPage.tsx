import { Link } from "react-router-dom";
import { projects } from "../datas/projects";

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 mb-4">
              Home / Projects
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Our Work.
              <span className="text-gray-500">
                {" "}
                Your Vision Realized.
              </span>
            </h1>

            <p className="text-gray-400 leading-8 mb-8">
              Every project reflects our commitment to
              quality, innovation and precision.
            </p>

            <Link
              to="/projects/all"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
            >
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={projects[0].image}
              alt=""
              className="h-72 w-full object-cover rounded-3xl col-span-2"
            />

            <img
              src={projects[7].image}
              alt=""
              className="h-52 w-full object-cover rounded-3xl"
            />

            <img
              src={projects[12].image}
              alt=""
              className="h-52 w-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}