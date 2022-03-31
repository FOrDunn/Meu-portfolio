import linkedinIcon from '../../../assets/linkedinIcon.svg'
import emailIcon from '../../../assets/emailIcon.svg'
import Contactbutton from './contactButton';

function Buttondiv() {
    return (
        <div className="contactButtonsDiv">
            <Contactbutton content="linkedin" img={linkedinIcon}/>
            <Contactbutton content="E-mail" img={emailIcon}/>
        </div>
    );
}
export default Buttondiv;