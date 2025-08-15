import Link from "next/link";

export default function IconBtn({ href, icon, className, ariaLabel }) {
  const isInternalLink = href && href.startsWith("/");

  if (isInternalLink) {
    return (
      <div className="btn-wrapper">
        <Link href={href} className={className} aria-label={ariaLabel}>
          {icon}
        </Link>
      </div>
    );
  }

  return (
    <div className="btn-wrapper">
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {icon}
      </a>
    </div>
  );
}
