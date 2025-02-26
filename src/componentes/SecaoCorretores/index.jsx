import estilos from "./SecaoCorretores.module.css";
import Image from "next/image";
import Corretores from "../../../public/corretores.jpg";

export default function SecaoCorrretores () {
    return (
        <div id="corretores" className={estilos.secao}>
            <h3 className={estilos.h3}>CORRETORES</h3>
            <Image src={Corretores} className={estilos.image} />
            <p className={estilos.paragrafo}>A <span class={estilos.azul}>Imobiliária Santos</span> conta com um time de profissionais qualificados que têm vários anos de experiência no mercado. Para entrar em contato com um de nossos corretores, basta clicar no link a seguir: <a href="mailto:corretores@email.com">Corretores</a> </p>  
    </div>
    );
};
