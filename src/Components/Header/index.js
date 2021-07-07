import "./styles.css"

export default function Header(){
    return(
        <header>
            <h1>Clínica Yama</h1>
            <div className="menu">
                <button className="selected">Paciente</button>
                <button>Médicos</button>
                <button>Consultas</button>
                <button>Exames</button>
            </div>
        </header>
    )
}