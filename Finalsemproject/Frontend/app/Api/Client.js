import {create} from 'apisauce'


const apiClient= create({baseURL:"http://172.16.42.27:5000/home"});
export default apiClient;
