import { useState, useEffect } from 'react';
import Button from './Button';
import Link from 'next/link'


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', showButton);
  }

  return (
    <>
      <nav className='navbar'>
        <Link href='/' onClick={closeMobileMenu}>
          <a className='navbar-logo'>
            <img className='navbar-logo-img' src='logo.svg'/>
          </a>
        </Link>
        <div className='navbar-container'>
          <div className='navbar-menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'navbar-nav-menu active' : 'navbar-nav-menu'}>
            <li className='navbar-nav-item'>
              <Link href='/about' onClick={closeMobileMenu}>
                <a className='navbar-nav-links'>About Us</a>
              </Link>
            </li>
            <li className='navbar-nav-item'>
              <Link
                href='/hire'
                onClick={closeMobileMenu}
              >
                <a className='navbar-nav-links'>Hire</a>
              </Link>
            </li>
            <li className='navbar-nav-item'>
              <Link
                href="https://www.notion.so/boneorg/Job-Board-2b1cd9bc860b442aa4f92f332891ae29"
                onClick={closeMobileMenu}
              >
                <a className='navbar-nav-links'>Projects</a>
              </Link>
            </li>
            <li className='navbar-nav-item'>
              <Link
                href='https://www.notion.so/boneorg/Challenge-e8a10a70b85e413fba5c721c34695e91'
                onClick={closeMobileMenu}
              >
                <a className='navbar-nav-links'>Challenges</a>
              </Link>
            </li>
            <li>
              <Link
                href='/join'
                className='navbar-nav-links-mobile'
                onClick={closeMobileMenu}
              >
                <a className='navbar-nav-links-mobile'>JOIN</a>
              </Link>
            </li>
          </ul>
          {button && <Button linkTo="/join" buttonStyle='btn--outline'>JOIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
