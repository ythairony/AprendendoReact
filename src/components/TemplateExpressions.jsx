const TemplateExpressions = () => {

    const pessoa = {
        nome: "Alessandro",
        profissao: "Professor",
    }

    return (
        <div>
            <h3>Olá {pessoa.nome}, sua profissão é {pessoa.profissao}</h3>
        </div>
    )
};

export default TemplateExpressions;