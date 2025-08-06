import BarsIcon from "../../icons/Bars";

export default function MenuToggle({ onClick, className }) {
  return (
    <button
      className={className}
      onClick={onClick}
      aria-label="Open/close menu"
    >
      <BarsIcon />
    </button>
  );
}
