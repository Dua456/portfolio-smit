import { MapPin, Briefcase, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

function Hero() {
  return (
    <div id='hero' className="min-h-90% bg-white/80 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text Content */}
          <div className="space-y-6">

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Hi, I'm Dua Shakir
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              I am a passionate <span className="font-semibold">MERN-stack web developer</span> with hands-on experience in building
              modern, user-friendly, and highly optimized websites. I work with
              <span className="font-semibold"> HTML, CSS, Tailwind, Bootstrap, JavaScript, TypeScript, React.js and Next.js</span>.
              I focus on clean UI/UX, API integration, responsive layouts, and scalable architecture to deliver
              smooth and high-performance web applications.
            </p>

            {/* Location & Availability */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5" />
                <span className="text-sm sm:text-base">Karachi, Pakistan</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-medium text-sm sm:text-base">
                  Available for new projects
                </span>
              </div>
            </div>

            {/* CTA & Social Links */}
            <div className="flex flex-wrap items-center gap-2 pt-4">

              {/* Let's Work Together Button */}
              <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors shadow-md text-sm sm:text-base">
                <Briefcase className="w-5 h-5" />
                Let's Work Together
              </button>

              {/* Social Icons */}
              <div className="flex gap-2">
                <a href="https://github.com/Dua456" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-200">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </a>
                <a href="https://www.linkedin.com/in/dua-shakir-0692b82b9/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-200">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </a>
                <a href="https://www.instagram.com/piyare_guriya_284/?utm_source=qr&igsh=aHh1b2VyMWw1anZz#" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-200">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </a>
                <a href="https://www.facebook.com/share/1QeZyHkCHz/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-200">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">

              <div className="absolute -inset-4 bg-linear-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>

              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden 
                    w-48 h-64 sm:w-60 sm:h-80 md:w-72 md:h-96">
                <img
                  src="../../public/assets/images/profile-image.jpg"
                  alt="Dua Shakir"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
