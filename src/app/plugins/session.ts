export default defineNuxtPlugin(() => {
  const router = useRouter()
  const localePath = useLocalePath()

  const token = useCookie("token")
  const loaded = useState<boolean>("loaded", () => ref(false))
  const loading = useState<boolean>("loading", () => ref(false))
  const profile = useState<ISessionProfile | undefined>("profile", () =>
    ref({
      id: 1,
      name: "Super",
      email: "admin@gmail.com",
      phone: "+998999999999",
      surname: "Admin"
    })
  )

  const loggedIn = computed(() => token.value && profile.value?.id)

  watch(loggedIn, (value) => {
    if (!value) {
      token.value = undefined
      profile.value = undefined
    }
  })

  const clear = () => {
    token.value = undefined
    loading.value = false
    profile.value = undefined
    router.replace(localePath("/auth/sign-in"))
  }

  const session = {
    token,
    loaded,
    loading,
    profile,
    loggedIn,
    clear
  }

  return { provide: { session } }
})
