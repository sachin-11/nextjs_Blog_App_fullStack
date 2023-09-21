import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {/* {item.img && ( */}
        <div className={styles.imageContainer}>
          <Image  alt="" fill className={styles.image} />
        </div>
      {/* )} */}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {/* {item.createdAt.substring(0, 10)} -{" "} */}
          </span>
          <span className={styles.category}></span>
        </div>
        <Link href="/">
          <h1></h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc}/>
        <Link href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;