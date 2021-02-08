import loadable from '@loadable/component';
import Container from '../components/Container';

import AboutUsHeaderContent from '../content/about-us/AboutUsHeaderContent'
import Mision from '../content/about-us/AboutUsMisionMiddleBlock.json'
import MisionContent from '../content/about-us/AboutUsMisionMiddleBlock.js'
import CycleOfSustainability from '../content/about-us/CycleOfSustainability.json'

const Header = loadable(() => import('../components/Header'));
const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));

const About = () => {
  return (
    <>
      <Container>
        <Header
        img={'/images/sunrise-5.jpg'}
        title={"VISION"}
        content={AboutUsHeaderContent}
        />
        <MiddleBlock
        title={Mision.title}
        content={MisionContent}
        />
        <ContentBlock
        left={false}
        img={CycleOfSustainability.img}
        title={CycleOfSustainability.title}
        content={CycleOfSustainability.content}
        />
      </Container>
    </>
  );
}

export default About;