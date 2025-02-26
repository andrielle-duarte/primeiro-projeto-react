import Link from "next/link";
import estilos from "./SecaoContatos.module.css";


export default function SecaoContatos () {
    return (
        <div id="contatos" className={estilos.secao}>
            <h3 className={estilos.h3}>CONTATOS</h3>
            <iframe className={estilos.iframe} src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7346.254844548052!2d-43.364712467659004!3d-22.98234139602229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-904!5e0!3m2!1spt-BR!2sbr!4v1642532754862!5m2!1spt-BR!2sbr" ></iframe>
            <p className={estilos.paragrafo}>Se ficou interessado em nos conhecer ou se tiver dúvidas entre em <span className={estilos.amarelo}>contato</span> conosco através de um dos telefones abaixo:</p>
            <ul type="none" className={estilos.lista}>
                <li className={estilos.itemLista}>
                    <Link className={estilos.link} href="mailto:officebarra@email.com">Escritório Barra da Tijuca</Link>
                </li>
                <li className={estilos.itemLista}>
                    <Link className={estilos.link} href="mailto:officecentro@email.com">Escritório Centro/RJ</Link>
                </li>
                <li className={estilos.itemLista}>
                    <Link className={estilos.link} href="mailto:officemeier@email.com">Escritório Méier</Link>
                </li>
            </ul>
        </div>
    );
};