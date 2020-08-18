import React from 'react'
import { Container } from '@material-ui/core'
import './IconBar.scss'

function IconBar() {
    return (
        
        <div>
          <div className=" mail pt-3 px-0 d-flex align-items-center">

              <div className="col-md-6 col-lg-7 text-center text-md-left p-0 mb-4 mb-md-0">
                <a className='text-grey' href="mailto:info@shopy.com " ><i className="far fa-envelope text-grey"></i> info@shopy.com</a>
                <a className='text-grey' href="tel:+3805555555555"><i className="fas fa-phone text-black"></i> 55-5-55-555</a>
            </div>
             
              <div className="col-md-6 col-lg-5 text-center text-md-right">
            
               
                <a className="fb-ic">
                  <i className="fab fa-facebook-f white-text mr-4"> </i>
                </a>
                
                <a className="tw-ic">
                  <i className="fab fa-twitter white-text mr-4"> </i>
                </a>
              
                <a className="gplus-ic">
                  <i className="fab fa-google-plus-g white-text mr-4"> </i>
                </a>
               
                <a className="li-ic">
                  <i className="fab fa-linkedin-in white-text mr-4"> </i>
                </a>
             
                <a className="ins-ic">
                  <i className="fab fa-instagram white-text"> </i>
                </a>
            
              </div>
          </div>

        <hr></hr>  
      </div>
    )
}

export default IconBar
