export async function getApi(): Promise<Array< { pokemon: string, type: string, other: string }> | undefined> {
    try {

        const datapoke = await fetch("https://pokeapi.co/api/v2");
        const response = await datapoke.json();
        console.log(response)



        return response;

    } catch (error) {
        console.log("no sirve el api")
        

    }}