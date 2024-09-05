import { useBoundStore } from '@/core/zustand/store'
import CardCast from '@/ui/components/card-cast'
import { useEffect, useId, useState } from 'react'

const Home = () => {
  const restClient = useBoundStore((state) => state.fetchAll)
  const podcastList = useBoundStore((state) => state.podcasts)
  const [filteredList, setFilteredList] = useState(podcastList)
  const [inputFilter, setInputFilter] = useState('')

  useEffect(() => {
    restClient()
  }, [])

  useEffect(() => {
    setFilteredList(podcastList)
  }, [podcastList])

  const filterPodcast = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setInputFilter(value)
    if (value.length > 0) {
      const newList = podcastList.filter((podcast) =>
        podcast['im:artist'].label.toLowerCase().startsWith(value)
      )
      setFilteredList(newList)
    } else {
      setFilteredList(podcastList)
    }
  }

  return (
    <main className="flex flex-col gap-12">
      <div className="flex justify-end gap-2">
        <div className="flex w-fit items-center justify-center rounded-2xl bg-blue-400 px-3">
          {filteredList.length}
        </div>
        <input
          id={useId()}
          value={inputFilter}
          onChange={filterPodcast}
          className="rounded-lg border border-[#cccccc] bg-[#ffffff] px-3 py-1 text-sm font-bold text-[#444444] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#aaaaaa]"
          placeholder="Filter podcast..."
        ></input>
      </div>
      <div className="grid grid-cols-4 justify-items-center gap-y-32 object-center pt-12">
        {filteredList &&
          filteredList.map((podcast) => (
            <CardCast key={podcast.id.label} {...podcast} />
          ))}
      </div>
    </main>
  )
}

export default Home
