import Homebutton from "./homeButton";

function Buttonrow() {
    return (
        <div className="buttonsRow">
            <Homebutton content="Contate-me" link="contato"/>
            <Homebutton content="Meus Projetos" link="projetos"/>
        </div>
    );
}

export default Buttonrow;