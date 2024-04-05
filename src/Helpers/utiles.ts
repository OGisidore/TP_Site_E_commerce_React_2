import { Meta } from "../models/Meta";
import { Product } from "../models/Products";


export const getMetas =  (metas:Meta[], name:string)=>{
    let value = "";
    const datas = metas.filter((meta)=> meta.name === name)
    if (datas.length) {
        value = datas[0].value
        
    }
    return value

}
export  const validateRegisterForm = (values : any) => {
    const errors : any = {};
    if (!values.fullName) {
      errors.fullName = 'Required';
    } else if (values.fullName.length > 15) {
      errors.fullName = 'Must be 15 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
      } else if (values.password.length > 20) {
      errors.password = 'Must be 20 characters or less';
    }
    
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    }else if(values.confirmPassword !== values.password){
        errors.confirmPassword = 'Password not match';
    }else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
      } else if (values.confirmPassword.length > 20) {
      errors.confirmPassword = 'Must be 20 characters or less';
    }
  
    return errors;
  };
export  const validateAddressForm = (values : any) => {
    const errors : any = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.phone) {
      errors.phone = 'Required';
    } 
    if (!values.city) {
      errors.city = 'Required';
    } 
    if (!values.address_type) {
      errors.address_type = 'Required';
    } 
    if (!values.code_postal) {
      errors.code_postal = 'Required';
    } 

    if (!values.street) {
      errors.street = 'Required';
    }
    if (!values.state) {
      errors.state = 'Required';
    }
  
   
  
    return errors;
  };

  
export  const validateLoginForm = (values : any) => {
  const errors : any = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
      errors.password = 'Must be 6 characters or more';
    } else if (values.password.length > 20) {
    errors.password = 'Must be 20 characters or less';
  }
  return errors;
};

export  const validateSubscribe = (values : any) => {
  const errors : any = {};
  if (!values.fullName) {
    errors.fullName = 'Required';
  } else if (values.fullName.length > 15) {
    errors.fullName = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};




export const loadScript = ()=>{
  console.log("YES");
  
  const firstScript = document.getElementById("firstScript")
  if (!firstScript) {
    const script = document.createElement("script")
    script.src = "/assets/js/scripts.js"
    script.id = "firstScript"
    document.body.appendChild(script)
    
    
  }
}
export const reductionRate = (product : Product)=>{
 let result = 0
 result = (product.regular_price - product.solde_price)*100 / product.regular_price
 return result.toFixed(0)
}

export const formatPrice = (price:number, currency:string = "USD")=>{
  let option = {
    style : "currency",
    currency : currency
  }
  return new Intl.NumberFormat("fr-FR",option).format(price)

}

export const sonnorEffect = (status = "success")=>{
  const audio = document.createElement("audio")
  audio.src = `/assets/audios/${status}.wav`
  audio.play()
}

export const generateID = ()=>{
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(){
    return (Math.random()*16 | 0 ).toString(16)
  }).toLowerCase();
}