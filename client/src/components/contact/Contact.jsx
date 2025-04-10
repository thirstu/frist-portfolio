import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 dark:bg-gray-950 dark:text-white">
         <div className="max-w-2xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-6">Contact</h2>
  <p className="text-gray-700 dark:text-gray-300 mb-6">
    Interested in working together or just want to say hi? Reach out below 👇
  </p>
  <div className="flex flex-col gap-3 text-lg">
    <a href="mailto:ajay@example.com" className="text-blue-600 hover:underline">
      ajaykn185@gmail.com
    </a>
    <a
      href="https://github.com/thirstu"
      target="_blank"
      className="text-gray-800 dark:text-gray-200 hover:underline"
    >
      GitHub
    </a>
    <a
      href="https://www.linkedin.com/in/ajay-nishad-657574270/"
      target="_blank"
      className="text-blue-700 hover:underline"
    >
      LinkedIn
    </a>
    <a
      href="https://wa.me/919971229827"
      target="_blank"
      className="text-green-600 hover:underline"
    >
      WhatsApp
    </a>
  </div>
</div>
        </section>
      );
}

export default Contact
