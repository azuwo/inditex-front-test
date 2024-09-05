import { useBoundStore } from '@/core/zustand/store'
import PodcastCard from '@/ui/components/podcast-card'
import DOMPurify from 'dompurify'

interface IEpisode {
  episodeId: string
}

const EpisodeDetail = ({ episodeId }: IEpisode) => {
  const podcast = useBoundStore((state) => state.podcast)
  const rss = useBoundStore((state) => state.rss)
  const episode = rss.item.find((item) => item.guid['#text'] === episodeId)

  return (
    <main className="flex max-h-[85dvh] justify-between">
      <PodcastCard
        artist={podcast.artistName}
        description={rss.description}
        imageUrl={podcast.artworkUrl600}
        podcastName={podcast.collectionName}
        detailUrl={`/podcast/${podcast.artistId}`}
      />
      <section className="flex h-[50dvh] w-[55dvw] flex-col gap-4 bg-white p-8 shadow-md">
        {episode && (
          <>
            <h2 className="text-2xl font-bold">{episode?.['itunes:title']}</h2>
            {episode.description && (
              <p
                className="text-xs text-[#374151]"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(episode?.description)
                }}
              />
            )}
            {episode.enclosure && (
              <audio controls className="w-full">
                <source
                  src={episode.enclosure._url}
                  type={episode.enclosure._type}
                />
              </audio>
            )}
          </>
        )}
      </section>
    </main>
  )
}

export default EpisodeDetail
