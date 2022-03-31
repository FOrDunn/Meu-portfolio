import { Link } from "react-router-dom";


function Homebutton(props) {
    return (
        <Link to={props.link} className="linkButton">
            <p>{props.content}</p>
        </Link>
    );
}

export default Homebutton;