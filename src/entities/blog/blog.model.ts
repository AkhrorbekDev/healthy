declare global {
  interface IBlog {
    id: number
    title: string
    content: string
    slug: string
    thumbnail: string
    short_description: string
    created_at: string
    author: IAuthor
  }

  interface IAuthor {
    id: number
    full_name: string
  }
}
