
import loadable from '@loadable/component';
import Container from '../components/Container';

import JoinHeaderContent from '../content/join/JoinHeaderContent'
import ExpAProjects from '../content/join/JoinExpAProjects.json'
import ExpAProblems from '../content/join/JoinExpAProblems.json'
import Community from '../content/join/JoinExpACommunity.json'
import Life from '../content/join/JoinExpALove.json'
import Principles from '../content/join/JoinPrinciples.json';
import BenefitsEntrepreneurExpA from '../content/join/JoinBenefitsEntrepreneur.json';
import BenefitsExpA from '../content/join/JoinBenefitsExpA.json';
import ProvocativeEnding from '../content/join/JoinProvocativeMiddleBlock.json'


const Header = loadable(() => import('../components/Header'));
const MiddleBlockButton = loadable(() => import('../components/MiddleBlockButton'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));
const Features = loadable(() => import('../components/Features'));
const Services = loadable(() => import('../components/Services'));


const Join = () => {
  return (
    <>
      <Container>
        <Header
        activateButton={true}
        buttonText={"BECOME A ExpA"}
        btnStyle={'btn--outline'}
        img={'/images/expa-2.jpg'}
        title={"IMPACT"}
        content={JoinHeaderContent}
        />
        <Features
        title={"Principles"}
        data={Principles.Features}
        />
        <ContentBlock
        left={false}
        img={ExpAProjects.img}
        title={ExpAProjects.title}
        content={ExpAProjects.content}
        />
        <Services
        title={"Benefits"}
        data={BenefitsExpA.Services}
        />
        <ContentBlock
        left={true}
        img={ExpAProblems.img}
        title={ExpAProblems.title}
        content={ExpAProblems.content}
        />
        <Features
        title={"We Are Your Vehicle"}
        data={BenefitsEntrepreneurExpA.Features}
        />
        <ContentBlock
        left={true}
        img={Community.img}
        title={Community.title}
        content={Community.content}
        />
        <ContentBlock
        left={false}
        img={Life.img}
        title={Life.title}
        content={Life.content}
        />
        <MiddleBlockButton
        title={ProvocativeEnding.title}
        content={ProvocativeEnding.content}
        buttonText={ProvocativeEnding.buttonText}
        />
      </Container>
    </>
  );
}

export default Join;