import "./App.css"
import Header from "./Components/Header"
import Pessoais from "./Components/Pessoais"
import Indicador_paciente from "./Components/Indicador_paciente"
import Receitas from "./Components/Receitas"
import Consultas from "./Components/Consultas"
import Ultima_consulta from "./Components/Ultima_consulta"


function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <div className="area_paciente">
          <Indicador_paciente/>
          <div className="informacoes">
            <Pessoais
              nome="João Paulo"
              idade={23}
              genero="Masculino"
              ddd={21}
              contato={988546712}
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
                dia={10}
                mes={12}
                ano={2021}
                hora={10}
                minuto={30}
              />
              <Ultima_consulta
                temperatura={37}
                pressao="120x80"
              />
            </div>
          </div>
        </div>
        <div className="botoes">

        </div>
      </div>
    </>
  );
}

export default App
