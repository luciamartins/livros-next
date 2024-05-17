import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 0,
    titulo: "Interação humano-computador",
    resumo:
      "Está seção engloba os conceitos introdutórios para o entendimento sobre IHC, com a explanação de aspectos sobre a comunicação que são a base para uma interação eficiente.",
    autores: ["Everson Matias de Morais","Adriane Aparecida Loper"],
  },
  {
    codigo: 2,
    codEditora: 1,
    titulo: "Expressões Regulares: Uma Abordagem Divertida ",
    resumo:
      "Revisando aquela tese de mestrado, você percebe que digitou errado o nome daquele pesquisador alemão famoso. E foram várias vezes. Escreveu Miller, Mueller e Müler, quando na verdade era Müller. Que tal corrigir todos de uma vez? Fácil, use a expressão M(i|ue|ü)ll?er.",
    autores: ["Aurelio Marinho Jargas"],
  },
  {
    codigo: 3,
    codEditora: 2,
    titulo: "Primeiros Passos com React",
    resumo:
      "Saia trabalhando de imediato com React: a tecnologia de código aberto do Facebook para construir rapidamente aplicações web sofisticadas. ",
    autores: ["Stoyan Stefanov"],
  },
];

class ControleLivro {
  obterLivros = () => {
    return livros;
  };
  incluir = (novoObjeto: Livro) => {
    const novoCodigo =
      livros.length > 0
        ? Math.max(...livros.map((livro) => livro.codigo)) + 1
        : 1;
    novoObjeto.codigo = novoCodigo;
    livros.push(novoObjeto);
  };
  excluir = (codigo: number) => {
    const objetoaExcluir = livros.findIndex((i) => i.codigo === codigo);
    livros.splice(objetoaExcluir, 1);
  };
}

export default ControleLivro;