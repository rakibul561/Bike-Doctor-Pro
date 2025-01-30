/* eslint-disable @typescript-eslint/no-explicit-any */
 
  export const getServices = async () =>{
    const res = await fetch('http://localhost:3000/services/api/get-all')
    const data = res.json();
    return data ;
 }
 
  export const getServicesDetails = async (id: any) =>{
    const res = await fetch(`http://localhost:3000/services/api/${id}`)
    const service = res.json();
    return service ;
 }