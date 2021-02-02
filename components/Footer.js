
import Button from './Button';
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button linkTo='/' buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link href='/about' exact>Vision</Link>
            <Link href='/'>Concepts</Link>
          </div>
          <div className='footer-link-items'>
            <h2>ExpA</h2>
            <Link href='/'>Who they are</Link>
            <Link href='/'>Principles</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Connect</h2>
            <Link href='/'>Contact Us</Link>
            <Link href='/'>Instagram</Link>
            <Link href='/'>Youtube</Link>
            <Link href='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section className='footer-social-media'>
        <div className='footer-social-media-wrap'>
          <div className='footer-social-logo'>
            <Link href='/'>
              <img className='footer-social-logo-img' src='logo.svg'/>
            </Link>
          </div>
          <small className='footer-website-rights'>BOne © 2020</small>
          <div className='footer-social-icons'>
            <Link
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <a className='footer-social-icon-link'>
                <i className='fab fa-instagram'/>
              </a>
            </Link>
            <Link
              href='/'
              target='_blank'
              aria-label='Youtube'
            >
              <a className='footer-social-icon-link'>
                <i className='fab fa-youtube'/>
              </a>
            </Link>
            <Link
              href='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <a className='footer-social-icon-link'>
                <i className='fab fa-linkedin-in'/>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
