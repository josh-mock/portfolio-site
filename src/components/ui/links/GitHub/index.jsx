import GitHubIcon from "@/components/ui/icons/GitHub";
import IconLink from "@/components/ui/links/IconLink";

export default function GitHubIconLink({ className, href }) {
  return (
    <IconLink
      className={className}
      href={href}
      icon={<GitHubIcon />}
      label={"Github icon with link to repo of the project"}
    />
  );
}
