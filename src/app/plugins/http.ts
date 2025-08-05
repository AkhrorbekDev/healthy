import axios from "axios"
import type { AxiosResponse } from "axios"

const addExtraMethods = (axiosInstance: Record<string, any>) => {
  const methods = ["request", "delete", "get", "head", "options", "post", "put", "patch"]
  const axiosExtra: Record<string, any> = {}

  for (const method of methods) {
    axiosExtra["$" + method] = function (...args: any[]) {
      return this[method](...args).then((res: AxiosResponse) => res && res.data)
    }
  }

  for (const key in axiosExtra) axiosInstance[key] = axiosExtra[key].bind(axiosInstance)
}

export default defineNuxtPlugin(() => {
  const { $i18n, $toast } = useNuxtApp()

  const http = axios.create({ baseURL: "/gateway" })
  addExtraMethods(http)

  http.interceptors.request.use(
    (config) => {
      config.headers = config.headers || {}
      config.headers["Accept-Language"] = $i18n.locale.value

      // const headerToken = config.headers["Authorization"]
      // const token = localStorage.getItem("token")
      // if (!headerToken && token) config.headers["Authorization"] = `Bearer ${token}`

      return config
    },
    (error) => {
      console.error(error)
      return Promise.reject(error)
    }
  )

  http.interceptors.response.use(
    (response) => {
      const { code, description } = response?.data || {}

      if (code && code.toLowerCase() !== "ok") {
        const result = description?.split("_")
        if (result?.length > 1) $toast.error($i18n.t(`messages.error.${description}`))
        else $toast.error(description)
        return Promise.reject(response)
      }

      return response
    },
    (error: any) => {
      const errors = error?.response?.data?.errors
      if (errors?.length) errors?.forEach((message: string) => $toast.error(message))
      return Promise.reject(error.response)
    }
  )

  return { provide: { http } }
})
