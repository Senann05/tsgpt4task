import { ThemeContext } from "./ThemeContext";
import { useContext, useEffect } from "react";

function ThemeSwitch(){
    const {theme, toggleTheme} = useContext(ThemeContext)

    useEffect(()=>{
        if(theme=== "light"){
            document.body.style.backgroundColor="black";
            document.body.style.color="white"
        }else{
            document.body.style.backgroundColor="gray";
            document.body.style.color="black"            
        }
    })
return(
    <div>
        <h3>hazirki mod {theme}</h3>
        <button onClick={toggleTheme}>modu deyis</button>
    </div>
)
}export default ThemeSwitch;