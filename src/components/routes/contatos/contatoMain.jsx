import Contatotitle from "./contatoTitle";
import img from '../../../assets/contatoImage.svg'
import linkedinIcon from '../../../assets/linkedinIcon.svg'
import emailIcon from '../../../assets/emailIcon.svg'

function Contatomain() {
    return (
        <main className="contatoMain">
            <div className="contatoLeftSection">
                <Contatotitle />
                <div className="rightWrapper">
                    <form className="emailForm">
                        <div className="inputWrapper">
                            <label><p className="inputLabels">Name:</p>
                            <input type="text" name="nome" className="formInput" required/>
                            </label>
                            <label><p className="inputLabels">E-mail:</p>
                            <input type="email" name="assunto" className="formInput" required/>
                            </label>
                            <label><p className="inputLabels">Mensagem:</p>
                            <textarea name="mensagem" className="formInput formInputTextarea" required/>
                            </label>
                        </div>
                        <button type="submit" className="formButton">Enviar</button>
                    </form>
                    <div className="contactOptions">
                        <p className="midDiv">ou</p>
                        <div className="contactButtonsDiv">
                            <a className="contactButton"><img src={linkedinIcon} className="linkedinIcon"/><p className="contentContact">Linkedin</p></a>
                            <a className="contactButton"><img src={emailIcon} className="emailIcon"/><p className="contentContact">E-mail</p></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightSection">
                    <img src={img} className="contatoImage"/>
            </div>
        </main>
    );
}

export default Contatomain;