import { LanguageProvider } from "./context language/Provider"
import SwitchLanguage from "./context language/SwitchLanguage"
import ThemeSwitch from "./context theme/ThemeSwitch"
import { ThemeProvider } from "./context theme/ProviderTheme"
import User from "./user/UserForm"

function App() {
return (
    <div>
    <LanguageProvider>
      <SwitchLanguage/>
    </LanguageProvider>

    <ThemeProvider>
      <ThemeSwitch/>
    </ThemeProvider>
<User></User>
  </div>
)
}

export default App