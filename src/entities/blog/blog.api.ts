export const useBlogApi = () => {
  const baseURL = "/posts"
  const { $http } = useNuxtApp()

  const getBlogList = (params?: Record<string, any>): AsyncResponseContainer<IBlog[]> => {
    return $http.$get(baseURL, { params })
  }

  const getBlogById = (alias: string): AsyncResponseContainer<IBlog> => {
    return $http.$get(`${baseURL}/${alias}`)
  }

  const getBlogByAuthor = (slug: string, params: Record<string, any>): AsyncResponseContainer<IBlog[]> => {
    return $http.$get(`${baseURL}/specialists/${slug}/posts`, { params })
  }

  return {
    getBlogList,
    getBlogById,
    getBlogByAuthor
  }
}
