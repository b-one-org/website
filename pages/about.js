import loadable from '@loadable/component';
import Container from '../components/Container';

import AboutUsHeaderContent from '../content/about-us/AboutUsHeaderContent'
import Mision from '../content/about-us/AboutUsMisionMiddleBlock.json'
import MisionContent from '../content/about-us/AboutUsMisionMiddleBlock.js'
import North from '../content/about-us/North.json'
import Culture from '../content/about-us/Culture.json'
import Community from '../content/about-us/GlobalCommunity.json'
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
        left={true}
        img={Culture.img}
        title={Culture.title}
        content={Culture.content}
        />
        <ContentBlock
        left={false}
        img={Community.img}
        title={Community.title}
        content={Community.content}
        />
        <MiddleBlock
        title={North.title}
        content={North.content}
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