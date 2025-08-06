import Link from "next/link";

export default function IconBtn({ href, icon, className, ariaLabel }) {
  const isInternalLink = href && href.startsWith("/");

  if (isInternalLink) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {icon}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  );
}
