 
  export const getServices = async () =>{
    const res = await fetch('http://localhost:3000/services/api/get-all')
    const data = res.json();
    return data ;
 }