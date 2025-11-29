import React from 'react';

export default function SkillsSection() {
  const skills = [
    {
      name: 'HTML5',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none">
          <path d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30" fill="#E34F26"/>
          <path d="M16 27.858l8.17-2.265 1.922-21.532H16" fill="#EF652A"/>
          <path d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.83-.759 8.517H16" fill="#EBEBEB"/>
          <path d="M16 21.958l-.014.004-3.442-.93-.22-2.465H9.221l.433 4.853 6.331 1.758.015-.004" fill="#EBEBEB"/>
          <path d="M19.827 16.151l-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007" fill="#FFF"/>
          <path d="M15.989 13.191v3.091h-3.806l-.052-.583-.12-1.313-.062-.695" fill="#FFF"/>
          <path d="M15.989 6.935v3.091h-7.241l-.052-.583-.12-1.313-.062-.695" fill="#FFF"/>
        </svg>
      ),
      percentage: 95,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'CSS3',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none">
          <path d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30" fill="#1572B6"/>
          <path d="M16 27.858l8.17-2.265 1.922-21.532H16" fill="#33A9DC"/>
          <path d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.83-.759 8.517H16" fill="#FFF"/>
          <path d="M16.019 21.218l-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004" fill="#EBEBEB"/>
          <path d="M19.827 16.151l-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007" fill="#FFF"/>
        </svg>
      ),
      percentage: 90,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'JavaScript',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" fill="#F7DF1E" rx="2"/>
          <path d="M19.238 23.313c.58 1.063 1.329 1.85 2.656 1.85 1.118 0 1.825-.558 1.825-1.329 0-.922-.731-1.248-1.952-1.786l-.669-.287c-1.937-.825-3.226-1.859-3.226-4.045 0-2.014 1.534-3.547 3.933-3.547 1.707 0 2.933.594 3.817 2.151l-2.091 1.342c-.46-.825-.956-1.15-1.726-1.15-.786 0-1.285.498-1.285 1.15 0 .806.498 1.131 1.651 1.631l.669.287c2.283.98 3.571 1.978 3.571 4.223 0 2.418-1.899 3.742-4.447 3.742-2.494 0-4.106-1.186-4.896-2.742l2.17-1.49zm-8.576.096c.42.746.804 1.378 1.726 1.378.881 0 1.437-.345 1.437-1.687V14h2.666v9.135c0 2.78-1.631 4.045-4.013 4.045-2.151 0-3.397-1.114-4.045-2.454l2.229-1.317z" fill="#000"/>
        </svg>
      ),
      percentage: 88,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'TypeScript',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" fill="#3178C6" rx="2"/>
          <path d="M18.245 22.813v2.542c.463.238.997.417 1.603.538.605.121 1.25.181 1.933.181.683 0 1.324-.079 1.923-.238.598-.159 1.121-.401 1.567-.726.446-.325.798-.731 1.056-1.22.258-.488.387-1.058.387-1.71 0-.488-.084-.914-.252-1.279a3.273 3.273 0 00-.678-.975 4.81 4.81 0 00-.978-.726 11.26 11.26 0 00-1.163-.538l-1.298-.462a6.363 6.363 0 01-.843-.371 1.93 1.93 0 01-.528-.431.857.857 0 01-.181-.556c0-.214.058-.401.173-.56.116-.159.273-.291.473-.397a2.34 2.34 0 01.678-.224c.254-.048.519-.072.795-.072.277 0 .557.024.843.072.285.048.564.119.836.213.273.095.533.206.783.333.249.127.476.266.678.417v-2.39a7.644 7.644 0 00-1.472-.417 8.868 8.868 0 00-1.783-.181c-.664 0-1.285.084-1.864.252-.578.168-1.08.413-1.506.735a3.41 3.41 0 00-1.002 1.18c-.242.468-.364 1.001-.364 1.598 0 .682.142 1.256.426 1.723.285.467.647.858 1.087 1.174.44.316.931.575 1.472.777.541.202 1.075.388 1.603.56.528.171.997.35 1.41.537.412.186.743.396.99.629.249.233.373.515.373.846 0 .242-.063.453-.19.632a1.445 1.445 0 01-.512.431c-.214.111-.463.19-.746.238a4.795 4.795 0 01-.895.072c-.683 0-1.35-.132-2.002-.397a6.13 6.13 0 01-1.707-1.071zm-9.245-8.81h3.837v9.997h2.784v-9.997h3.837V11.19H9v2.813z" fill="#FFF"/>
        </svg>
      ),
      percentage: 85,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'React',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
          <path d="M16 8.5c4.694 0 8.5 1.679 8.5 3.75S20.694 16 16 16s-8.5-1.679-8.5-3.75S11.306 8.5 16 8.5zM16 23.5c-4.694 0-8.5-1.679-8.5-3.75S11.306 16 16 16s8.5 1.679 8.5 3.75-3.806 3.75-8.5 3.75z" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
          <path d="M12.25 10.625c2.347-4.067 5.619-6.375 7.313-5.156 1.693 1.219 1.23 5.131-1.117 9.198-2.347 4.067-5.619 6.375-7.313 5.156-1.693-1.219-1.23-5.131 1.117-9.198zM19.75 21.375c-2.347 4.067-5.619 6.375-7.313 5.156-1.693-1.219-1.23-5.131 1.117-9.198 2.347-4.067 5.619-6.375 7.313-5.156 1.693 1.219 1.23 5.131-1.117 9.198z" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      percentage: 92,
      color: 'from-cyan-400 to-blue-400'
    },
    {
      name: 'Next.js',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="#000"/>
          <path d="M22.667 24.667L12 10.667v13.333h1.333v-10l8.667 11.334a14 14 0 002-1.334zM19.333 10.667h1.334v13.333h-1.334V10.667z" fill="#FFF"/>
        </svg>
      ),
      percentage: 87,
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none">
          <path d="M16 8c-3.2 0-5.2 1.6-6 4.8.8-1.6 1.73-2.2 2.8-1.8.61.153 1.047.597 1.53 1.09C15.456 13.247 16.71 14.5 20 14.5c3.2 0 5.2-1.6 6-4.8-.8 1.6-1.73 2.2-2.8 1.8-.61-.153-1.047-.597-1.53-1.09C20.544 9.253 19.29 8 16 8zm-6 6.5c-3.2 0-5.2 1.6-6 4.8.8-1.6 1.73-2.2 2.8-1.8.61.153 1.047.597 1.53 1.09C9.456 19.747 10.71 21 14 21c3.2 0 5.2-1.6 6-4.8-.8 1.6-1.73 2.2-2.8 1.8-.61-.153-1.047-.597-1.53-1.09C14.544 15.753 13.29 14.5 10 14.5z" fill="#06B6D4"/>
        </svg>
      ),
      percentage: 93,
      color: 'from-cyan-400 to-teal-400'
    },
    {
      name: 'Python',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 32 32" fill="none">
          <path d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912h2.395v-3.361s-.13-4.013 3.9-4.013h6.677s3.786.06 3.786-3.652V5.8s.572-3.7-6.886-3.7zm-3.714 2.145c.655 0 1.186.531 1.186 1.186s-.531 1.186-1.186 1.186-1.186-.531-1.186-1.186.531-1.186 1.186-1.186z" fill="#366994"/>
          <path d="M16.085 29.91c7.1 0 6.651-3.07 6.651-3.07v-3.19h-6.751v-1h9.441S30 23.21 30 15.995s-4.013-6.912-4.013-6.912H23.59v3.361s.13 4.013-3.9 4.013h-6.677s-3.786-.06-3.786 3.652v6.091s-.572 3.7 6.886 3.7zm3.714-2.145c-.655 0-1.186-.531-1.186-1.186s.531-1.186 1.186-1.186 1.186.531 1.186 1.186-.531 1.186-1.186 1.186z" fill="#FFC836"/>
        </svg>
      ),
      percentage: 80,
      color: 'from-blue-500 to-yellow-500'
    }
  ];

  return (
    <div id='skills' className="min-h-screen bg-white/80 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Skills
          </span>
          
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-3 group"
            >
              {/* Skill Icon */}
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="space-y-3">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-linear-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                
                {/* Percentage */}
                <div className="text-center">
                  <span className={`text-lg font-bold bg-linear-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}