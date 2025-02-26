import imovel from "../../../public/imovel-assinatura.jpg";
import Image from "next/image";
import estilos from "./SecaoSobre.module.css";

export default function SecaoSobre () {
    return (
        <div id="sobre" className={estilos.secao}>
            <h1 className={estilos.h1}>Encontre o imóvel dos seus sonhos</h1>
            <h2 className={estilos.h2}>A imobiliária que te ajuda no sonho do seu imóvel</h2>
            <Image src={imovel} alt="Uma imagem da assinatura de um Imovel"   />
            <p className={estilos.paragrafo}>Há <span className={estilos.textoAzul}>10 anos</span> no ramo temos conquistado a confiança de <span className={estilos.textoAzul}>inúmeros clientes</span>.Isso porque procuramos sempre as melhores condições tanto para quem quer comprar, como para quem quer vender ou alugar. Oferecemos um <span className={estilos.textoAzul}>serviço de qualidade</span> servindo como ponte entre as partes interessadas.</p>
    </div>
    );
};