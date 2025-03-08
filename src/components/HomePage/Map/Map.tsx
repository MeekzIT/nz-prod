import React from "react";
import styles from "./Map.module.scss";

const GoogleMap = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.982527013013!2d44.515209!3d40.187202299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd927b80a521%3A0x8c40f4d28a0aaf7a!2smeekz%20IT!5e0!3m2!1sru!2sam!4v1741163069548!5m2!1sru!2sam"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.mapIframe}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
