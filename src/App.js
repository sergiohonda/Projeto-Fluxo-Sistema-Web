import "./App.css"
import Header from "./Components/Header"
import Pessoais from "./Components/Pessoais"
import Indicador_paciente from "./Components/Indicador_paciente"
import Receitas from "./Components/Receitas"
import Consultas from "./Components/Consultas"
import Ultima_consulta from "./Components/Ultima_consulta"
import Botao_consulta from "./Components/Botao_consulta"
import Botao_paciente from "./Components/Botao_paciente"


function App() {
  return (
    <div className="pagina">
      <Header/>
      <div className="main">
        <div className="area_paciente">
          <Indicador_paciente/>
          <div className="informacoes">
            <Pessoais
              nome="João Paulo"
              idade={23}
              genero="Masculino"
              contato={21988546712}
              rg={284839641}
              cpf={16586200920}
              estado_civil="Solteiro"
              plano="Unimed"
            />
            <div className="bloco_direita">
              <Receitas
                medicamentos = {["Novalgina", "Dipirona", "Paracetamol"]}
              />
              <Consultas
                data="10/12/2021"
                hora="10:30"
              />
              <Ultima_consulta
                temperatura={37}
                pressao="120x80"
              />
            </div>
          </div>
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
