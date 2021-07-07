import "./styles.css"

export default function Receitas(props){
    return(
        <div>
            <h2>Receita prescrita:</h2>
            <ul>
                <li>{props.medicamentos[0]}</li>
                <li>{props.medicamentos[1]}</li>
                <li>{props.medicamentos[2]}</li>
            </ul>
        </div>
    )
}