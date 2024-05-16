import { Header } from 'components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main><Outlet /></main>

      <footer>2024</footer>
    </>
  )
}

export { Layout };