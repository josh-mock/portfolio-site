const project = {
  id: "jobjot",
  title: "JobJot",
  subtitle: "Portfolio Project",
  demoUrl: "https://github.com/josh-mock/jobjot",
  gitHubUrl: "https://github.com/josh-mock/jobjot",
  timeline: "May 2025-present",
  projectType: "Fullstack",
  cardDescription:
    "A fullstack web app to organise job applications, interviews, and offers in one place, built to solve the struggle of tracking the job hunt.",
  fullDescription: (
    <>
      <p>
        While applying for jobs, I often struggled to{" "}
        <strong>keep track of applications, interviews, and offers</strong> all
        in one place. Between scattered spreadsheets, emails, and sticky notes,
        it was easy to lose sight of what stage I was in with each company.
        JobJot was born out of the need for a{" "}
        <strong>single, organised system</strong> to manage the entire job
        search process from start to finish.
      </p>
      <p>
        JobJot allows users to <strong>add and update applications</strong>,
        record interview details and outcomes, and <strong>track offers</strong>{" "}
        as they come in. Once an opportunity is closed, it can be{" "}
        <strong>archived</strong> with details like the closure date, reason,
        feedback, and personal reflections. This reflection feature is designed
        to help users <strong>learn from each experience</strong> and improve
        for the future.
      </p>
      <p>
        Built with <strong>Next.js</strong>, the app
        uses <strong>Material UI</strong> for a clean, accessible interface and{" "}
        <strong>Mongoose</strong> for managing structured data. Form validation
        is handled with <strong>Yup</strong>, ensuring accurate and reliable
        input at every stage. Together, these tools create a{" "}
        <strong>fullstack application</strong> that’s easy to use, scalable, and
        purpose-built to simplify the job hunt.
      </p>
    </>
  ),
  techStack: ["Next.js", "MongoDB", "Tanstack Query", "Material UI", "0Auth"],
  cardImage: {
    src: "/projects/jobjot/card.webp",
    alt: "A search result for National Highways Company LTD",
  },
  images: [
    {
      src: "/projects/jobjot/2.webp",
      alt: "Kanban board",
      type: "image",
    },
    {
      src: "/projects/jobjot/3.webp",
      alt: "Log in page",
      type: "image",
    },
    {
      src: "/projects/jobjot/1.webp",
      alt: "Form to add job",
      type: "image",
    },
    {
      src: "/projects/jobjot/4.webp",
      alt: "Example opportunity record",
      type: "image",
    },
  ],
};

export default project;
