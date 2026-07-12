import {useState, useEffect} from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InteractionHistory from "../components/InteractionHistory";
import "./Dashboard.css";


function Dashboard() {
 const [stats, setStats] = useState({
  total: 0,
  today: 0,
  uniqueHcp: 0,
  products: 0,
});
 useEffect(() => {
  fetchStats();
}, []);

const fetchStats = async () => {
  try {
    const res = await api.get("/interactions/");

    const data = res.data;

    const today = new Date().toISOString().split("T")[0];

    setStats({
      total: data.length,
      today: data.filter(item => item.date === today).length,
      uniqueHcp: new Set(data.map(item => item.hcp_name)).size,
      products: new Set(data.map(item => item.product)).size,
    });

  } catch (err) {
    console.error(err);
  }
};
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="dashboard-container">
          <h1>Dashboard</h1>

          <div className="cards">

            <div className="card">
              <h3>Today's Visits</h3>
              <h2>{stats.today}</h2>
            </div>

            <div className="card">
              <h3>Total Interactions</h3>
              <h2>{stats.total}</h2>
            </div>

            <div className="card">
              <h3>Pending Follow-ups</h3>
              <h2>{stats.uniqueHcp}</h2>
            </div>

            <div className="card">
              <h3>Products Discussed</h3>
              <h2>{stats.products}</h2>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;