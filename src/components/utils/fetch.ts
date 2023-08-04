export async function pokeApi() {
    try {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const response = await data.json();
        console.log(response)
        return response
    } catch (error) {
        console.log('error')
    }
}


/* fetch ('https://pokeapi.co/api/v2/pokemon/')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log('error'))
 */