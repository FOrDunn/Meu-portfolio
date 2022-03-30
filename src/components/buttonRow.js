import Homebutton from "./homeButton";

function Buttonrow() {
    return (
        <div className="buttonsRow">
            <Homebutton content="Contate-me"/>
            <Homebutton content="Meus Projetos"/>
        </div>
    );
}

export default Buttonrow;