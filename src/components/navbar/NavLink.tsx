import React from "react";
import Link from "next/link";

type Props = {
  path: string;
  name: string | JSX.Element;
};

const NavLink = (props: Props) => {
  return (
    <Link
      href={props.path}
      className="p-6
        ease-in-out duration-150 transform
        hover:bg-stone-300
        hover:-translate-y-1
        hover:scale-110
        focus:text-21F5E6"
    >
      {props.name}
    </Link>
  );
};

export default NavLink;
