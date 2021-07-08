import Receitas from "../Receitas"
import Consultas from "../Consultas"
import Ultima_consulta from "../Ultima_consulta"
import Pessoais from "../Pessoais"

export default function Informacoes(){
    return(
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
    )
}