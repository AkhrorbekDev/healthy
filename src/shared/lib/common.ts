import { clone, pickBy } from "lodash-es"

export const cleanParams = (params: Record<string, any>) => {
  const clonedParams = clone(params)

  for (const key in clonedParams) {
    const value = clonedParams[key]
    if (typeof value === "string") {
      const trimmedValue = value.trim()
      clonedParams[key] = trimmedValue.length > 0 ? trimmedValue : null
    }
  }

  return pickBy(clonedParams, (value) => value != undefined)
}

export const transformParams = (cleanedParams: Record<string, any>, transformations: Record<string, Function>) => {
  const transformedParams: Record<string, any> = {}

  for (const [key, transformFn] of Object.entries(transformations)) {
    transformedParams[key] = transformFn(cleanedParams[key], transformedParams)
  }

  return cleanedParams
}

export const disableKeys = (event: KeyboardEvent, keys: string[]) => {
  if (keys.includes(event.key)) event.preventDefault()
}

export const getValue = (obj: Record<string, any>, path: string, locale: string) => {
  if (!obj || !path) return undefined
  return obj[`${path}_${locale}`]
}

export const getUserFullName = (user: Record<string, any>) => {
  if (!user) return ""
  const firstName = user.first_name || ""
  const lastName = user.last_name?.toUpperCase() || ""
  const middleName = user.middle_name?.toUpperCase() || ""

  return [firstName, lastName.charAt(0) + ". ", middleName.charAt(0) + ". "].join(" ").trim()
}
