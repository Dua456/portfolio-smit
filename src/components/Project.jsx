import React, { useState } from 'react';

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      image: "../assets/images/chatboard.png",
      title: 'ChatBoard',
      description: 'Real-time Chat App built with React, Firebase, Tailwind CSS, HTML, and JavaScript.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'JS', 'HTML'],
      link: 'https://chatboard-six.vercel.app/'
    },
    {
      image: "../assets/images/student-portal.jpg",
      title: 'Student Portal',
      description: 'Manage student data, attendance, and activities with HTML, CSS, JavaScript, and Firebase.',
      tags: ['HTML', 'CSS', 'JS', 'Firebase'],
      link: 'https://student-portal-firebase.vercel.app/'
    },
    {
      image: "../assets/images/todo-app.jpeg",
      title: 'ToDo App',
      description: 'A React practice project built with HTML, JavaScript, Tailwind CSS for learning components and responsive UI.',
      tags: ['React', 'Tailwind CSS', 'JS', 'HTML'],
      link: 'https://practice-work-react.vercel.app/'
    },
    {
      image: "../assets/images/quiz-app.jpeg",
      title: 'Quiz App',
      description: 'A simple Quiz application built with HTML, CSS, and JavaScript for testing user knowledge.',
      tags: ['HTML', 'CSS', 'JS'],
      link: 'https://dua456.github.io/QUIZ-APP-HTML-CSS-JAVASCRIPT/'
    },
    {
      image: "../assets/images/password-generator.png",
      title: 'Password Generator',
      description: 'An interactive Password Generator built with HTML, CSS, and JavaScript to create secure passwords.',
      tags: ['HTML', 'CSS', 'JS'],
      link: 'https://dua456.github.io/Passwoard-Generator/'
    },
    {
      image: "../assets/images/calculator.png",
      title: 'Calculator',
      description: 'A simple Calculator application built with HTML, CSS, and JavaScript for performing basic arithmetic operations.',
      tags: ['HTML', 'CSS', 'JS'],
      link: 'https://dua456.github.io/Calculator/'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <div id='work' className="min-h-screen bg-white/80 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-8">
          <span className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm font-medium">
            Work
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl text-gray-800 text-center mb-16">
          Some of the noteworthy projects I have built:
        </h2>

        <div className="relative">

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
            {getVisibleProjects().map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-3xl shadow-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-gray-700 text-lg max-w-2xl mx-auto">
                    {project.title}
                  </h3>

                  <p className="text-gray-800 text-lg leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        <div className="flex justify-center gap-2 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gray-800 w-8' : 'bg-gray-300'}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}