import { Link } from "react-router-dom";

export default function Create() {
    function onSubmit(event) {
        event.preventDefault()

        const name = event.target.name.value 
        const image = event.target.image.value 

        const data = {
            name,
            image
        }

        const json = JSON.stringify(data)

        console.log(data, json)

        
    }
    return (
        <>
            <Link to ="/">Home</Link>
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o nome"></input>
                    <br />

                    <label htmlFor="name">Image:</label>
                    <input type="text" id="image" name="image" placeholder="Digite a URL da imagem"></input>
                    <br />

                    <input type="submit" value="Criar" />
                </form>
            </div>
        </>
    )
  }