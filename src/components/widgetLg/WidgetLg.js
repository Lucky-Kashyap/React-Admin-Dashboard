import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Transactions</h3>
      <input type='text' placeholder="Search "/>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Reciever</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Type</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="girl-profile-pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          
          <td className="widgetLgDate">Feb 18, 2021</td>
          <td>Salary</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="boy-profile-pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Adrian Daren</span>
          </td>
          <td className="widgetLgDate">Feb 18th, 2021</td>
          <td>Bonus</td>
          <td className="widgetLgAmount">$1465.00</td>

          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="girl-profile-pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Emma Ryan Jr.</span>
          </td>
          <td className="widgetLgDate">June 2nd 2021</td>
          <td>Salary</td>
          <td className="widgetLgAmount">$1073.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.unsplash.com/photo-1536087785043-34ac3b6dfdff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="girl-profile-pic"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Roxanne Hills</span>
          </td>

          <td className="widgetLgDate">Apr 13th 2022</td>
          <td>Salary</td>
          <td className="widgetLgAmount">$2790.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
