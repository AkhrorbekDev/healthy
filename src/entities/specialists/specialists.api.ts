export const useSpecialistsApi = () => {
  const baseURL = "/specialists"
  const { $http } = useNuxtApp()

  const getSpecialistsList = (params?: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(baseURL, { params })
  }

  const getSpecialistsById = (alias: string): AsyncResponseContainer<any> => {
    return $http.$get(`${baseURL}/${alias}`)
  }

  return {
    getSpecialistsList,
    getSpecialistsById
  }
}
