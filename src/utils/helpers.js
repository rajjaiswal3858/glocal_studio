export const getApiBaseUrl = () => {
	if (process.env.NODE_ENV === "production") {
		return "https://cms.glocalassist.com/wp-json/wp";
	}

	return "https://cms.glocalassist.com/wp-json/wp";
};
