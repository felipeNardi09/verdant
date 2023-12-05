import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ILinkButton {
  children: string | ReactNode;
  to: string;
  type: keyof typeof styles;
}

const base =
  "rounded-full font-semibold text-green-800 hover:transition-colors duration-300";

const styles = {
  home: base,
  nav: `${base} text-xl px-5 py-3 bg-green-50 duration-300 transition-colors hover:bg-green-400 hover:text-green-50`,
  checkout: `${base} p-2 text-center text-green-700 hover:text-green-900 bg-yellow-100 hover:bg-yellow-400`,
  back: `${base} w-full p-2 text-center text-green-700 hover:text-green-900 bg-yellow-100 hover:bg-yellow-400`,
};

export default function LinkButton({ children, to, type }: ILinkButton) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button className={styles[type]} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={styles[type]}>
      {children}
    </Link>
  );
}
