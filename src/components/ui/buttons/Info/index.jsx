import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBtn from "../IconBtn";

export default function InfoBtn({
  className,
  href,
  ariaLabel = "View more information about the project",
}) {
  return (
    <IconBtn
      href={href}
      icon={<FontAwesomeIcon icon={faCircleInfo} />}
      className={className}
      ariaLabel={ariaLabel}
    />
  );
}
