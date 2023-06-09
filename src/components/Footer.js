import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-5'>
                  PinCode: wm
                </address>
                <a href='tel: +237 678495663' className='mt-4 d-block mb-2 text-white'>
                  +237 678 49 56 63
                </a>
                <a href='mailto: jabaspace@gmail.com' className='mt-4 d-block mb-2 text-white'>
                  jabaspace@gmail.com
                </a>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Policies</h4>
              <div className="footer-link d-flex flex-column">
                <Link className='text-white py-2 mb-1'>Privacy </Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Use Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms</Link>
                <Link className='text-white py-2 mb-1'>Aknowledgments</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Company</h4>
              <div className="footer-link d-flex flex-column">
                <Link className='text-white py-2 mb-1'>Search</Link>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
                <Link className='text-white py-2 mb-1'>Site Chart</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Our App</h4>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()} Powered by Dev Kyan (TheKyan)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
