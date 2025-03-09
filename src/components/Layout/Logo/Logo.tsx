import Link from "next/link";
import Image from "next/image";
import IconLogo from "/assets/logo.svg";
import { FC } from "react";

interface ILogo {
  onClick?: () => void;
}

export const Logo: FC<ILogo> = ({ onClick }) => {
  return (
    <Link href="/" onClick={onClick}>
      <Image
        src="/assets/logo.png"
        priority
        alt="logo"
        width={90}
        height={60}
      />
    </Link>
  );
};
