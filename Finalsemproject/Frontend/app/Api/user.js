import client from '../Api/Client'

const register=(userInfo)=>client.post('/user',userInfo);

export default{register} ;
