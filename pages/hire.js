
import loadable from '@loadable/component';
import Container from '../components/Container';

import HireHeaderContent from '../content/hire/HireHeaderContent'
import HireExpAIndividually from '../content/hire/HireExpAIndividually.json'
import HireExpATeam from '../content/hire/HireExpATeam.json'
//import AboutExpA from '../content/hire/AboutExpA.json'
import AboutExpAContent from '../content/hire/AboutExpA.js'
import HireRemoteOnsite from '../content/hire/HireRemoteOnsite.json'
import ExpASkills from '../content/hire/HireExpASkills.json'
import ExpAMotivated from '../content/hire/HireExpAMotivated.json'
import PartnerBenefits from '../content/hire/HirePartnerBenefits.json';
import ProvocativeEnding from '../content/hire/HireProvocativeMiddleBlock.json'


const Header = loadable(() => import('../components/Header'));
const MiddleBlockButton = loadable(() => import('../components/MiddleBlockButton'));
const MiddleBlock = loadable(() => import('../components/MiddleBlock'));
const ContentBlock = loadable(() => import('../components/ContentBlock'));
const Features = loadable(() => import('../components/Features'));


const Hire = () => {
  return (
    <>
      <Container>
      <Header
        activateButton={true}
        buttonText={"HIRE ExpA"}
        btnStyle={'btn--outline'}
        img={'/images/header-hire.jpg'}
        title={"IMPULSE"}
        content={HireHeaderContent}
        buttonLink={"https://airtable.com/shrRYInHwVlgOx1o8"}
        />
        <MiddleBlock
        title={"Who They Are"}
        content={AboutExpAContent}
        />
        <Features
        title={"Partner Benefits"}
        data={PartnerBenefits.Features}
        />
        <ContentBlock
        left={false}
        img={HireExpAIndividually.img}
        title={HireExpAIndividually.title}
        content={HireExpAIndividually.content}
        />
        <ContentBlock
        left={true}
        img={HireExpATeam.img}
        title={HireExpATeam.title}
        content={HireExpATeam.content}
        />
        <MiddleBlock
        title={HireRemoteOnsite.title}
        content={HireRemoteOnsite.content}
        />
        <ContentBlock
        left={true}
        img={ExpASkills.img}
        title={ExpASkills.title}
        content={ExpASkills.content}
        />
        <ContentBlock
        left={false}
        img={ExpAMotivated.img}
        title={ExpAMotivated.title}
        content={ExpAMotivated.content}
        />
        <MiddleBlockButton
        title={ProvocativeEnding.title}
        content={ProvocativeEnding.content}
        buttonText={ProvocativeEnding.buttonText}
        buttonLink={"https://airtable.com/shrRYInHwVlgOx1o8"}
        />
      </Container>
    </>
  );
}

export default Hire;