function Contactbutton(props) {
    return (
        <a className="contactButton">
            <img src={props.img} className="linkedinIcon"/>
            <p className="contentContact">{props.content}</p>
        </a>
    );
}
export default Contactbutton;