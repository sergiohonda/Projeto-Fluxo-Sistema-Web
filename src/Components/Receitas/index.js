import "./styles.css"

export default function Receitas(props){
    return(
        <ul>
            <li>Medicamento1: {props.medicamentos[0]}</li>
            <li>Medicamento2: {props.medicamentos[1]}</li>
            <li>Medicamento3: {props.medicamentos[2]}</li>
        </ul>
    )
}