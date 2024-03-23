

export const apiURl = ()=>{
    if (process.env.NODE_ENV === "development") {
        return " http://localhost:5000/"
        
    }else{
        return "https://api.jstore.fr"
    }
}


export const apiBase = apiURl()