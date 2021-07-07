import "./styles.css"

export default function Header(){
    return(
        <header>
            <h1>Nome da clínica</h1>
            <div className="menu">
                <h2>Paciente</h2>
                <h2>Médicos</h2>
                <h2>Consultas</h2>
                <h2>Exames</h2>
            </div>
        </header>
    )
}