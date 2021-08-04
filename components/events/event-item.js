import React from "react";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import CurrencyIcon from "../icons/currency-icon";
import PhoneIcon from "../icons/phone-icon";

const EventItem = (props) => {
  const { name, image, date, location, id, price, tel } = props;

  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={image} alt={name} />
      <div className={classes.content}>
        <div className={classes.sumary}>
          <h2>{name}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{date}</time>
          </div>
          <div className={classes.tel}>
            <PhoneIcon />
            <address>{tel}</address>
          </div>
          <div className={classes.city}>
            <AddressIcon />
            <address>{location}</address>
          </div>
          <div className={classes.price}>
            <CurrencyIcon />
            <h4>{price} RON</h4>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Detalii Anunt</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
