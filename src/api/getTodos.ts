
import axios from 'axios'

export const getTodos = async()=>{

    try{
        const {data} = await axios.get('http://localhost:3001/todos')

        return data

    }catch(e){

        console.log(e);
        

    }

}