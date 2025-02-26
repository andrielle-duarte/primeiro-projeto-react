import Head from "next/head";
import estilos from "../styles/Home.module.css"
import Image from "next/image";
import Topo from "@/componentes/Topo";
import Banner from "@/componentes/Banner";
import SecaoSobre from "@/componentes/SecaoSobre";
import SecaoServicos from "@/componentes/SecaoServicos";
import SecaoCorrretores from "@/componentes/SecaoCorretores";
import SecaoContatos from "@/componentes/SecaoContatos";
import Rodape from "@/componentes/Rodape";  



export default function Home() {
  return (
    <>
      <Head>
        <title>Imobiliária Santos</title>
        <meta name="description" content="A Imobiliária que te ajuda a conquistar seu sonho da casa nova" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Topo />
      <Banner />
      <SecaoSobre />
      <SecaoServicos />
      <SecaoCorrretores />
      <SecaoContatos />
      <Rodape />
    </>
  );
}
