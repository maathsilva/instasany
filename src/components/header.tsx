import Image from "next/image";
import Link from "next/link";

import LogoImg from "/public/logo.svg";
import SearchIcon from "/public/icon-search.svg";
import IconUser from "/public/icon-user.svg";
import { GridContainer } from "./grid";

const arrayMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preços promocionais",
  "Sobre nós",
];

export function Header() {
  return (
    <header className="relative w-full h-24 bg-green-900 flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="Logo" />
        <div className="flex items-center gap-20">
          <nav className="flex gap-4">
            {arrayMenu.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="px-3 py-1 text-white opacity-40 hover:bg-green-800 hover:opacity-100 hover:rounded-full hover:transition-all"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <button className="cursor-pointer">
              <Image src={SearchIcon} alt="Search Icon" />
            </button>
            <button className="flex items-center gap-2 cursor-pointer">
              <Image src={IconUser} alt="User Icon" />
              <span className="text-white font-medium">Fazer Login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
