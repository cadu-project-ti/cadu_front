import DevSwiper from "../../components/swiper/DevSwiper";

function Contato() {
  return (

    <div className="container flex flex-col font-mono mx-auto items-center m- bg-[#19191a] p-7">

      <main className="flex-col w-1/2 gap-8 bg-white text-[#] bg-opacity-50 mt-10 p-6 rounded-lg shadow-lg grid grid-cols-2">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Com a Empresa</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="nomeEmpresa" className="block text-sm font-medium text-gray-700">Seu Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                placeholder="Seu Nome"
                className="border-2 border-slate-700 rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="emailEmpresa" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="emailEmpresa"
                name="emailEmpresa"
                required
                placeholder="email@email.com"
                className="border-2 border-slate-700 rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="telefoneEmpresa" className="block text-sm font-medium text-gray-700">Número de Telefone</label>
              <input
                type="tel"
                id="telefoneEmpresa"
                name="telefoneEmpresa"
                required
                placeholder="+99 (99) 99999-9999"
                className="border-2 border-slate-700 rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mensagemEmpresa" className="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea
                id="mensagemEmpresa"
                name="mensagemEmpresa"
                required
                placeholder="Escreva sua mensagem aqui"
                className="border-2 border-slate-700 rounded p-2 h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded bg-[#53c38d] text-white hover:bg-white  hover:text-[#53c38d] font-semibold w-1/2 mx-auto block py-2"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Com os Desenvolvedores</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="nomeDev" className="block text-sm font-medium text-gray-700">Seu Nome</label>
              <input
                type="text"
                id="nomeDev"
                name="nomeDev"
                required
                placeholder="Seu Nome"
                className="border-2 border-slate-700 rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="emailDev" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="emailDev"
                name="emailDev"
                required
                placeholder="email@email.com"
                className="border-2 border-slate-700 rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="telefoneDev" className="block text-sm font-medium text-gray-700">Número de Telefone</label>
              <input
                type="tel"
                id="telefoneDev"
                name="telefoneDev"
                required
                placeholder="+99 (99) 99999-9999"
                className="border-2 border-slate-700 rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="devSelecionado" className="block text-sm font-medium text-gray-700">Selecione o Desenvolvedor</label>

              <DevSwiper />
              
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mensagemDev" className="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea
                id="mensagemDev"
                name="mensagemDev"
                required
                placeholder="Escreva sua mensagem aqui"
                className="border-2 border-slate-700 rounded p-2 h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded bg-[#53c38d] text-white  hover:bg-white  hover:text-[#53c38d] font-semibold w-1/2 mx-auto block py-2"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
  ;


export default Contato;