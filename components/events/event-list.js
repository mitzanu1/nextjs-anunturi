import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        const { contact, id, pret, titlu, imagine, date, oras } = event;
        return (
          <EventItem
            key={id}
            id={id}
            name={titlu}
            location={oras}
            price={pret}
            image={imagine}
            date={date}
            tel={contact}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
