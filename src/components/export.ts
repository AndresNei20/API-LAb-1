
export  async function getData(){
    try {
        const getData = await fetch('https://pokeapi.co/api/v2/pokemon').then(res=>res.json());
        console.log(getData)

    } catch (e){
        console.error (e)
    }
};