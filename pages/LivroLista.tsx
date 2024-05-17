import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Menu } from "../componentes/Menu";
import Head from "next/head";
import Livro from "../classes/modelo/Livro";
import { LinhaLivro } from "../componentes/LinhaLivro";
import styles from "../styles/Home.module.css";

const baseURL = "http://localhost:3000/api/livros";

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState(Array<Livro>);
  const [carregado, setCarregado] = useState(Boolean);

  useEffect(() => {
    obter().then((res) => {
      setLivros(res);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = (codigo: number) => {
    console.log(codigo, "metodo");
    excluirLivro(codigo);
    setCarregado(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className="px-5 text-left">
        <h1 className="text-left">Catálogo de Livros</h1>
        <table className="table table-striped text-left">
          <thead className="table-dark">
            <tr>
              <th className="col-2">Título</th>
              <th className="col-6">Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => {
              return (
                <LinhaLivro
                  livro={livro}
                  excluir={() => {
                    console.log(livro.titulo, livro.codigo);
                    excluir(livro.codigo);
                  }}
                  key={livro.codigo}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};

const obter = async () => {
  try {
    const res = await fetch(baseURL);

    return res.json();
  } catch (error) {
    console.log("Não foi possivel obter os dados", error);
  }
};

const excluirLivro = async (codigo: number) => {
  try {
    console.log(codigo, "função async");
    const res = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });
    if (res.ok) {
      console.log("Livro deletado com sucesso", codigo);
    } else {
      console.log("Não foi possivel deletar o livro");
    }
  } catch (error) {
    console.log("Um erro ocorreu ao tentar deletar o livro", error);
  }
};

export default LivroLista;