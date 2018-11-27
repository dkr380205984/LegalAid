import http from '@/plugins/axios.js'
const baseUrl = ''
export const test = (params) => http.get(`${baseUrl}/123`, params)
