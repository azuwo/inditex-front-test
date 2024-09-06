import { IPersistance } from '@/common/interfaces/persistance'
import { isOutdated } from '@/common/utils/utils'
import { useBoundStore } from '@/core/zustand/store'
import PodcastCard from '@/ui/components/podcast-card'
import { useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { Link } from 'wouter'

interface IPodcastDetail {
  id: string
}

const PodcastDetail = ({ id }: IPodcastDetail) => {
  const podcastRestClient = useBoundStore((state) => state.fetchPodcast)
  const episodesRestClient = useBoundStore((state) => state.fetchEpisodes)
  const { podcast, rss } = useBoundStore((state) => state)
  const [value] = useLocalStorage('podcast store', {} as IPersistance)

  useEffect(() => {
    if (
      Object.keys(value.state.podcast).length === 0 ||
      isOutdated(value.state.queryDate)
    ) {
      podcastRestClient(id)
    }
  }, [])

  useEffect(() => {
    if (
      Object.keys(value.state.rss).length === 0 ||
      isOutdated(value.state.queryDate)
    ) {
      episodesRestClient(podcast.feedUrl)
    }
  }, [podcast.feedUrl])

  return (
    <main className="flex max-h-[85dvh] justify-between">
      <PodcastCard
        artist={podcast.artistName}
        description={rss.description}
        imageUrl={podcast.artworkUrl600}
        podcastName={podcast.collectionName}
        detailUrl={`/podcast/${podcast.artistId}`}
      />
      {Object.keys(rss).length !== 0 ? (
        <section className="flex w-[55dvw] flex-col gap-4">
          <header className="p-4 shadow-md">
            <h4 className="text-base font-bold text-[#374151]">
              Episodes: {rss?.item?.length}
            </h4>
          </header>
          <div className="relative overflow-y-auto px-4 pb-4 shadow-md">
            <table className="w-full table-fixed bg-white text-left text-gray-500">
              <thead className="sticky top-0 border-b bg-white">
                <tr className="p-2 pl-4">
                  <td className="w-[60%] p-2 py-1 pl-4">Title</td>
                  <td className="w-[20%] p-2 py-1 pl-4">Date</td>
                  <td className="w-[20%] p-2 py-1 pl-4">Duration</td>
                </tr>
              </thead>
              <tbody className="overflow-y-auto text-start text-sm">
                {rss.item.map((episode) => (
                  <tr
                    className="border-b odd:bg-slate-100"
                    key={episode.guid['#text']}
                  >
                    <td className="p-2 pl-4">
                      <Link
                        to={`/podcast/${podcast.collectionId}/episode/${episode.guid['#text']}`}
                        className="text-blue-500"
                      >
                        {episode.title}
                      </Link>
                    </td>
                    <td className="p-2 pl-4">
                      {Intl.DateTimeFormat(navigator.language, {
                        year: '2-digit',
                        month: '2-digit',
                        day: '2-digit'
                      }).format(new Date(episode.pubDate))}
                    </td>
                    <td className="p-2 pl-4">{episode['itunes:duration']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <></>
      )}
    </main>
  )
}

export default PodcastDetail
