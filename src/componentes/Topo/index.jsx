import Image from "next/image";
import Logo from "../../../public/logo.png";
import estilos from "./Topo.module.css";

export default function Topo (){
    return (
        <div className={estilos.secao}>
            <Image src={Logo} className={estilos.topo} alt="Imobiliária Santos" />
            <p className={estilos.paragrafoTopo} > 
                <a className={estilos.linkTopo} href="#sobre">Sobre</a>
                <a className={estilos.linkTopo} href="#servicos">Serviços</a>
                <a className={estilos.linkTopo} href="#corretores">Corretores</a>
                <a className={estilos.linkTopo} href="#contatos">Contatos</a>
            </p>
    </div>
    );
};