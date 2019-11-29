//Default backend server
export const API_SERVER = "http://127.0.0.1:8000/api/user";

//Url login api
export const loginUrl = API_SERVER + "/login";

//Url auction api
export const createAuctionUrl = API_SERVER + "/createAuction";
export const getAuctionsApproved = API_SERVER + "/getAllAuction";
export const getAuctionsInfo = API_SERVER + "/getSingleAuction";

//Url product api
export const addProductUrl = API_SERVER + "/createProduct";
export const getProductInfo = API_SERVER + "/getProduct";
export const getProductBelongToAuction = API_SERVER + "/getProductBelongToAuction";


