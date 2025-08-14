import type { RouterConfig } from "@nuxt/schema"
import { createMemoryHistory } from "vue-router"
import { parse, stringify } from "qs"

export default {
  // https://router.vuej"s.org/api/interfaces/routeroptions.html
  parseQuery: parse,
  stringifyQuery: (query) => stringify(query)
} satisfies RouterConfig
