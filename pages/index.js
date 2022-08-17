import Layout from "../components/layout/layout";
import EventList from "../components/Events/EventList";
import FilterEvent from "../components/FilterEvent/FilterEvent";

import EventDetail from "../components/EventDetail/EventDetail";

function HomePage() {
  return <Layout>
    {/* <FilterEvent /> */}
    {/* <EventList /> */}
    <EventDetail />
  </Layout>
}

export default HomePage;