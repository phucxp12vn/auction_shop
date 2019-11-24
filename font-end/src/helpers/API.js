const axios = require('axios')

class API {
  constructor(){
    
  }

  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */
  async login(data) {
    let response = await axios.post('http://127.0.0.1:8000/api/user/login', data);
    return response
  }
}

export default new API();
