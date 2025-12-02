import React from 'react';
import { Code, Users, Briefcase, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const quickFacts = [
    {
      icon: <Code className="w-4 h-4" />,
      text: "Focused on modern frontend and MERN-stack development"
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      text: "Always exploring new tools, technologies, and frameworks"
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "Good at communication and working with clients or teams"
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      text: "Open for freelance projects and collaborations"
    }
  ];

  return (
    <div id='about' className="min-h-70% bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side - Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm">

              <div className="bg-linear-to-br from-gray-900 to-gray-700 rounded-2xl overflow-hidden shadow-2xl
                    w-full h-80 sm:h-96 md:h-[480px] lg:h-[520px]">

                <img
                  src="../assets/images/about-image.jpg"
                  alt="Dua Shakir"
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>

            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4">

            {/* Heading — SAME HERO FONT FEEL */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
              Curious to know about me?
            </h2>

            {/* Paragraphs — SAME HERO PARAGRAPH FONT */}
            <div className="space-y-2 text-lg text-gray-700 leading-relaxed">

              <p>
                I'm <span className="font-semibold">Dua Shakir</span>, a passionate
                <span className="font-semibold"> MERN-stack and frontend developer</span> who loves creating fast, responsive, and user-friendly web applications. I’m currently studying at
                <span className="font-semibold"> GIAIC</span>, improving my skills in TypeScript, Next.js, Tailwind CSS, Generative AI, and API integrations.
              </p>

              <p>
                I started my journey with HTML, CSS, and JavaScript — and have now built 25+ real projects using React.js, Next.js, TypeScript, and modern UI tools. My work includes ecommerce websites, landing pages, portfolio designs, and interactive web apps.
              </p>

              <p>
                I also hold a degree in <span className="font-semibold">B.Com</span>, which strengthens my understanding of business workflows and helps me bring professional structure to my development process.
                You can find my progress on{' '}
                <a href="https://www.linkedin.com/in/dua-shakir-0692b82b9/" className="text-blue-600 hover:underline font-semibold">LinkedIn</a> and my projects on{' '}
                <a href="https://github.com/Dua456" className="text-blue-600 hover:underline font-semibold">GitHub</a>.
              </p>
            </div>

            {/* Quick Facts */}
            <div>
              <p className="text-xl text-gray-900 font-semibold mb-4">
                A few quick facts:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {quickFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-gray-700 mt-0.5">{fact.icon}</div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {fact.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <p className="text-lg text-gray-700">
                Let’s work together and build modern, scalable digital experiences! ✨
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

   );
}