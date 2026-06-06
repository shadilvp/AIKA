import { useParams, useNavigate } from "react-router-dom";

import { projects } from "../datas/projects";

export default function ProjectDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Project Not Found
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <button
          onClick={() => navigate("/projects")}
          className="mb-6 inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </button>
        
        <button
          onClick={() => navigate("/projects")}
          className="mb-8 flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-white transition hover:bg-white hover:text-black"
        >
          ← Back to Projects
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[500px] object-cover rounded-3xl"
        />

        <div className="mt-12">
          <span className="inline-block bg-zinc-900 px-4 py-2 rounded-full">
            {project.category}
          </span>

          <h1 className="text-5xl font-bold mt-6">{project.title}</h1>

          <div className="flex gap-6 mt-6 text-gray-400">
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>

          <p className="text-lg text-gray-300 leading-9 mt-8">
            {project.description}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <img
              src={project.image}
              alt=""
              className="rounded-2xl h-64 object-cover w-full"
            />
            <img
              src={project.image}
              alt=""
              className="rounded-2xl h-64 object-cover w-full"
            />
            <img
              src={project.image}
              alt=""
              className="rounded-2xl h-64 object-cover w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
