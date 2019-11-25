import * as constant from './constant'

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

  async createRoom(data) {
    try {
      let response = await axios.post(constant.createAuctionUrl, data);
      if (response) {
       
      }
      return response;
    } catch (error) {
      return error
    }
  }

  async addProduct(data) {
    try {
      let response = await axios.post(constant.addProductUrl, data);
      if (response) {
       
      }
      return response;
    } catch (error) {
      return error
    }
  }
}

export default new API();
