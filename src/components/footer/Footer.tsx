import "../footer/Footer.css";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row py-4 text-center items-center justify-center md:justify-center color-footer text-[#53c38d] border-t-emerald-400 border-t-2 font-mono">
      <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
        <li>© {data} Team Cadu, Inc</li>
        <li>| Projeto Integrador |</li>
      </ul>
    </div>
  );
}

export default Footer;
