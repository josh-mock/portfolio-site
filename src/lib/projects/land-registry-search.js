const project = {
  id: "Land-registry-search",
  title: "Land Registry Search",
  subtitle: "Portfolio Project",
  demoUrl: "https://land-registry-search.vercel.app/",
  gitHubUrl: "https://github.com/josh-mock/land-registry-search",
  timeline: "2024-present",
  projectType: "Fullstack",
  cardDescription:
    "A searchable web app that displays and filters HM Land Registry datasets on UK and overseas companies owning property in England and Wales.",
  fullDescription: (
    <>
      <p>
        When working with HM Land Registry&#39;s{" "}
        <a
          href="https://www.gov.uk/guidance/hm-land-registry-overseas-companies-that-own-property-in-england-and-wales"
          target="_blank"
          rel="noreferrer noopener"
        >
          <strong>OCOD</strong>
        </a>{" "}
        and{" "}
        <a
          href="https://use-land-property-data.service.gov.uk/datasets/ccod"
          target="_blank"
          rel="noreferrer noopener"
        >
          <strong>CCOD</strong>
        </a>{" "}
        datasets, I came accross three main issues. First, the files are{" "}
        <strong>too large</strong> to open in programmes like Excel. Second, the
        data is <strong>not cleaned and normalised</strong>, making it hard to
        search for results. And third, the two{" "}
        <strong>datasets are separate</strong> but could be merged to provide a
        clearer survey of property ownership.
      </p>
      <p>
        This project is a <strong>monorepo</strong> of two applications. The
        first is a <strong>Python</strong> programme using{" "}
        <strong>Polars</strong> to download, clean, and merge the datasets
        before inserting the data into a <strong>PostgreSQL</strong> database.
        The second is a <strong>Next.js fullstack </strong> application to
        facilitate searching the database and displaying the results in a clear
        and concise manner. The company search feature uses{" "}
        <strong>autocomplete</strong> so users can see if the company they wish
        to search is in the database.
      </p>
    </>
  ),
  techStack: ["Next.js", "Polars", "Python", "PostgreSQL"],
  cardImage: {
    src: "/projects/land-registry-search/card.webp",
    alt: "A search result for National Highways Company LTD",
  },
  images: [
    {
      src: "/projects/land-registry-search/1.webm",
      alt: "Demonstration of using the app",
      type: "video",
    },
  ],
};

export default project;
