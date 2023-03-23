import { CadastroProvider } from "./contexts/contextCadastro";
import { RoutesMain } from "./routes";

function App() {
  return (
    <CadastroProvider>
      <RoutesMain />
    </CadastroProvider>
  );
}

export default App;
