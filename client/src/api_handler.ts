type Response = {
  json: any;
  status: "success" | "failed" | "not_found"
}

export class ApiHandler {
  static url = import.meta.env.VITE_API_URL
  
  static async get(path: string): Promise<Response> {
    try {
      const response = await fetch(ApiHandler.url + path)
      if(!response.ok) {
        if(response.status === 404) {
          return {
            json: undefined,
            status: "not_found"
          }
        }
        return {
          json: undefined,
          status: "failed"
        }
      }
      
      const json = await response.json()
      return {
        json,
        status: "success"
      }
    } catch (error) {
        return {
          json: undefined,
          status: "failed"
        }
    }
  }

  static async getCategories() {
    return await this.get("/products/categories/")
  }

  static async getProducts(params: URLSearchParams | undefined = undefined) {
    return await this.get("/products" + (params != null ? `?${params.toString()}` : ""))
  }
}