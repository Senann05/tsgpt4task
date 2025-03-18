import { LanguageProvider } from "./context language/Provider"
import SwitchLanguage from "./context language/SwitchLanguage"
import ThemeSwitch from "./context theme/ThemeSwitch"
import { ThemeProvider } from "./context theme/ProviderTheme"
import UserManager from "./user/UserManager"

function App() {
return (
    <div>
    <LanguageProvider>
      <SwitchLanguage/>
    </LanguageProvider>

    <ThemeProvider>
      <ThemeSwitch/>
    </ThemeProvider>

<UserManager></UserManager>
  </div>
)
}

export default App