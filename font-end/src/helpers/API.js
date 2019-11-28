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
      var token = document.cookie.slice(12);
      let response = await axios.post(constant.createAuctionUrl, data, {
          headers: {
              'authorization': "Bearer " + token,
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
          }
        });

      return response;
    } catch (error) {
      return error
    }
  }

  async addProduct(data) {
    try {
      var token = document.cookie.slice(12);
      let response = await axios.post(constant.addProductUrl, data, {
          headers: {
              'authorization': "Bearer " + token,
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
          }
        });

      return response;
    } catch (error) {
      return error
    }
  }

  async getAuctionsApproved() {
    try {
      var token = document.cookie.slice(12);
      let response = await axios.get(constant.getAuctionsApproved, {
          headers: {
              'authorization': "Bearer " + token,
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
          }
        });

      return response;
    } catch (error) {
      return error
    }
  }
}

export default new API();
