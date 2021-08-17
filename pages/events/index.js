import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getEventsData } from "../../firebase/firebase";
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
  var res = await fetch("https://nextjs-anunturi.vercel.app/api/getAnunt", {
    method: "GET",
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();
  return {
    props: {
      events: data,
    },
  };
}
