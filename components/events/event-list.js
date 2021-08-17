import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const items = props.items || [];
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        const { contact, _id, price, title, image, createdAt, city } = event;
        const date = new Date(createdAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });

        return (
          <EventItem
            key={_id}
            id={_id}
            name={title}
            location={city}
            price={price}
            image={image}
            date={date}
            tel={contact}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
