import landRegistrySearch from "@/lib/projects/land-registry-search.js";
import multilingualWordle from "@/lib/projects/multilingual-wordle.js";
import portfolioSite from "@/lib/projects/portfolio-site.js";
import jobjot from "@/lib/projects/jobjot.js";

const projects = {
  [jobjot.id]: jobjot,
  [landRegistrySearch.id]: landRegistrySearch,
  [portfolioSite.id]: portfolioSite,
  [multilingualWordle.id]: multilingualWordle,
};

export default projects;
