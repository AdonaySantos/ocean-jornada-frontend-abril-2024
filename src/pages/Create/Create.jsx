import { Link, useNavigate } from "react-router-dom";

export default function Create() {
    const naviate = useNavigate()

    async function onSubmit(event) {
        event.preventDefault()
        
        //previne que o form saia da paina
        const name = event.target.name.value 
        const image = event.target.image.value 
        
        // Monta um objeto com os dados da personagem
        const data = {
            name,
            image
        }
        
        // Transforma um objeto em uma string JSON
        const json = JSON.stringify(data)
        
        // Declara a URL da API para realização do POST
        const apiUrl = 'https://ocean-jornada-backend-abril-2024.onrender.com/item'
        
        // Cria e executa a requisição HTTP para o endpoint POST
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })

        // Redireciona, navega para a página principal
        return navigate('/')
    }
    return (
        <>
            <div className="header">
            <Link to ="/">Home</Link>
            </div>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Nome:</label>
                    <br />
                    <input type="text" id="name" name="name" placeholder="Digite o nome"></input>
                    <br />
                    <br />
                    <label htmlFor="image">Image:</label>
                    <br />
                    <input type="text" id="image" name="image" placeholder="Digite a URL da imagem"></input>
                    <br />
                    <br />
                    <input type="submit" value="Criar" />
                </form>
            </div>
        </>
    )
  }