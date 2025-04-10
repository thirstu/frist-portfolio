import React from 'react'

const Projects = () => {
    const projects = [
        {
          name: "Project One",
          description: "A cool project that does amazing things.",
          tech: "React, Node.js",
          live: "https://youtube-hmm.netlify.app/",
          github: "https://github.com/thirstu/YouTube_intern",
        },
        {
          name: "Project Two",
          description: "Surf recipe and create and save one of your own",
          tech: "HTML, CSS, JAVASCRIPT",
          live: "https://fokify-ajay.netlify.app/",
          github: "https://github.com/thirstu/forkify",
        },
      ];
    
      return (
        <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tech used: {project.tech}</p>
                  <div className="flex gap-4">
                    <a href={project.live} target="_blank" className="text-blue-600 hover:underline">Live</a>
                    <a href={project.github} target="_blank" className="text-gray-800 dark:text-gray-100 hover:underline">GitHub</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Projects
