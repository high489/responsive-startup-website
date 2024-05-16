import './index.scss';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';

import { Home, Portfolio, Services, Contact, NotFound } from 'pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
