import { apiBase } from "../environments/environment";
import { User } from "../models/User";
import { setItem } from "../services/localstorage.services";
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

export const getDatasBySlug = async (entityName: string, slug: string) =>{
    const url = apiBase + entityName+"/by/slug/" + slug
    const datas = await get(url)
    return datas
}
export const searchDatas = async (entityName : string, query:string, page = 1, limit= 8)=>{
    const url = apiBase + entityName + "/search?" + query + "&pageNumber=" + page + "&pageLimit="+limit
   const datas = await get(url)
   return datas
  
   
}

export const signup = async (user:User)=>{
    const url = apiBase  +"user/signup"
    const datas = await post(url,user)
   return datas
    

}

export const signin = async (user:User)=>{
    const url = apiBase  +"user/signin"
    const datas = await post(url,user)
    if (datas.isSuccess) {
        //auth success
        setItem("auth", {token:datas.token, userId :datas.userId})
        console.log(datas);
        
        
    }
   return datas
    

}