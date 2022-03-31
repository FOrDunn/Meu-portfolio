import Forminput from "./formInput";

function Contactform() {
    return (
        <form className="emailForm">
            <div className="inputWrapper">
                <Forminput name="nome" type="text" content="Nome:"/>
                <Forminput name="email" type="email" content="E-mail:"/>
                <label><p className="inputLabels">Mensagem:</p>
                <textarea name="mensagem" className="formInput formInputTextarea" required/>
                </label>
            </div>
            <button type="submit" className="formButton">Enviar</button>
        </form>
    );
}
export default Contactform;