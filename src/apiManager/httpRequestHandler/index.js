import axios from 'axios'

import { getToken } from '../token/tokenService'

const token = getToken();
const tokenString = { Authorization: `Bearer ${token}` }

export const httpGETRequest = (url, data) => axios.get(url, { params: data })
export const httpPOSTRequest = (url, data) => axios.post(url, data)
export const httpPUTRequest = (url, data) => axios.put(url, data)
export const httpDELETERequest = (url, data) => axios.delete(url, { params: data })

export const httpGETRequestWithToken = (url, data) => axios.get(url, { headers: tokenString, params: data })
export const httpPOSTRequestWithToken = (url, data) => axios.post(url, data, { headers: tokenString })
export const httpPUTRequestWithToken = (url, data) => axios.put(url, data, { headers: tokenString })
export const httpDELETERequestWithToken = (url, data) => axios.delete(url, { headers: tokenString, params: data })

export const httpFileUploadRequest = (url, folder, data) => axios.post(url, data, {
  headers: { 'content-type': 'multipart/form-data' },
  params: { folder: folder }
});