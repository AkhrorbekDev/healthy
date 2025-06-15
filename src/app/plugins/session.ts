export default defineNuxtPlugin(() => {
  const router = useRouter()
  const localePath = useLocalePath()

  const token = localStorage.getItem("token")
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

  const loggedIn = computed(() => token && profile.value?.id)

  watch(loggedIn, (value) => {
    if (!value) {
      localStorage.removeItem("token")
      profile.value = undefined
    }
  })

  const clear = () => {
    localStorage.removeItem("token")
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
