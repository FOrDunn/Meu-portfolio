function Contactbutton(props) {
    return (
        <a className="contactButton" href={props.href}>
            <img src={props.img} className="linkedinIcon"/>
            <p className="contentContact">{props.content}</p>
        </a>
    );
}
export default Contactbutton;