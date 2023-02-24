import Axios from "axios"

// eslint-disable-next-line
String.prototype.toCamelCase = function (prop){
	return this.replace(/\w+/g,
        function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});
}

/*FIX CODE NOTHING TO CHANGE (instance)*/
const instance = Axios.create({
	baseURL: 'https://hsi.hakovo.com/Api',
	headers: {
		Accept: "application/json",
		"Access-Control-Allow-Origin": "*"
	}
})


export { instance }