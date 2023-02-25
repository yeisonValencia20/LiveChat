
import { People } from './People';

import '../styles/contacts.css';

export const Contacts = ({ users, handleChatSelected }) => {
  return (
    <div id="contactos">
      <People
        users={users}
        handleChatSelected={handleChatSelected}
      />
    </div>
  )
}
