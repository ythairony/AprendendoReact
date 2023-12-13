const Events = () => {

    const handleMeuEvento = (e) => {
        console.log(e); // Os dados que o evento contém
        console.log("Ativou o evento!");
    };

    const renderAlgumaCoisa = (x) =>{
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando nada</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMeuEvento}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
            {renderAlgumaCoisa(true)}
            {renderAlgumaCoisa(false)}
        </div>
    )

}

export default Events;