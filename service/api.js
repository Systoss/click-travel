import axios from 'axios'

export default axios.create({
  baseURL: 'http://travel-api.clicksomeone.com',
  timeout: 10601000,
  headers: { 'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*' }
})
