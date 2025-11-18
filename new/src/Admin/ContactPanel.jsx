import { useEffect, useState } from "react";
import "./admin.css";

export function ContactPanel() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    fetch("http://localhost/techhub/backend/getcontact.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setContacts(data.data);
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  return (
    <main className="main-content">
      <h2>Contact Details</h2>

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
              <td colSpan="4" style={{ textAlign: "center" }}>
                No contact details found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}

export default ContactPanel;
