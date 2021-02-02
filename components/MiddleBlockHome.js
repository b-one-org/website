
import { Row, Col } from 'antd';

import styles from '../styles/MiddleBlock.module.css'

const MiddleBlockHome = () => {
  return (
    <div className={styles["middle-block"]}>
      <Row type="flex" justify="center" align="middle">
        <div className={styles["content-wrapper"]}>
        <Col lg={24} md={24} sm={24} xs={24}>
            <h6>Who We Are</h6>
            <div className={styles["content"]}>
              <p>We are an organization that seeks to bring together people who share our vision</p>
              <p>with projects that complete <b className="bold-color">the infinite cycle of sustainability</b>.</p>
            </div>
        </Col>
        </div>
      </Row>
    </div>
  );
};

export default MiddleBlockHome;