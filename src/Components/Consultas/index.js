import "./styles.css"

export default function Consultas(props){
    return(
        <div>
            <h2>Consultas marcadas:</h2>
            <h3>Data: {props.data}</h3>
            <h3>Hora: {props.hora}</h3>
        </div>
    )
}