import { API_URL } from "../../config";
import { store } from "../../redux/store";
import { authHeader } from "./authHeader";

class API {
    constructor(addSlash = true){
        this.addSlash = (addSlash ? '/admin/' : '');
        this.state = store.getState()
        this.api = API_URL
    }

    // fetch
    request = (method, url, data = null, auth = true, success = () => {}, error = () => {}, isFile = false) => {
        let headers = new Headers()
        let parameters = {}
        parameters.method = method

        // set auth header
        if(auth){
            authHeader()
        }

        // form data
        if(data){
            if(data.hasOwnProperty('raw')){
                delete data.raw
                headers.append('Accept', 'application/json')
                headers.append('Content-type', 'application/json')
                parameters.body = JSON.stringify(data)
            } else{
                parameters.body = this.getFormData(data)
            }
        }

        parameters.headers = headers

        // send
        fetch(this.api + this.addSlash + url, parameters).then(res => res.json())
        .then( result => {
            if(result.error === false){
                success(result.data)
            } else{
                error(result.message)
            }
        }, error => {
            error(error)
        })
        .catch(error => {
            error(error)
        })

    }

    getFormData = data => {
        const formData = new FormData()
        if(data){
            for(let key in data){
                if(data.hasOwnProperty(key)){
                    formData.append(key, data[key])
                }
            }
        }
        return formData
    }
}

export default API

/*

usage
// get attributes list
export const getAttributesByBucket = (id1, id2, success = () => { }, error = () => { }) => {
    new Api(true).request("GET", ApiEndPoints.attributesByBucket + '/' + id1 + '/' + id2, null, true, success, error)
}

// delete attribute
export const deleteAttribute = (id, success = () => { }, error = () => { }) => {
    new Api(true).request("DELETE", ApiEndPoints.deleteBucketAttribute + '/' + id, null, true, success, error)
}

// update attribute
export const updateBucket = (data, success = () => { }, error = () => { }) => {
    new Api(true).request("POST", ApiEndPoints.updateBucket, data, true, success, error)
}


*/ 