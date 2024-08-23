import { Link } from "react-router-dom";
import "../footer/Footer.css";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <div className="flex flex-col py-4 text-center items-center jus color-footer text-[#53c38d] border-t-emerald-400 border-t-2 font-mono">
      <ul className="flex space-x-3">
        <li> © {data} Team Cadu, Inc</li>
        <li>| Projeto Integrador |</li>
        <Link to="/contato">
          <li className="hover:text-white">Entre em contato conosco</li>
        </Link>
      </ul>
    </div>
  );
}

export default Footer;
