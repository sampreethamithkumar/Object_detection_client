import http from "./httpService"

const apiEndPoint = '/api/object_detection';

export async function objectsInImage(id, image) {
    return await http.post(apiEndPoint,{id, image});
}