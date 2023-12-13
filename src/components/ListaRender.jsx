import { useState } from "react"

const ListaRender = () => {
    const [list] = useState(["Ana Célia", "Pedro Henrique", "Rômulo Cavalcanti", "Yuri Thairony"]);

    return (
        <div>
            <ul>
                { list.map((item, i) => (
                    
                    <li key={i}>{item}</li>
                    // <li>{item}</li>
                )) }
            </ul>
        </div>
    )
}

export default ListaRender;