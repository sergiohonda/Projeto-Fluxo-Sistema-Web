import "./styles.css"

export default function Pessoais(props){
    return(
        <div>
            <h2>Informações pessoais:</h2>
            <h3>Nome: {props.nome}</h3>
            <h3>Idade: {props.idade} anos</h3>
            <h3>Gênero: {props.genero}</h3>
            <h3>Contato: {props.contato}</h3>
            <h3>RG: {props.rg}</h3>
            <h3>CPF: {props.cpf}</h3>
            <h3>Estado civil: {props.estado_civil}</h3>
            <h3>Plano de saúde: {props.plano}</h3>
        </div>
    )
}