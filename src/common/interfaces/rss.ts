export interface IRss {
  'atom:link': IAtomLink
  title: string
  pubDate: string
  lastBuildDate: string
  generator: string
  link: string
  language: string
  copyright: string
  docs: string
  managingEditor: string
  'itunes:summary': string
  image: IImage
  'itunes:author': string
  'itunes:category': IItunesCategory
  'itunes:image': IItunesImage
  'itunes:explicit': boolean
  'itunes:owner': IItunesOwner
  description: string
  'itunes:type': string
  'itunes:new-feed-url': string
  'podcast:locked': IPodcastLocked
  item: IEpisode[]
}

export interface IAtomLink {
  _href: string
  _rel: string
  _type: string
}

export interface IImage {
  url: string
  title: string
  link: string
}

export interface IItunesCategory {
  _text: string
}

export interface IItunesImage {
  _href: string
}

export interface IItunesOwner {
  'itunes:name': string
  'itunes:email': string
}

export interface IPodcastLocked {
  '#text': string
  _owner: string
}

export interface IEpisode {
  title: string
  'itunes:title'?: string
  pubDate: string
  guid: IGuid
  link: string
  'itunes:image'?: IItunesImage
  description: string
  'content:encoded': string
  enclosure?: IEnclosure
  'itunes:duration': any
  'itunes:explicit'?: boolean
  'itunes:keywords': string
  'itunes:subtitle': string
  'itunes:episodeType'?: string
  'media:restriction'?: IMediaRestriction
  'itunes:author'?: string
}

export interface IGuid {
  '#text': string
  _isPermaLink: string
}

export interface IEnclosure {
  _length: string
  _type: string
  _url: string
}

export interface IMediaRestriction {
  '#text': string
  _relationship: string
  _type: string
}
