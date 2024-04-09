import Image from "next/image";

export const AboutMe = () => {
  return (
    <section className="pt-32 w-full min-h-[100vh] bg-base-100 bottom-clip z-[-1] items-center flex flex-col gap-8">
      <article className="prose lg:prose-xl">
        <div className="gradient-frame p-8">
          <h1 className="text-4xl font-bold text-center !m-0">About Me</h1>
        </div>
        <p className="text-center">
          I&apos;m a software developer with a passion for creating and building
          things. I love to learn new things and I&apos;m always looking for new
          challenges.
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
    </section>
  );
};
