import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import CurrencyIcon from "../icons/currency-icon";
import PhoneIcon from "../icons/phone-icon";

function EventLogistics(props) {
  const { date, tel, city, image, imageAlt, price } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // const addressText = address ? address.replace(", ", "\n") : "";
  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={PhoneIcon}>
          <address>{tel}</address>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{city}</address>
        </LogisticsItem>
        <LogisticsItem icon={CurrencyIcon}>
          <>{price} RON</>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
