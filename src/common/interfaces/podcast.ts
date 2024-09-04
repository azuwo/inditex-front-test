interface IAllPodcast {
  podcasts: IFeed[]
}

interface IFeed {
  author: Author
  entry: IEntry[]
  updated: Label
  rights: Label
  title: Label
  icon: Label
  link: Link[]
  id: Label
}

interface IEntry {
  'im:Label': Label
  'im:image': Imimage[]
  summary: Label
  'im:price': Imprice
  'im:contentType': ImcontentType
  rights?: Label
  title: Label
  link: Link
  id: Id
  'im:artist': Imartist
  category: Category
  'im:releaseDate': ImreleaseDate
}

interface ImreleaseDate {
  label: string
  attributes: Label
}

interface Category {
  attributes: {
    'im:id': string
    term: string
    scheme: string
    label: string
  }
}

interface Imartist {
  label: string
  attributes?: { href: string }
}

interface Id {
  label: string
  attributes: { 'im:id': string }
}

interface Link {
  attributes: {
    rel: string
    type: string
    href: string
  }
}

interface ImcontentType {
  attributes: {
    term: string
    label: string
  }
}

interface Imprice {
  label: string
  attributes: {
    amount: string
    currency: string
  }
}

interface Imimage {
  label: string
  attributes: {
    height: string
  }
}

interface Author {
  Label: Label
  uri: Label
}

interface Label {
  label: string
}
