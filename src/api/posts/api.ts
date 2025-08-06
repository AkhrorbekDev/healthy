export const usePostApi = () => {
  const baseURL = "/posts"
  const { $http } = useNuxtApp()

  const getPostList = (params: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(baseURL, { params })
  }

  const getPostById = (alias: string): AsyncResponseContainer<any> => {
    return $http.$get(`${baseURL}/${alias}`)
  }

  const getPostMyAuthor = (slug: string, params: Record<string, any>): AsyncResponseContainer<any[]> => {
    return $http.$get(`${baseURL}/specialists/${slug}/posts`, { params })
  }

  return {
    getPostList,
    getPostById,
    getPostMyAuthor
  }
}
