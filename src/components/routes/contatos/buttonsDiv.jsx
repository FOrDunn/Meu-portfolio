import linkedinIcon from '../../../assets/linkedinIcon.svg'
import emailIcon from '../../../assets/emailIcon.svg'
import Contactbutton from './contactButton';

function Buttondiv() {
    return (
        <div className="contactButtonsDiv">
            <Contactbutton content="linkedin" img={linkedinIcon} href="https://www.linkedin.com/in/juan-cruz-blandi/"/>
            <Contactbutton content="E-mail" img={emailIcon}  href="mailto:cruzjuanblandi@gmail.com"/>
        </div>
    );
}
export default Buttondiv;