import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo-devmania.png"
            alt="Logo Devmania"
            className="h-8 cursor-pointer"
          />
        </Link>

        {/* Links de Navegação (Desktop) */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/cursos"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              href="/comunidade"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Comunidade
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Ícones (Carrinho, Favoritos, Usuário, Busca) */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="#">
            <AiOutlineHeart className="h-6 w-6 hover:text-yellow-400 transition-colors duration-300 cursor-pointer" />
          </Link>
          <Link href="#">
            <AiOutlineSearch className="h-6 w-6 hover:text-yellow-400 transition-colors duration-300 cursor-pointer" />
          </Link>
          <Link href="#">
            <AiOutlineUser className="h-6 w-6 hover:text-yellow-400 transition-colors duration-300 cursor-pointer" />
          </Link>
          <Link href="#">
            <AiOutlineShoppingCart className="h-6 w-6 hover:text-yellow-400 transition-colors duration-300 cursor-pointer" />
          </Link>
        </div>

        {/* Botão de Menu (Mobile) */}
        <button className="md:hidden focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Menu Mobile */}
      <div className="md:hidden bg-gray-800 text-white p-4">
        <ul className="flex flex-col space-y-4">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/cursos"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              href="/comunidade"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Comunidade
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
