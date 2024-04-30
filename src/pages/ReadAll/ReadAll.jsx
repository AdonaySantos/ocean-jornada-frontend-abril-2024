import  { useEffect, useState} from 'react'
import Card from '../../components/Card/Card'

export default function ReadAll() {
    // const item1 = {
    //   name: 'Rick Sanchez',
    //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    //   tags: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-137']
    // }

    // const item2 = {
    //   name: 'Morty Smith',
    //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    //   tags: ['Status: Vivo']
    // }

    // const item3 = {
    //   name: 'Summer Smith',
    //   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    //   tags: ['Espécie: Humana']
    // }

    // const itens = [item1, item2, item3]

    const [itens, setItens] = useState([])

    const apiUrl = 'https://rickandmortyapi.com/api/character/'

    useEffect(function (){
        async function carregarDados(){
        const response = await fetch(apiUrl)

        const data = await response.json()

        console.log(data)

        const results = data.results
        setItens(results)
        }

        carregarDados()
    }, [])

    return (
        <>
        <div className='cards'>
        {itens.map(function(elemento) {
            return <Card item = {elemento} key={`card_${elemento.id}`} />
        })}
        </div>
        </>
    )
}