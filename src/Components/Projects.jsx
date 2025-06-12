import React from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis, nobis veniam nemo quasi corrupti eveniet suscipit amet, odit atque incidunt laboriosam minus quas, dignissimos voluptatum totam accusantium quae natus! Eaque asperiores rerum minus, provident esse laudantium fugit, iusto veritatis, ratione eligendi voluptas? A magnam reprehenderit voluptate, commodi sapiente aperiam quidem laboriosam ut consequatur! Repellendus tempore aliquam vel architecto vero nemo, ipsa voluptatum sed cum corporis. Amet optio repellat error dolores. Labore necessitatibus doloremque voluptates dolor nisi vel ipsa maiores sit est ex saepe nobis placeat ratione impedit esse velit soluta aut repellendus eveniet, facere voluptatum dolorem et, reprehenderit provident.",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis, nobis veniam nemo quasi corrupti eveniet suscipit amet, odit atque incidunt laboriosam minus quas, dignissimos voluptatum totam accusantium quae natus! Eaque asperiores rerum minus, provident esse laudantium fugit, iusto veritatis, ratione eligendi voluptas? A magnam reprehenderit voluptate, commodi sapiente aperiam quidem laboriosam ut consequatur! Repellendus tempore aliquam vel architecto vero nemo, ipsa voluptatum sed cum corporis. Amet optio repellat error dolores. Labore necessitatibus doloremque voluptates dolor nisi vel ipsa maiores sit est ex saepe nobis placeat ratione impedit esse velit soluta aut repellendus eveniet, facere voluptatum dolorem et, reprehenderit provident.",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis, nobis veniam nemo quasi corrupti eveniet suscipit amet, odit atque incidunt laboriosam minus quas, dignissimos voluptatum totam accusantium quae natus! Eaque asperiores rerum minus, provident esse laudantium fugit, iusto veritatis, ratione eligendi voluptas? A magnam reprehenderit voluptate, commodi sapiente aperiam quidem laboriosam ut consequatur! Repellendus tempore aliquam vel architecto vero nemo, ipsa voluptatum sed cum corporis. Amet optio repellat error dolores. Labore necessitatibus doloremque voluptates dolor nisi vel ipsa maiores sit est ex saepe nobis placeat ratione impedit esse velit soluta aut repellendus eveniet, facere voluptatum dolorem et, reprehenderit provident.",
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis, nobis veniam nemo quasi corrupti eveniet suscipit amet, odit atque incidunt laboriosam minus quas, dignissimos voluptatum totam accusantium quae natus! Eaque asperiores rerum minus, provident esse laudantium fugit, iusto veritatis, ratione eligendi voluptas? A magnam reprehenderit voluptate, commodi sapiente aperiam quidem laboriosam ut consequatur! Repellendus tempore aliquam vel architecto vero nemo, ipsa voluptatum sed cum corporis. Amet optio repellat error dolores. Labore necessitatibus doloremque voluptates dolor nisi vel ipsa maiores sit est ex saepe nobis placeat ratione impedit esse velit soluta aut repellendus eveniet, facere voluptatum dolorem et, reprehenderit provident.",
    },
    {
      id: 5,
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis, nobis veniam nemo quasi corrupti eveniet suscipit amet, odit atque incidunt laboriosam minus quas, dignissimos voluptatum totam accusantium quae natus! Eaque asperiores rerum minus, provident esse laudantium fugit, iusto veritatis, ratione eligendi voluptas? A magnam reprehenderit voluptate, commodi sapiente aperiam quidem laboriosam ut consequatur! Repellendus tempore aliquam vel architecto vero nemo, ipsa voluptatum sed cum corporis. Amet optio repellat error dolores. Labore necessitatibus doloremque voluptates dolor nisi vel ipsa maiores sit est ex saepe nobis placeat ratione impedit esse velit soluta aut repellendus eveniet, facere voluptatum dolorem et, reprehenderit provident.",
    },
  ];

  return (
    <div className="p-4 sm:p-8 lg:p-12 px-3 sm:px-5" id="projects">
      <div className="flex flex-col justify-center items-center gap-3 m-2 sm:m-5">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-blue-500 font-bold text-center">
          Projects
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-blue-950 font-semibold text-center">
          This is a list of my projects.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-center gap-3 m-2 sm:m-3 lg:m-5 bg-blue-50 rounded-3xl shadow-lg p-4 sm:p-5 lg:p-6 transition-transform hover:scale-[1.02]"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-blue-500 font-bold">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-blue-950 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
