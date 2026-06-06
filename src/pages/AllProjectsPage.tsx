import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../datas/projects";

export default function AllProjectsPage() {
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold mb-10">
          All Projects
        </h1>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={`px-5 py-2 rounded-full transition ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-zinc-900 border border-zinc-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="text-2xl font-semibold mt-5">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {project.description}
              </p>

              <div className="flex gap-4 text-sm text-gray-500 mt-4">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}