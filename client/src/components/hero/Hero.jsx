import React from 'react'
import profilePic from "../../assets/photo.jpg"

const Hero = () => {
    return (
      <section className="h-screen flex items-center justify-center bg-slate-900 text-white px-6 dark:bg-black dark:text-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl w-full">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hey, I'm <span className="text-indigo-400">Ajay Nishad</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            I build sleek and scalable web experiences with React.
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition"
          >
            View Projects
          </a>
        </div>
    
        {/* Profile Image Section */}
        <div className="mb-8 md:mb-0">
          <img
            src={profilePic}
            alt="Ajay Nishad"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />
        </div>
      </div>
    </section>
      );
}

export default Hero
