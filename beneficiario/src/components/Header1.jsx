import logo from './assets/logo.png';
import { LoginButton } from '../Login';

export default function Header1() {
    return (
      <nav className='navbar bg-light mb-4 p-0'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-2' />
              <div className='navbar-brand' href='/'>C. V. A</div>
            </div>
          </a>
          <a className='navbar-brand' href='/'>
            <div className='d-flex'>
              <div>
                <LoginButton/>
              </div>
            </div>
          </a>
        </div>
      </nav>
    );
  }