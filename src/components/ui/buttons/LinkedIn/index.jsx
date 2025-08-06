import { LINKEDIN } from "@/lib/constants";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBtn from "../IconBtn";

export default function LinkedInBtn({
  className,
  href = LINKEDIN,
  ariaLabel = "View the site owner's LinkedIn page",
}) {
  return (
    <IconBtn
      href={href}
      icon={<FontAwesomeIcon icon={faLinkedin} />}
      className={className}
      ariaLabel={ariaLabel}
    />
  );
}
