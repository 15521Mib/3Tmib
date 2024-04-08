function Contanto(){
    return(
        <header>
        <h1> Conta</h1>
        <nav>
            
                <label htmlFor="inputNome">Nome: </label>
                <input type = "text" id = "inputNome"/>
                <label htmlFor="inputEmail">Email: </label>
                <input type = "text" id = "inputEmail"/>
                <label htmlFor="inputMotivo">Motivos: </label>
                <input type = "text" id = "inputMotivo"/>
                <button type="submit">Enviar</button>
            
        </nav>
    </header>
    )
}

export default Contanto