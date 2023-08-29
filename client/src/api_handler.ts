export class ApiHandler {
  static url = import.meta.env.VITE_API_URL
  
  static async get(path: string) {
    const response = await fetch(ApiHandler.url + path)
    if(response.status > 299 || response.status < 200) {
      return undefined
    }

    const json = await response.json()
    return json
  }

  static async getCategories() {
    return await this.get("/products/categories/")
  }

  static async getProducts(params: URLSearchParams | undefined = undefined) {
    return await this.get("/products" + (params != null ? `?${params.toString()}` : ""))
  }
}