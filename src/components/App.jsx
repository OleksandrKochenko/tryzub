import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './pages/Home';
import { PhotosPage } from './pages/Photos';
import { EventsPage } from './pages/Events';
import { ContactsPage } from './pages/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/photos" element={<PhotosPage />} />
      </Route>
    </Routes>
  );
};
