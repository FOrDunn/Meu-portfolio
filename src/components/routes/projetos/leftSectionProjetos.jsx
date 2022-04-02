import projetoImagem from "../../../assets/portfolioImage.png"
import Techicons from "./techIcons";

function Leftsectionprojetos() {
    return (
        <div className="leftSectionProjetos">
            <div className="projetoImageWrapper"><img src={projetoImagem} className="projetoImage"/></div>
            <h2 className="projetoTech">Tecnologias</h2>
            <Techicons/>
        </div>
    );
}
export default Leftsectionprojetos;