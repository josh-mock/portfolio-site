const project = {
  id: "portfolio-site",
  title: "Portfolio Site",
  subtitle: "Portfolio Project",
  demoUrl: "https://josh-mock.com",
  gitHubUrl: "https://github.com/josh-mock/portfolio-site",
  timeline: "June 2025-Present",
  projectType: "Next.js static",
  cardDescription:
    "This is my landing page, showcasing my software engineering journey so far.",
  fullDescription: (
    <p>
      This is my landing page, showcasing my recent projects. I followed{" "}
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=dLDn_k8GmaU&ab_channel=SlayingTheDragon"
        rel="noopener noreferrer"
      >
        <strong>this tutorial</strong>
      </a>{" "}
      for design inspiration and ported the app to <strong>Next.js</strong> for
      greater modularisation.
    </p>
  ),
  techStack: ["Next.js"],
  cardImage: {
    src: "/projects/portfolio-site/card.webp",
    placeholder: "https://placehold.co/900x900/DDD/DDD",
    alt: "Portfolio site homepage",
  },
  images: [
    {
      src: "/projects/portfolio-site/1.webp",
      alt: "Portfolio site homepage",
      type: "image",
    },
    {
      src: "/projects/portfolio-site/2.webp",
      alt: "Portfolio site about page",
      type: "image",
    },
    {
      src: "/projects/portfolio-site/3.webp",
      alt: "Portfolio site projects page",
      type: "image",
    },
    {
      src: "/projects/portfolio-site/4.webp",
      alt: "Portfolio site individual project page",
      type: "image",
    },
    {
      src: "/projects/portfolio-site/5.webp",
      alt: "Portfolio site contact page",
      type: "image",
    },
  ],
};

export default project;
