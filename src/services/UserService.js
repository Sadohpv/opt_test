import axios from "./customAxios";

const fetchAllUser = (page) => {
	return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
	return axios.post(`/api/users`, { name, job });
};

const putEditUser = (name, job,id) => {
	return axios.put(`/api/users/${id}`, { name, job });
};

const deleteUser = (id)=>{
	return axios.delete(`/api/users/${id}`);
}

export { fetchAllUser, postCreateUser, putEditUser,deleteUser};
