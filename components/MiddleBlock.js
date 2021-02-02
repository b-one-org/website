
import { Row, Col } from 'antd';

import styles from '../styles/MiddleBlock.module.css'

import ColoredLine from './ColoredLine'

const MiddleBlock = ({ title, content}) => {
  return (
    <div className={styles["middle-block"]}>
      <Row type="flex" justify="center" align="middle">
        <div className={styles["content-wrapper"]}>
          <Col lg={24} md={24} sm={24} xs={24}>
              <h6 className={styles["middle-block-title"]}>{title}</h6>
              {/*<ColoredLine className="line" color="#02af64"/>*/}
              <div className={styles["content"]}>{content}</div>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default MiddleBlock;