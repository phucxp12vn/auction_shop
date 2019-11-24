import * as constant from './constant'

const axios = require('axios')

class API {
  constructor(){
    
  }

  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */
  async login(data) {
    let response = await axios.post(constant.loginUrl, data);
    return response
  }
}

export default new API();
