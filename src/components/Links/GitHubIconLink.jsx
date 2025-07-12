import { GITHUB } from "../../constants/CONSTANTS";
import GitHubIcon from "../Icons/GitHubIcon";
import IconLink from "./IconLink";

export default function GitHubIconLink({ className }) {
  return <IconLink className={className} href={GITHUB} icon={<GitHubIcon />} />;
}
