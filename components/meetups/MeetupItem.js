import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const MeetupItem = (props) => {
  const router = useRouter();
  const handleShowDetails = () => {
    router.push("/" + props.id);
  };
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={styles.actions}>
          <button onClick={handleShowDetails}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
