const project = {
  id: "portfolio-site",
  title: "Portfolio Site",
  subtitle: "Portfolio Project",
  demoUrl: "https://josh-mock.com",
  gitHubUrl: "https://github.com/josh-mock/portfolio-site",
  timeline: "June 2025-Present",
  projectType: "React SPA",
  cardDescription:
    "This is my landing page, showcasing my software engineering journey so far.",
  fullDescription: (
    <p>
      This is my landing page, showcasing my recent projects. I followed{" "}
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=dLDn_k8GmaU&ab_channel=SlayingTheDragon"
      >
        <strong>this tutorial</strong>
      </a>{" "}
      for design inspiration and ported the app to <strong>Next.js</strong> for
      greater modularisation.
    </p>
  ),
  techStack: ["React", "CSS", "React Router", "React Hook Form", "Yup"],
  cardImage: {
    src: "/projects/portfolio-site/card.webp",
    alt: "Portfolio site homepage",
  },
  images: [
    {
      src: "/projects/portfolio-site/1.webp",
      alt: "Portfolio site homepage",
      placeholder: "https://placehold.co/1920x968",
      aspectRatio: "1920/968",
    },
  ],
};

export default project;
