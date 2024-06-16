import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: "linked",
    name: "Linked",
    url: "https://playlinked.net",
    description:
      "Connect the movies of the day through the least amount of links as possible.",
    image: "/linked.png",
    cover: true,
  },
  {
    id: "welift",
    name: "Welift",
    url: "https://github.com/dosmond/Welift-API",
    description:
      "Uber for moving. Schedule moves or make money being a mover. Shut down in 2022.",
    image: "/welift.png",
    cover: true,
  },
  {
    id: "sar",
    name: "SAR Coordinator",
    url: "https://devpost.com/software/sar-coordinator",
    image: "/sarlogo.svg",
    cover: false,
    description:
      "A SaaS app for search and rescue teams to manage and organize large rescue efforts. We won first place at the HackTheU 2019 Hackathon.",
  },
];

export const AboutMe = () => {
  return (
    <section className="pt-32 pb-8 w-full min-h-[100vh] bg-base-100 bottom-clip items-center flex flex-col gap-8 relative">
      <article className="prose lg:prose-xl">
        <div className="gradient-frame p-8">
          <h1 className="text-4xl font-bold text-center !m-0">About Me</h1>
        </div>
        <p className="text-center">
          I&apos;m a senior fullstack software developer with a passion for
          creating and building things. I love to learn new things and I&apos;m
          always looking for new challenges.
        </p>
      </article>
      <div className="avatar">
        <div className="w-[240px] h-[240px] rounded-full ">
          <Image
            className="object-contain rounded-full"
            src="/headshot.jpeg"
            fill
            alt="It's me"
          />
        </div>
      </div>
      <div className="flex">
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start">May - Aug 2019</div>
            <div className="timeline-middle">
              <i className="fa-solid fa-circle-check fa-xl"></i>
            </div>
            <div className="timeline-end timeline-box">
              Software Engineer Intern - Motorola Solutions
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-start">May 2020</div>
            <div className="timeline-middle">
              <i className="fa-solid fa-circle-check fa-xl"></i>
            </div>
            <div className="timeline-end timeline-box">
              Graduated University of Utah - BS Computer Science
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-start">May 2020 - Sept 2021</div>
            <div className="timeline-middle">
              <i className="fa-solid fa-circle-check fa-xl"></i>
            </div>
            <div className="timeline-end timeline-box">
              Software Engineer - Motorola Solutions
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-start">Sept 2021 - March 2022</div>
            <div className="timeline-middle">
              <i className="fa-solid fa-circle-check fa-xl"></i>
            </div>
            <div className="timeline-end timeline-box">
              Founding Software Engineer - Welift
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-start">March 2022 - Present</div>
            <div className="timeline-middle">
              <i className="fa-solid fa-circle-check fa-xl"></i>
            </div>
            <div className="timeline-end timeline-box">
              Senior Software Engineer - Roster
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-8 p-8">
        <h1 className="text-3xl font-bold text-center !m-0">
          Projects I&apos;ve worked on
        </h1>
        <div className="flex flex-col lg:flex-row flex-wrap  justify-around p-4 bg-neutral rounded-box gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="carousel-item relative w-fit"
              id={project.id}
            >
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="w-full h-56 relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    objectFit={project.cover ? "cover" : "contain"}
                    unoptimized
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.name}</h2>
                  <p>{project.description}</p>
                  <Link href={project.url} target="_blank">
                    Check it out
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
