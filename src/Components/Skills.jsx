import React from "react";

function Skills() {
  const skills = [
    {
      name: "React",
      description:
        "Building dynamic, component-based user interfaces with hooks, state management, and modern React patterns",
    },
    {
      name: "JavaScript",
      description:
        "ES6+ proficiency for both frontend interactivity and backend development, including async/await and modern JS features",
    },
    {
      name: "HTML",
      description:
        "Semantic markup, accessibility best practices, and clean, standards-compliant web structure",
    },
    {
      name: "CSS",
      description:
        "Responsive design, Flexbox, Grid, animations, and creating pixel-perfect, mobile-first layouts",
    },
    {
      name: "Python",
      description:
        "Backend development, data manipulation, scripting, and building scalable server-side applications",
    },
    {
      name: "Django",
      description:
        "Full-stack web framework expertise including ORM, REST APIs, authentication, and MVT architecture",
    },
    {
      name: "Git",
      description:
        "Version control, branching strategies, collaborative development, and maintaining clean commit histories",
    },
    {
      name: "REST APIs",
      description:
        "Designing and consuming RESTful services, JSON handling, and frontend-backend integration",
    },
  ];

  return (
    <div className="py-8 lg:py-16 px-3 sm:px-5" id="skills">
      <div className="mx-auto px-4 sm:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-semibold text-blue-500 mb-8 lg:mb-12">
          Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg shadow-md p-4 sm:p-5 lg:p-6 transition-transform hover:scale-105"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2">
                {skill.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
