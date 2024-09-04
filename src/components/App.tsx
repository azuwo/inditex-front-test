import { useBoundStore } from "@/core/zustand/store"
import { useEffect } from "react"

const App = () => {
  const restClient = useBoundStore((state) => state)

  useEffect(() => {
    restClient.fetchAll();
    restClient.fetchPodcast('1535809341');
    restClient.fetchEpisodes('https://jbpod.libsyn.com/applepodcast')
  }, [])

  return <div className="flex justify-center bg-gray-300">Hello, world</div>
}

export default App
