import Title from "./components/Title.jsx";
import Button from "./components/Button.jsx";

function App(){
    function cliqueDoBotao(){
        alert("Botao clicado")
    }
    function cliqueDoBotao2(){
        console.log("Botao2 clicado")
    }

    return(
        <>
            <Title text="Titulo1"/>
            <Button label="Clique aqui" onClick={cliqueDoBotao}/>
            <Button label="Clique aqui também" onClick={cliqueDoBotao2}/>
        </>
    )
}

export default App