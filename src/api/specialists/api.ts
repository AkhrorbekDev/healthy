export const useSpecialistApi = () => {
  const baseURL = "/specialists"
  const { $http } = useNuxtApp()

  const getSpecialistList = (params?: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(baseURL, { params })
  }

  const getSpecialistById = (alias: string): AsyncResponseContainer<any> => {
    return $http.$get(`${baseURL}/${alias}`)
  }

  return {
    getSpecialistList,
    getSpecialistById
  }
}
