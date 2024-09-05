import DOMPurify from 'dompurify'
import { useLocation } from 'wouter'

export interface IPodcastCard {
  imageUrl: string
  artist: string
  podcastName: string
  description: string
  detailUrl: string
}

const PodcastCard = ({
  artist,
  description,
  imageUrl,
  podcastName,
  detailUrl
}: IPodcastCard) => {
  const descriptonPurified = DOMPurify.sanitize(description)
  const [location, navigate] = useLocation()

  const handleNavigation = () => {
    navigate(detailUrl, { replace: true })
  }

  return (
    <aside className="flex h-fit w-64 flex-col bg-[#ffffff] shadow-xl">
      <figure
        onClick={handleNavigation}
        className="mx-4 flex items-center justify-center border-b py-4"
      >
        <img src={imageUrl} alt="Card Preview" width="auto" height={1} />
      </figure>
      <div
        onClick={handleNavigation}
        className="mx-4 flex flex-col border-b py-4"
      >
        <h5 className="text-base font-bold text-[#374151]">{podcastName}</h5>
        <p className="text-xs text-[#374151]">by {artist}</p>
      </div>
      <div className="mx-4 flex flex-col overflow-y-auto py-4">
        <h5 className="text-base font-bold text-[#374151]">Description</h5>
        <p
          className="text-xs text-[#374151]"
          dangerouslySetInnerHTML={{ __html: descriptonPurified }}
        />
      </div>
    </aside>
  )
}

export default PodcastCard
