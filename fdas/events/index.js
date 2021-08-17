import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAnunturi } from "../../api_utils/dbApi";
import axios from "axios";

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
  const data = await getAnunturi();
  // const { data } = await axios.get(
  //   "https://nextjs-anunturi.vercel.app/api/getAnunt"
  // );

  return {
    props: {
      events: data,
    },
  };
}
