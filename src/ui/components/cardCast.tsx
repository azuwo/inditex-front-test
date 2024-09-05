import { Link } from 'wouter'

const CardCast = (podcast: IEntry) => {
  return (
    <Link
      to={`/podcast/${podcast.id.attributes['im:id']}`}
      className="relative flex w-56 flex-col rounded-2xl bg-[#ffffff] shadow-xl"
    >
      <figure className="absolute top-[-4rem] z-10 self-center">
        <img
          src={podcast['im:image'][2].label}
          alt="Card Preview"
          className="h-36 w-36 overflow-hidden rounded-full"
        />
      </figure>
      <div className="flex flex-col items-center p-4 pt-[40%] text-center">
        <div className="pb-2 text-sm font-bold text-[#374151]">
          {podcast.title.label}
        </div>
        <div className="text-xs text-slate-400">
          {podcast['im:artist'].label}
        </div>
      </div>
    </Link>
  )
}

export default CardCast
