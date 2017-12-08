import constant from "./constant";

export default function request(urlPath, params) {
    return fetch(constant.baseUrl + urlPath, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: paramsToString(params),
    }).then(
        (response) => {
            console.log("Net--response::")
            return response.json()
        }
    ).catch((error) => {
        // ToastAndroid.showWithGravity(error,ToastAndroid.LONG,ToastAndroid.BOTTOM)
        console.log("Net--error::"+error)
        this.setState({
            state: 2
        })
    });
}

function paramsToString(params) {
    if(params){
        var result;
        params.forEach(function (value, key, map) {
            result = result + key + "=" + value + "&"
        })
        console.log(result)
        return result.substring(0, result.length - 1)
    }
}
