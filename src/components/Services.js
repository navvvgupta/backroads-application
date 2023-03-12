import React from 'react'
import { serviceData } from '../data'

export const Services = () => {
  return (
    <section className="section services" id="services">
 <div className="section-title">
      <h2>our <span>services</span></h2>
    </div>

    <div className="section-center services-center">

    {
      serviceData.map((service)=>{
        return(
          <article className="service" key={service.id}>
        <span className="service-icon"><i className={service.serviceIcon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{service.serviceTitle}</h4>
          <p className="service-text">
           {service.serviceText}
          </p>
        </div>
      </article>
        )
      })
    }
    </div>
  </section>
  )
}
export default Services