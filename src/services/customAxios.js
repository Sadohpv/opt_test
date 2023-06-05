import axios from "axios";

const instance = axios.create({
	baseURL: "https://reqres.in",
	headers: {"Access-Control-Allow-Origin": "*"},
	withCredentials: false,
	
});

instance.interceptors.response.use(
	(response) => {
		
		
		//response.headers("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		return response.data;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
