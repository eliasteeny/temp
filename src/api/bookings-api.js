import axios from 'axios'


const api = axios.create({
   baseURL: "127.0.0.1:3000/"
})


//Private Functions
const checkResponse = (response) => {
    let stat = response.status

    if(stat===200 ||
       stat===201 ||
       stat===204 ||
       stat===304)
       return {
        state:true,
        data: response.data
       }
    else
       return {
         state:false,
         data: null
        }
}

//********************************
// Public Functions
//********************************

export const getSlotsAPI = async () => {
  const response = await api.get();

   return checkResponse(response)
}

export const bookAppointmentAPI = async ({date}) => {
  const response = await api.put(`book`, {
    date
  });

   return checkResponse(response)
}