import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">

      <section className="mb-16">
        <h1 className="text-4xl font-bold">Olá, sou o Ryan </h1>
        <p className="text-lg text-gray-600 mt-2">
          Desenvolvedor Full Stack apaixonado por criar experiências digitais.
        </p>
      </section>

      {/* Sobre */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
        <p className="text-gray-700">
          Estudante de Analise e Desenvolvimento de Sistemas, com experiência em Banco de Dados e Python.
        </p>
      </section>

      {/* Projetos */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
        <div className="grid gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold">Projeto 1</h3>
            <p className="text-gray-600">Descrição breve do projeto.</p>
            <a href="#" className="text-blue-500 text-sm">Ver no GitHub →</a>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <p>📧 thalisonryan4@gmail.com</p>
        <p>💼 <a href="#" className="text-blue-500">LinkedIn</a></p>
      </section>
    </main>
  );
}