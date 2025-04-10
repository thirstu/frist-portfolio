import React from 'react'

const Skills = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git", "Tailwind CSS"];

    return (
        <section id="skills" className="py-20 px-6 dark:bg-gray-950 dark:text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Skills
