
const Features = ({title,data}) => {
    return (
      <div className='features-block'>
        <div className='features-col-md-10 features-col-md-offset-1'>
          <h2 className='features-title'>{title}</h2>
        </div>
        <div className='features-row'>
          {data
            ? data.map((d,i) => (
                <div  key={`${d.title}-${i}`} className='features-col-xs-6 features-col-md-3'>
                  {' '}
                  <i className={d.icon + ' features-icon'}></i>
                  <h3 className='features-subtitle'>{d.title}</h3>
                  <p className='features-text'>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    );
}

export default Features;