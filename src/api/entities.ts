import { apiBase } from "../environments/environment";
import { User } from "../models/User";
import { get, post } from "./Helpers"



export const getData = async (entityName : string)=>{
    const url = apiBase + entityName
   const datas = await get(url)
   return datas
  
   
}

export const getDataByPage = async (entityName : string, page = 1, limit=5)=>{
    const url = apiBase + entityName +"/by/page" + "?pageNumber=" + page + "&pageLimit="+limit
   const datas = await get(url)
   return datas
  
   
}

export const signup = async (user:User)=>{
    const url = apiBase  +"user/signup"
    const datas = await post(url,user)
   return datas
    

}