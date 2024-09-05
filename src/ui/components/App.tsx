import Home from "@/ui/features/podcasts/views/home";
import { Route, Switch } from "wouter";
import Navbar from "./navbar";

const App = () => (
  <main className="h-dvh w-dvw max-w-screen-xl m-auto p-4">
    <Navbar />
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/podcast/:podcastId">
        {({podcastId}) => <>Hello, {podcastId}!</>}
      </Route>

      <Route path="/podcast/:podcastId/episode/:episodeId">
        {({ podcastId, episodeId }) => <>Wellcome to {podcastId} Episode { episodeId}! </>}
      </Route>

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  </main>
)

export default App
