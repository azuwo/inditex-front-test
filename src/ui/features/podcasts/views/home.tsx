import { useBoundStore } from '@/core/zustand/store'
import { useEffect } from 'react'

const Home = () => {
  const restClient = useBoundStore((state) => state.fetchAll)
  const podcastList = useBoundStore((state) => state.podcasts)

  useEffect(() => {
    restClient()
  }, [])

  return (
    <main>
      <h1>Home Page</h1>
      <h2>{podcastList.length}</h2>
      {podcastList &&
        podcastList.map((podcast) => <h3>{podcast.title.label}</h3>)}
    </main>
  )
}

export default Home
