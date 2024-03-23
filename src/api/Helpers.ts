

export const get = async (url:string, options:any ={})=>{
    try {
         const response = await fetch(url, options)
    if (! response.ok) {
        return{
            isSuccess:false
        }
        
    } 
        return await response.json()

    } catch (error) {
       return {isSuccess:false,
        error}
    }
   

}

export const post = async (url:string, data:any, options:any={})=>{
   
    
    try {
         console.log({data});
        options.method = "POST";
        options.body = JSON.stringify(data)
        options.headers = {
            ...options.headers,
            "Accept":"application/json",
            "Content-Type":"application/json"
        }
         const response = await fetch(url, options)
    if (! response.ok) {
        const error = await response.json()
        return{
             ...error,
            isSuccess:false,
        }
        
    } 
        return await response.json()

    } catch (error) {
       return {isSuccess:false,
        error}
    }
   

}