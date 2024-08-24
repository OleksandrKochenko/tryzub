import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from './pages/Home';
import { PhotosPage } from './pages/Photos';
import { EventsPage } from './pages/Events';
import { NotFound } from './pages/NotFound';
import { SingleEventPage } from './pages/SingleEventPage';
import { UnderConstruction } from './elements/UnderConstruction';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/contacts" element={<UnderConstruction />} />
        <Route path="/projects" element={<UnderConstruction />} />
        <Route path="/resources" element={<UnderConstruction />} />
        <Route path="/events/:id" element={<SingleEventPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
