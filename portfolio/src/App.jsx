// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>
    <Demo/>
  </MantineProvider>;
}





function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-4 sm:p-8 flex items-center justify-center">
      {/* CV Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full p-6 sm:p-10">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-2">John Doe</h1>
          <p className="text-lg sm:text-xl text-gray-600">Software Developer | Web Enthusiast</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm sm:text-base">
            <a href="mailto:john.doe@example.com" className="text-blue-600 hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              john.doe@example.com
            </a>
            <a href="tel:+1234567890" className="text-blue-600 hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 (234) 567-890
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.064-2.062 2.062 2.062 0 012.064-2.063 2.062 2.062 0 012.063 2.063 2.062 2.062 0 01-2.063 2.062zm1.787 13.019H3.55v-11.63h3.574v11.63zM22.227 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.456C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.227 0z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.865-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.338-2.22-.253-4.555-1.113-4.555-4.931 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.651.64.698 1.028 1.591 1.028 2.682 0 3.829-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.33-.012 2.41-.012 2.727 0 .268.18.578.688.482C21.137 20.19 24 16.437 24 12.017 24 6.484 19.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </header>

        {/* Summary Section */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">Summary</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Highly motivated and results-oriented software developer with 5+ years of experience in building and deploying scalable web applications. Proficient in modern JavaScript frameworks, backend technologies, and cloud platforms. Passionate about creating efficient, user-friendly, and maintainable code.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">Senior Software Engineer</h3>
            <p className="text-md sm:text-lg text-gray-600">Tech Solutions Inc. | New York, NY | Jan 2022 – Present</p>
            <ul className="list-disc list-inside mt-2 text-base sm:text-lg text-gray-700 space-y-1">
              <li>Led the development of a new microservices architecture, improving system scalability by 30%.</li>
              <li>Designed and implemented RESTful APIs using Node.js and Express, serving over 1 million requests daily.</li>
              <li>Mentored junior developers and conducted code reviews, ensuring high code quality and adherence to best practices.</li>
              <li>Collaborated with product teams to define requirements and translate them into technical specifications.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">Software Developer</h3>
            <p className="text-md sm:text-lg text-gray-600">Innovative Apps LLC. | San Francisco, CA | Jun 2019 – Dec 2021</p>
            <ul className="list-disc list-inside mt-2 text-base sm:text-lg text-gray-700 space-y-1">
              <li>Developed and maintained front-end features for a SaaS platform using React and Redux.</li>
              <li>Optimized application performance, reducing page load times by 20%.</li>
              <li>Participated in agile development cycles, contributing to sprint planning and daily stand-ups.</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">Master of Science in Computer Science</h3>
            <p className="text-md sm:text-lg text-gray-600">University of Technology | City, State | 2019</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">Bachelor of Science in Software Engineering</h3>
            <p className="text-md sm:text-lg text-gray-600">State University | City, State | 2017</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2 text-base sm:text-lg">
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">React</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Express.js</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Python</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Django</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">PostgreSQL</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Git</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">AWS</span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">Docker</span>
          </div>
        </section>

        {/* Projects Section (Optional but recommended for developers) */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 border-b-2 border-blue-300 pb-2 mb-4">Projects</h2>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">E-commerce Platform</h3>
            <p className="text-md sm:text-lg text-gray-600">
              Developed a full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.
            </p>
            <p className="text-sm text-gray-500 mt-1">Technologies: React, Node.js, Express, MongoDB, Stripe API</p>
            <a href="https://github.com/yourusername/ecommerce-project" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm sm:text-base mt-2 inline-block">View Project on GitHub</a>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">Task Management App</h3>
            <p className="text-md sm:text-lg text-gray-600">
              A responsive web application for managing tasks, featuring drag-and-drop functionality and real-time updates.
            </p>
            <p className="text-sm text-gray-500 mt-1">Technologies: React, Firebase (Firestore, Authentication)</p>
            <a href="https://github.com/yourusername/task-app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm sm:text-base mt-2 inline-block">View Project on GitHub</a>
          </div>
        </section>
      </div>
    </div>
  );
}