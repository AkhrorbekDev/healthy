export const useCommonApi = () => {
  const baseURL = "/order"
  const { $http } = useNuxtApp()

  const createOrder = (data: any): AsyncResponseContainer<any> => {
    return $http.$post(baseURL, data)
  }

  return {
    createOrder
  }
}
