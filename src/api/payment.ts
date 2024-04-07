import { apiBase } from "../environments/environment";
import { post } from "./Helpers";


export const createPaymentIntent = async (paymentMethod : string, data : any) =>{
    const url = apiBase  + "payment/create-" + paymentMethod + "-payment-intent?paymentMethode="+paymentMethod
    const datas = await post(url,data)
   return datas

}