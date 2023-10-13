import Logo from '../assets/img/logo-bg.png';

function Nav() {
  return (
    <header id="header">
      <div className="container">
        <img src={Logo} alt="logo" className="logo" />
        <div className="flex items-center">
          <a className="text-white min-w-[50px] font-medium" href="#">
            Home
          </a>
          <button className="log-btn btn">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Nav;