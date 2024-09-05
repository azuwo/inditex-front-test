import Navbar from '@/ui/components/navbar'
import EpisodeDetail from '@/ui/features/podcasts/views/episode'
import Home from '@/ui/features/podcasts/views/home'
import PodcastDetail from '@/ui/features/podcasts/views/podcast'
import { Route, Switch } from 'wouter'

const App = () => (
  <main className="m-auto h-dvh w-dvw max-w-screen-xl p-4">
    <Navbar />
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/podcast/:podcastId">
        {({ podcastId }) => <PodcastDetail id={podcastId} />}
      </Route>

      <Route path="/podcast/:podcastId/episode/:episodeId">
        {({ episodeId }) => <EpisodeDetail episodeId={episodeId} />}
      </Route>

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  </main>
)

export default App
