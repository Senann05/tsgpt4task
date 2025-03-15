import { LanguangeContext } from "./LanguageContext";
import { useState, ReactNode } from "react";

export const LanguageProvider = ({children}: {children: ReactNode}) => {
const [language, setLanguage] = useState("en");

 const toggleLanguage = () =>{
    setLanguage((prevLanguage)=> (prevLanguage === "en"? "az" : "en"));
 }
 return(
    <LanguangeContext.Provider value={{language , toggleLanguage}}>
        {children}
    </LanguangeContext.Provider>
 )
}
