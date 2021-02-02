import Link from 'next/link'

const CardItem = (props) => {
  return (
    <>
      <li className='cards-item'>
        <Link href={props.path}>
          <a className='cards-item-link'>
            <figure className='cards-item-pic-wrap'>
              <img
                className='cards-item-img'
                alt='Travel Image'
                src={props.src}
              />
            </figure>
            <div className='cards-item-info'>
              <h5 className='cards-item-text'>{props.text}</h5>
            </div>
          </a>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
