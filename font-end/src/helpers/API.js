import * as constant from './constant'
import { useCookies } from 'react-cookie';


const axios = require('axios')
class API {
  constructor(){
    
  }

  checkLogin(){
    if (document.cookie === "" || document.cookie.slice(12) === "") {
      return false;
    } 
    return true;
  }

  getCookieToken() {
    return document.cookie.slice(12);
  }

  async login(data) {
    try {
      let response = await axios.post(constant.loginUrl, data);
      if (response) {
        var token = response.data.access_token;
        var exprire_time = response.data.expires_at;
        document.cookie = "tokenAccess = " + token  + ";expires = " + exprire_time;
      }
      return response;
    } catch (error) {
      return error.response;
    }
  }
}

export default new API();
