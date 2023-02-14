import { useEffect, useState } from 'react';

import { People } from './People';

import '../styles/contacts.css';

export const Contacts = () => {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    
    // fetch to the DB
    // reponse
    setPeople([
      {
        id: 12356,
        name: 'Lionel Messi'
      }
    ])
  }, []);
  
  return (
    <div id="contactos">
      <People
        people={people}
      />
    </div>
  )
}
