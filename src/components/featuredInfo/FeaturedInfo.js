import Chart from "../chart/Chart";
import BoxChart from "../chart/BoxChart";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Team Payments</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">25+</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Salary</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5,839</span>
          <span className="featuredMoneyRate">
            -11% <ArrowDownward className="featuredIcon negative"/> 
          </span>
        </div>
        <BoxChart/>
        <span className="featuredSub">lastweek</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Income statistics</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
          <Chart/>
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">$95.9 </span> Per Month
        <div className="featuredMoneyContainer">
          <h2 className="best-plan">Choose Best Plan For You!</h2>
          
        </div>

        <span className="featuredSub">Details </span>
        <button className="upgrade-btn">Upgrade</button>
      </div>
    </div>
  );
}
