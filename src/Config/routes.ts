/**
 * @description endpoints base routes
 */

const apiBasePort = process.env.API_BASE_PORT

 const BaseRoutes = {
   products: `${apiBasePort}/products`
 };
 
 /**
  * @example
  * moduleName:{
  *      base:'/serviceName',
  *      operationName: '/',
  * }
  */

 export const ROUTES = {
   products: {
     listProducts: `${BaseRoutes.products}/api/listProducts`,
   },
 };
 