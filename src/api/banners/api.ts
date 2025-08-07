export const useBannerApi = () => {
  const baseURL = "/banner"
  const { $http } = useNuxtApp()

  const getBanner = (params?: Record<string, any>): AsyncResponseContainer<any> => {
    return $http.$get(baseURL, { params })
  }

  return {
    getBanner
  }
}
