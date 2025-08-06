import GitHubIcon from "../../icons/GitHub";
import IconLink from "../IconLink";
export default function GitHubIconLink({ className, href }) {
  return <IconLink className={className} href={href} icon={<GitHubIcon />} />;
}
