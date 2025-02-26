import estilos from "./Rodape.module.css"

export default function Rodape () {
    return (
        <div className={estilos.rodape}>
            <p>&copy; {new Date().getFullYear()} Andrielle Duarte.</p>
        </div>
    );
};