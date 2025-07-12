export default function IconLink({ href, icon, className = "" }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}
