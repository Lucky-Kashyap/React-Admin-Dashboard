import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <h1 className="widgetSmTitle">Recently Payments</h1>

      <div className="two-box">
        <div className="box">
        <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="girl-pic"
            className="widgetSmImg"
          />
          <span classsName="widget-date">Mar 9, 2023</span>

<div className="widgetSmUser">
            <span className="widgetSmUsername">Emma Ryan Jr.</span>
            
            <span className='widgetSmUsermoney'>$4,823</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon-done" />
           Done
          </button>
        </div>
        <div className="box">
        <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="girl-profile"
            className="widgetSmImg"
          />
          <span className="widget-date">Mar 2, 2023</span>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Justin Weber</span>
            <span className="widgetSmUsermoney">$3,937</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon-pending" />
            Pending
          </button>
        </div>
      </div>
    </div>
  );
}
