
import CardItem from './CardItem';


const Cards = () => {
  return (
    <div className='cards'>
      <h6 className='cards-h6'>What are you looking for?</h6>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItem
              src='images/img-9.jpg'
              text='Become an Explorer of the Alternative'
              path='/join'
            />
            <CardItem
              src='images/hire-team-4.jpg'
              text='Hire ExpA'
              path='/hire'
            />
            <CardItem
              src='images/problem-2.jpg'
              text='Trust us your problem'
              path='https://airtable.com/shrvo0dz6nvEEXMIl'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
