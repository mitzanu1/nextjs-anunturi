import EventList from "../components/events/event-list";

const HomePage = (props) => {
  const featuredEvents = props.events;
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-anunturi.vercel.app/api/getAnunt"
  );
  const data = await response.json();
  return {
    props: {
      events: data,
    },
  };
}
