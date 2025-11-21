import React, { useEffect, useState } from 'react';
import './Users.css';

const Users = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/techhub/backend/getcontact.php')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setContacts(data.data);
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching contacts:', error);
      });
  }, []);

  return (
    <div className="users-container">
      {/* Main Content */}
      <main className="main-content">
        <h2 className="section-title">Contact Details</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data">No contact details found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Users;
