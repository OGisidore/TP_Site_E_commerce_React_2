

export const get = async (url:string, header={})=>{
    try {
         const response = await fetch(url, header)
    if (! response.ok) {
        return{
            isSuccess:false
        }
        return await response.json()
    } 
    } catch (error) {
        isSuccess:false
        error
    }
   

}