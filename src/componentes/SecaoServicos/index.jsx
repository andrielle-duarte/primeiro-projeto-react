import estilos from "./SecaoServicos.module.css";

export default function SecaoServicos () {
    return (
        <div id="servicos" className={estilos.secao}>
            <h3 className={estilos.h3}>SERVIÇOS</h3>
            <p className={estilos.paragrafo}>Contamos com diversos <span className={estilos.amarelo}>serviços imobiliários</span> e também prestamos suporte em cada uma das etapas necessárias de cada serviço. Aqui na <span className={estilos.amarelo}>Imobiliária Santos</span> podemos te ajudar com a seguinte gama de assuntos relativos a imóveis:</p>
            <ul className={estilos.lista} >
                <li>Venda</li>
                <li>Aluguel</li>
                <li>Financiamento</li>
                <li>Parcerias </li>
            </ul>
    </div>
    );
};