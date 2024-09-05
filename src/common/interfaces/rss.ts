export interface IRss {
  'atom:link': string
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
  'itunes:category': string
  'itunes:image': string
  'itunes:explicit': boolean
  'itunes:owner': ItunesOwner
  description: string
  'itunes:type': string
  'itunes:new-feed-url': string
  'podcast:locked': string
  item: IEpisode[]
}

export interface IImage {
  url: string
  title: string
  link: string
}

export interface ItunesOwner {
  'itunes:name': string
  'itunes:email': string
}

export interface IEpisode {
  title: string
  'itunes:title'?: string
  pubDate: string
  guid: string
  link: string
  'itunes:image'?: string
  description: string
  'content:encoded': string
  enclosure?: string
  'itunes:duration': any
  'itunes:explicit'?: boolean
  'itunes:keywords': string
  'itunes:subtitle': string
  'itunes:episodeType'?: string
  'media:restriction'?: string
  'itunes:author'?: string
}
