import "./styles.css"

export default function Ultima_consulta(props){
    return(
        <div>
            <h2>Dados da última consulta:</h2>
            <h3>Temperatura: {props.temperatura}°C</h3>
            <h3>Pressão: {props.pressao} mmHg</h3>
        </div>
    )
}