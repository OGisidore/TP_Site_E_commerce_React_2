import { get } from "./Helpers"



export const getData = async (entityName : string)=>{
    const url = "http://localhost:5000/"+entityName
    const datas = await get(url)
   console.log(datas);
   
}