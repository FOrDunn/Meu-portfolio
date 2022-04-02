import { useTitle } from "../../hooks/useTitle";
import Projetostitle from "./projetosTitle";
import Projetoswrapper from "./projetosWrapper";

function Projetosmain() {
    useTitle("Projetos | Juan Blandi");

    return (
        <main className="projetosMain">
            <Projetostitle />
            <Projetoswrapper/>
        </main>
    );
}

export default Projetosmain;