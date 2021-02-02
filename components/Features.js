import styles from '../styles/Features.module.css'

const Features = ({title,data}) => {
    return (
      <div className={styles["features-block"]}>
        <div className={styles["col-md-10 ","col-md-offset-1"]}>
          <h2 className={styles["features-title"]}>{title}</h2>
        </div>
        <div className={styles["row"]}>
          {data
            ? data.map((d,i) => (
                <div  key={`${d.title}-${i}`} className={styles["col-xs-6", "col-md-3"]}>
                  {" "}
                  <i className={d.icon + styles['features-icon']}></i>
                  <h3 className={styles["features-subtitle"]}>{d.title}</h3>
                  <p className={styles["features-text"]}>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    );
}

export default Features;