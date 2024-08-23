export interface Article {
  id: number
  attributes: {
    title: string
    description: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    cover: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    category: {
      data: {
        attributes: {
          name: string
          slug: string
        }
      }
    }
    authorsBio: {
      data: {
        attributes: {
          name: string
          avatar: {
            data: {
              attributes: {
                url: string
              }
            }
          }
        }
      }
    }
  }
}
