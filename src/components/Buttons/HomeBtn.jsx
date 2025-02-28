 
export function BorderedButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-[var(--primary-color)]
        text-[var(--secondary-color)]
        border-2
        border-[var(--secondary-color)]
        uppercase
        px-12 py-3
        rounded-full
        font-bold
        transition-colors
        duration-300
        hover:bg-[var(--secondary-color)]
        hover:text-[var(--primary-color)]
      "
    >
      {children}
    </button>
  );
}

// 2) A borderless button with the same color swap on hover
export function BorderlessButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-[var(--primary-color)]
        text-[var(--secondary-color)]
        border-0
        uppercase
         px-12 py-3
        rounded-full
        font-bold
        transition-colors
        duration-300
        hover:bg-[var(--secondary-color)]
        hover:text-[var(--primary-color)]
      "
    >
      {children}
    </button>
  );
}

// 3) Another button: primary bg, trinary text, no border, different hover
export function AltNoBorderButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-[var(--primary-color)]
        text-[var(--trinary-color)]
        border-0
        uppercase
         px-12 py-3
        rounded-full
        font-bold
        transition-colors
        duration-300
        hover:bg-[var(--secondary-color)]
        hover:text-[var(--primary-color)]
      "
    >
      {children}
    </button>
  );
}
