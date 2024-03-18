
export const getData = async() => {
    try {
        const dataObject = await fetch('https://rickandmortyapi.com/api/character')
        if (dataObject.status===200){
            const data = await dataObject.json()
            return data.results
        } 
        
    } catch (error) {
        console.log('Get Data Error')
    }
} 