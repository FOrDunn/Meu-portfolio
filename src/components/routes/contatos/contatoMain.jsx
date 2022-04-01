import { useTitle } from "../../hooks/useTitle.jsx";
import Leftsectioncontato from "./leftSectionContato.jsx";
import Rightsectioncontato from './rightSectionContato.jsx'

function Contatomain() {
    useTitle("Contato | Juan Blandi");

    return (
        <main className="contatoMain">
            <Leftsectioncontato/>
            <Rightsectioncontato />
        </main>
    );
}

export default Contatomain;