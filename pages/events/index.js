import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getEventsData } from "../../firebase/firebase";

const EventsPage = (props) => {
  const allEvents = props.events;
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const data = await getEventsData();
  return {
    props: {
      events: data,
    },
  };
}
