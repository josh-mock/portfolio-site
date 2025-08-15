import LinkIcon from "@/components/ui/icons/Link";
import IconLink from "@/components/ui/links/IconLink";

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
