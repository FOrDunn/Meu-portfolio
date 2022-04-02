import { useTitle } from "../../hooks/useTitle";
import Projetostitle from "./projetosTitle";
import projetoImagem from "../../../assets/portfolioImage.png"
import { SiJavascript,SiReact } from 'react-icons/si';

function Projetosmain() {
    useTitle("Projetos | Juan Blandi");

    return (
        <main className="projetosMain">
            <Projetostitle />
            <div className="projetosWrapper">
                <div className="projetosButton"><p></p></div>
                <div className="projetosDiv">
                    <div className="leftSectionProjetos">
                        <div className="projetoImageWrapper"><img src={projetoImagem} className="projetoImage"/></div>
                        <h2 className="projetoTech">Tecnologias</h2>
                        <div className="techIconDiv">
                            <SiJavascript className="techIcon"/>
                            <SiReact className="techIcon"/>
                        </div>
                    </div>
                    <div className="rightSectionProjetos">
                        <h2 className="projetoName">Portfolio</h2>
                        <p className="projetoDescription">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                          </p>
                    </div>
                </div>
                <div className="projetosButton"></div>
            </div>
        </main>
    );
}

export default Projetosmain;