import axios from "axios";

const instance = axios.create({
	baseURL: "https://reqres.in",
	headers: {"Access-Control-Allow-Origin": "*"},
	withCredentials: false,
	
});

instance.interceptors.response.use(
	(response) => {
		
		
		//response.headers("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		return response.data ? response.data : response.status;
	},
	(error) => {
		let res={};
		if(error.response){
			res.data = error.response.data;
			res.status = error.response.status;
			res.headers = error.response.headers;
		}else if(error.request){

		}else {
			console.log('Error: ' + error.message);
		}


		return res;
		//return Promise.reject(error);
	}
);

export default instance;
