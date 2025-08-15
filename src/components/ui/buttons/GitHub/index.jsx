import IconBtn from "@/components/ui/buttons/IconBtn";
import { GITHUB } from "@/lib/constants";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GitHubBtn({
  className,
  href = GITHUB,
  ariaLabel = "Visit site owner's GitHub page",
}) {
  return (
    <IconBtn
      className={className}
      href={href}
      icon={<FontAwesomeIcon icon={faGithub} />}
      ariaLabel={ariaLabel}
    />
  );
}
