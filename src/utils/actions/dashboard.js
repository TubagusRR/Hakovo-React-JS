import { instance } from "../index"
import { useMutation } from "react-query"
import { message } from "antd"

/*FIX CODE NOTHING TO CHANGE (requestRecommendations)*/
function requestRecommendations(values) {

	localStorage.setItem("recommendations_data",JSON.stringify({}));

	return instance
		.post("/Recommendation/Find", values)
		.then(({ data }) => {
			const document = data.data?.list;
			localStorage.setItem("recommendations_data", JSON.stringify(document));
			return document;
		})
		.catch((err) => {

			var rest = err && err.response && err.response.data && err.response.data.errorMessage ?
				 {errorMessage : err.response.data.errorMessage}
				:(err && err.response && typeof err.response.statusText != 'undefined' ? 
					 {errorMessage: `${err.response.status} - ${err.response.statusText}`}
					 :{errorMessage:'You need internet connection.'});
						

			console.error({err});
			message.error(rest.errorMessage,5);
		});
}

/*FIX CODE NOTHING TO CHANGE (useRequestRecommendations)*/
export function useRequestRecommendations() {

	const  {mutateAsync, data, status, error, isFetching } = useMutation(requestRecommendations, {
		onSuccess: (data) => {
			if (!data) {
				console.log("transformation result empty.");
				return;
			}
		}
	});

	return [mutateAsync, { data, loading: status === "loading" || isFetching, error }];
}