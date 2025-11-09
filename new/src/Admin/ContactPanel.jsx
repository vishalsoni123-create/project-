import "./admin.css"
export function ContactPanel(){
    return(
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
            <tr>
              <td>Vishal Soni</td>
              <td>vishal@example.com</td>
              <td>8579689588</td>
              <td>Hi</td>
              
            </tr>
            <tr>
              <td>Vishal Soni</td>
              <td>vishal@example.com</td>
                 <td>8579689588</td>
              <td>Hi</td>
            
            </tr>
               <tr>
              <td>Vishal Soni</td>
              <td>vishal@example.com</td>
                 <td>8579689588</td>
              <td>Hi</td>
            </tr>

          </tbody>
        </table>
         </main>
    )
}