export const useSpecizalizationsApi = () => {
  const baseURL = "/specizalizations"
  const { $http } = useNuxtApp()

  const getSpecizalizationList = (params?: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(baseURL, { params })
  }

  return {
    getSpecizalizationList
  }
}
