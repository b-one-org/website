
const Services = ({title,data}) => {
    return (
      <div className='services-block'>
        <div className='services-section-title'>
          <h2 className='services-title'>{title}</h2>
          <p className='services-text'>
            When you become an Explorer of the Alternative, you can access many things that keep you in mind-body balance and always learning.
          </p>
        </div>
        <div className='services-row'>
          {data
            ? data.map((d, i) => (
                <div  key={`${d.name}-${i}`} className='services-col-md-4'>
                  {" "}
                  <i className={d.icon + ' services-icon'}></i>
                  <div className='services-service-desc'>
                    <h3 className='services-subtitle'>{d.name}</h3>
                    <p className='services-text'>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    );
}

export default Services;