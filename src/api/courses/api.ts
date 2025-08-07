export const useCoursesApi = () => {
  const baseURL = "/courses"
  const { $http } = useNuxtApp()

  const getCoursesList = (params?: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(baseURL, { params })
  }

  const getCoursesById = (alias: string): AsyncResponseContainer<any> => {
    return $http.$get(`${baseURL}/${alias}`)
  }

  return {
    getCoursesList,
    getCoursesById
  }
}
