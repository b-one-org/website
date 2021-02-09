
import loadable from '@loadable/component';
import Container from '../components/Container';

import JoinHeaderContent from '../content/join/JoinHeaderContent'
import ExpAProjects from '../content/join/JoinExpAProjects.json'
import ExpAProblems from '../content/join/JoinExpAProblems.json'
import Community from '../content/join/JoinExpACommunity.json'
import Principles from '../content/join/JoinPrinciples.json';
import BenefitsEntrepreneurExpA from '../content/join/JoinBenefitsEntrepreneur.json';
import BenefitsExpA from '../content/join/JoinBenefitsExpA.json';
import ProvocativeEnding from '../content/join/JoinProvocativeMiddleBlock.json'


const Header = loadable(() => import('../components/Header'));
const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));
const Features = loadable(() => import('../components/Features'));
const Services = loadable(() => import('../components/Services'));


const Challenges = () => {
  return (
    <>
      <Container>
        <h3 className='projects'>We are working on this...</h3>;
      </Container>
    </>
  );
}

export default Challenges;