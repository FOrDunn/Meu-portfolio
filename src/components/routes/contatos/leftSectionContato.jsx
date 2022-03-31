import Contatotitle from "./contatoTitle";
import Contactform from "./contactForm";
import Contactoptions from "./contactOptions";

function Leftsectioncontato() {
    return (
        <div className="contatoLeftSection">
        <Contatotitle />
        <div className="rightWrapper">
            <Contactform/>
            <Contactoptions/>
        </div>
    </div>
    );
}

export default Leftsectioncontato;