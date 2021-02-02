import styles from '../styles/Services.module.css'

const Services = ({title,data}) => {
    return (
      <div className={styles["services-block"]}>
        <div className={styles["section-title"]}>
          <h2 className={styles["services-title"]}>{title}</h2>
          <p className={styles["services-text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className={styles["row"]}>
          {data
            ? data.map((d, i) => (
                <div  key={`${d.name}-${i}`} className={styles["col-md-4"]}>
                  {" "}
                  <i className={d.icon + styles['services-icon']}></i>
                  <div className={styles["service-desc"]}>
                    <h3 className={styles["services-subtitle"]}>{d.name}</h3>
                    <p className={styles["services-text"]}>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    );
}

export default Services;