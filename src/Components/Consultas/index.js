import "./styles.css"

export default function Consultas(props){
    return(
        <div>
            <h3>Data: {props.dia}/{props.mes}/{props.ano}</h3>
            <h3>Hora: {props.hora}:{props.minuto}</h3>
        </div>
    )
}