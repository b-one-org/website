

const ContentBlock = ({ img, left, title, content}) => {
  return (
    <>
      {left ?
        <div className='content-block-service-container'>
          <div className='content-block-services-card content-block-margin-mobile-bottom'>
            <img className='content-block-services-card-img' src={img}/>
          </div>
          <div className='content-block-service-description'>
            <h3 className='content-block-service-description-h3'>{title}</h3>
            <div className='content-block-service-description-content'>{content}</div>
          </div>
        </div> :
        <div className='content-block-service-container'>
          <div className='content-block-service-description'>
            <h3 className='content-block-service-description-h3'>{title}</h3>
            <div className='content-block-service-description-content'>{content}</div>
          </div>
          <div className='content-block-services-card content-block-margin-mobile-top'>
            <img className='content-block-services-card-img' src={img} />
          </div>
        </div>
      }
    </>
  );
};

export default ContentBlock;