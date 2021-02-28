import React from 'react';
import { Contact, Hero } from './components';

import { mapData } from './data';

const ContactPage = () => (
  <div>
    <Hero />
    <Contact data={mapData} />
  </div>
);

export default ContactPage;
