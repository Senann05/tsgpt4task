import { LanguangeContext } from "./LanguageContext";
import { useContext } from "react";

function SwitchLanguage() {
    const{ language, toggleLanguage } = useContext(LanguangeContext)
return(
    <div>
        <h3>hazirki dil {language}</h3>
        <button onClick={toggleLanguage}>dili deyis</button>
    </div>
)
}export default SwitchLanguage;