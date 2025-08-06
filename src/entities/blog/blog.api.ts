export const useBlogApi = () => {
  const baseURL = "/posts"
  const { $http } = useNuxtApp()

  const getBlogList = (params?: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(baseURL, { params })
  }

  const getBlogById = (alias: string): AsyncResponseContainer<any> => {
    return $http.$get(`${baseURL}/${alias}`)
  }

  const getBlogMyAuthor = (slug: string, params: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(`${baseURL}/specialists/${slug}/posts`, { params })
  }

  return {
    getBlogList,
    getBlogById,
    getBlogMyAuthor
  }
}
