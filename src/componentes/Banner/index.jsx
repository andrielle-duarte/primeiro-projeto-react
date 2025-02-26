import Image from "next/image";
import bannerImagem from "../../../public/banner.jpg";
import estilos from "./Banner.module.css"

export default function Banner(){
    return (
        <div className={estilos.banner}>
            <Image src={bannerImagem} alt="uma imagem de um lar" className={estilos.image} />
        </div>
    
    );
};