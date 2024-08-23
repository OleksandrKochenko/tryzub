import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './pages/Home';
import { PhotosPage } from './pages/Photos';
import { EventsPage } from './pages/Events';
import { ContactsPage } from './pages/Contacts';
import { NotFound } from './pages/NotFound';
import { SingleEventPage } from './pages/SingleEventPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/resources" element={<div>Resources Page</div>} />
        <Route path="/events/:id" element={<SingleEventPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
