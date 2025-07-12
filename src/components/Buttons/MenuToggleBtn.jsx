import BarsIcon from "../Icons/BarsIcon";

export default function MenuToggleBtn({ onClick }) {
  return (
    <button
      className="header__bars"
      onClick={onClick}
      aria-label="Open/close menu"
    >
      <BarsIcon />
    </button>
  );
}
