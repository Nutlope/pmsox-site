import React from 'react';
import { Contact, Hero } from './components';
import Calendly from './Calendly';

import { mapData } from './data';

const ContactPage = () => (
  <div>
    <Hero />
    <Contact data={mapData} />
    <Calendly />
  </div>
);

export default ContactPage;
