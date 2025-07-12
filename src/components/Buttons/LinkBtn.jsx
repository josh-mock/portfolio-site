import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBtn from "./IconBtn";

export default function LinkBtn({
  className,
  href,
  ariaLabel = "View a demo of the project",
}) {
  return (
    <IconBtn
      href={href}
      icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
      className={className}
      ariaLabel={ariaLabel}
    />
  );
}
