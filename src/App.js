import "./App.css"
import Header from "./Components/Header"
import Informacoes from "./Components/Informacoes"
import Indicador_paciente from "./Components/Indicador_paciente"
import Botao_consulta from "./Components/Botao_consulta"
import Botao_paciente from "./Components/Botao_paciente"


function App() {
  return (
    <div className="pagina">
      <Header/>
      <div className="main">
        <div className="area_paciente">
          <Indicador_paciente/>
          <Informacoes/>
          <Indicador_paciente/>
          <Informacoes/>
        </div>
        <div className="botoes">
          <Botao_consulta/>
          <Botao_paciente/>
        </div>
      </div>
    </div>
  );
}

export default App
