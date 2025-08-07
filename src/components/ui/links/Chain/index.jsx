import LinkIcon from "../../icons/Link";
import IconLink from "../IconLink";

export default function Chain({ href, className }) {
  return (
    <IconLink
      href={href}
      className={className}
      icon={<LinkIcon />}
      label={"Chain icon with link to demo of the project"}
    />
  );
}
