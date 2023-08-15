export class ApiHandler {
  static url = "https://dev.api.polygon-nc.com"
  
  static getCategories() {
    fetch(ApiHandler.url + "/products/categories/").then((response) => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json)
    })
  }
}