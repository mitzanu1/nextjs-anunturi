import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
import { getEventsData } from "../../firebase/firebase";

const EventDetail = (props) => {
  const router = useRouter();
  const eventId = router.query.eventsId;
  const event = props.events.filter((event) => event.id === eventId)[0];
  const { titlu, date, contact, imagine, detalii, pret, oras } = event;

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={titlu} />
      <EventLogistics
        date={date}
        tel={contact}
        image={imagine}
        imageAlt={titlu}
        price={pret}
        city={oras}
      />
      <EventContent>
        <p>{detalii}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetail;

export async function getStaticPaths() {
  const data = await getEventsData();
  const pathsArr = data.map((item) => ({
    params: { eventsId: item.id },
  }));
  return {
    paths: pathsArr,
    fallback: "blocking",
  };
}

export async function getStaticProps() {
  const data = await getEventsData();
  return {
    props: {
      events: data,
    },
  };
}
