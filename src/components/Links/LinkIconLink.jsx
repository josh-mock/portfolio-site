import LinkIcon from "../Icons/LinkIcon";
import IconLink from "./IconLink";

export default function LinkIconLink({ href, className }) {
  return <IconLink href={href} className={className} icon={<LinkIcon />} />;
}
