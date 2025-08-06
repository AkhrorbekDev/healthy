export const useRegionApi = () => {
  const baseURL = "/regions"
  const { $http } = useNuxtApp()

  const getRegionList = (params?: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(baseURL, { params })
  }

  return {
    getRegionList
  }
}
