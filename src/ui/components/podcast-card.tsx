import DOMPurify from 'dompurify'

export interface IPodcastCard {
  imageUrl: string
  artist: string
  podcastName: string
  description: string
}

const PodcastCard = ({
  artist,
  description,
  imageUrl,
  podcastName
}: IPodcastCard) => {
  const descriptonPurified = DOMPurify.sanitize(description)

  return (
    <aside className="flex h-fit w-64 flex-col bg-[#ffffff] shadow-xl">
      <figure className="mx-4 flex items-center justify-center border-b py-4">
        <img src={imageUrl} alt="Card Preview" width="auto" height={1} />
      </figure>
      <div className="mx-4 flex flex-col border-b py-4">
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
