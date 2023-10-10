import Nav from './Nav';

function Layout({ children }) {
  return (
    <section>
      <Nav />
      {children}
    </section>
  );
}

export default Layout;
