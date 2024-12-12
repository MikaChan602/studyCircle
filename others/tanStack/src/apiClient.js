import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://localhost:8888",
});

// 攔截器
apiClient.interceptors.request.use(async (config) => {
	console.log(config);
	await new Promise((resolve) => setTimeout(resolve, 500));
	return config;
});

export default apiClient;
