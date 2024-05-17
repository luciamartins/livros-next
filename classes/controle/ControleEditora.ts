import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  {
    codEditora: 0,
    nome: "Pearson",
  },
  {
    codEditora: 1,
    nome: "Novatec",
  },
  {
    codEditora: 2,
    nome: "Novatec",
  },
];

class ControleEditora {
  getNomeEditora = (codEditora: number) => {
    const nome = editoras
      .filter((editora) => editora.codEditora === codEditora)
      .map((editora) => editora.nome);
    return nome;
  };

  getEditoras = () => {
    return editoras;
  };
}

export default ControleEditora;