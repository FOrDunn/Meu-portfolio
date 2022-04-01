import { useTitle } from "../../hooks/useTitle";
import Leftsection from "./leftSection";
import Rightsection from "./rightSection";

function Homemain() {
    useTitle("Home | Juan Blandi");

    return (
        <main className="homeMain">
          <Leftsection/>
          <Rightsection />
        </main>
    );
}

export default Homemain;