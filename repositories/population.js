import axios from "axios";
//https://datausa.io/api/data?drilldowns=Nation&measures=Population
const SEVER_Name = 'datausa.io'
async function getPopulation({ drilldowns, measures }) {
    //cacsh vieets khac
    const urlGetPopulation = `https://${SEVER_Name}/api/data?drilldowns=${drilldowns}&measures=${measures}`

    try {
        let result = []
        let ResponseData = await axios.get(urlGetPopulation)
        // console.log('haha')
        ResponseData.data.data.forEach(element => {
            let myObj = {}
            myObj.nationId = element['ID Nation']
            myObj.nationName = element['Nation']
            myObj.year = element['Year']
            myObj.population = element['Population']
            result.push(myObj)
        });
        return result
    } catch (error) {
        throw error
    }
}

export default { getPopulation, }
