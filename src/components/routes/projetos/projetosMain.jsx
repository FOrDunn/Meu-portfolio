import { useTitle } from "../../hooks/useTitle";
import Projetostitle from "./projetosTitle";

function Projetosmain() {
    useTitle("Projetos | Juan Blandi");

    return (
        <main className="projetosMain">
            <Projetostitle />
            <div className="projetosWrapper">
                <div className="projetosButton"><p></p></div>
                <div className="projetosDiv">
                    <div className="leftSectionProjetos">
                        <div className="projetoImage"><img/></div>
                        <h2 className="projetoTech">Tecnologias</h2>
                        <div className="techIcons">
                            <img/>
                            <img/>
                            <img/>
                            <img/>
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