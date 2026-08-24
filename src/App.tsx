/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { RoomDetails } from './pages/RoomDetails';
import { About } from './pages/About';
import { Amenities } from './pages/Amenities';
import { Gallery } from './pages/Gallery';
import { Location } from './pages/Location';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';
import { BookingConfirmation } from './pages/BookingConfirmation';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<RoomDetails />} />
          <Route path="about" element={<About />} />
          <Route path="amenities" element={<Amenities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="location" element={<Location />} />
          <Route path="contact" element={<Contact />} />
          <Route path="booking" element={<Booking />} />
          <Route path="booking-confirmation" element={<BookingConfirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
