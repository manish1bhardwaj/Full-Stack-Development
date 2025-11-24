import Header from "../../components/header/Header";
import SideNav from "../../components/sidebar/SideNav";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
        <div id="header-section">
            <Header />
        </div>
        <div className="dashboard-body">
            <div className="sideNav-body"><SideNav /></div>
            <div className="main-section">main content</div>
        </div>
    </div>
  );
}

export default Dashboard;