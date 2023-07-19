import {useEffect,useState} from 'react'
import './App.css'
export function App(){
    const [fact , setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
    const CAT_PREFIX_IMG_URL = 'https://cataas.com'

    useEffect(() =>{
        fetch(CAT_ENDPOINT_RANDOM_FACT )
        .then(res=> res.json())
        .then(data => {
            const {fact} = data
            setFact(data.fact)
        

        const firstWord = fact.split(' ')[0]
        console.log(firstWord)
        
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res =>res.json())
        .then(response =>{
            const{ url } = response
            setImageUrl(url)
        })
    })
}, [])



    return (
        <main>
            <h1>Kitty App</h1>
           {fact && <p>{fact}</p>}
           {imageUrl && <img src = {`${CAT_PREFIX_IMG_URL}${imageUrl}`} alt ={"image retrieved from api"}/>}
        </main>
    )
}