import Buttonrow from "./buttonRow";
import Maindescription from "./mainDescription";
import Maintitle from "./mainTitle";

function Leftsection() {
    return (
        <div className="leftSection">
          <Maintitle/>
          <Maindescription 
          content="Ola! Meu nome e Juan Blandi e eu tenho uma enorme
                  paixão de criar coisas na web."
          />
          <Maindescription content="De front a back-end, você encontra tudo aqui!"/>
          <Buttonrow/>
        </div>
    );
}

export default Leftsection;