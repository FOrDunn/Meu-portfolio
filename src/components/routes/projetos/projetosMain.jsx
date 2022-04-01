import { useTitle } from "../../hooks/useTitle";
import Projetostitle from "./projetosTitle";

function Projetosmain() {
    useTitle("Projetos | Juan Blandi");

    return (
        <main className="projetosMain">
            <Projetostitle />
        </main>
    );
}

export default Projetosmain;