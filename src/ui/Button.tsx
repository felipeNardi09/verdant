import { MouseEventHandler } from "react";

interface IButton {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: keyof typeof styles;
  disabled?: boolean;
}

const styles = {
  quantity: `w-10 h-10 bg-green-50 rounded-full border-2 border-transparent hover:bg-green-400 hover:text-green-50 uration-300 transition-colors`,
  submit:
    "w-full rounded-full font-semibold text-green-800 hover:transition-colors duration-300 p-2 text-center text-green-700 hover:text-green-900 bg-yellow-100 hover:bg-yellow-400",
};

export default function Button({ children, type, onClick, disabled }: IButton) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
