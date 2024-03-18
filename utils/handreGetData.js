
export const getData = async() => {
    try {
        const data = await fetch('https://rickandmortyapi.com/api/character')
        if (data.status===200){
            const data2 = await data.json()
            return data2.results
        } 
        
    } catch (error) {
        console.log('Get Data Error')
    }
} 