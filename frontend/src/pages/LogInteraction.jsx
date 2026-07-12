import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InteractionForm from "../components/InteractionForm";
import ChatBox from "../components/ChatBox";
import InteractionHistory from "../components/InteractionHistory";
import api from "../services/api";
import { Snackbar, Alert } from "@mui/material";
import "./LogInteraction.css";

function LogInteraction() {

  const [rows, setRows] = useState([]);
  const [editing, setEditing] = useState(null);
  const [snackbar, setSnackbar] = useState({
  open: false,
  message: "",
  severity: "success",
});

  const fetchInteractions = async () => {
    try {
      const res = await api.get("/interactions/");
      setRows(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  const handleEdit = (row) => {
  setEditing(row);

  };

  const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this interaction?"
  );

  if (!confirmDelete) return;

  try {

    await api.delete(`/interactions/${id}`);

    setSnackbar({
  open: true,
  message: "interaction deleted successfully",
  severity: "success",
});

    fetchInteractions();

  } catch (err) {

    console.error(err);

    setSnackbar({
  open: true,
  message: "Failed to delete interaction",
  severity: "error",
});

  }

  };


 useEffect(() => {
  const loadData = async () => {
    await fetchInteractions();
  }; loadData();}, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="log-container">
         <InteractionForm
          editing={editing}
          onSaved={()=>{fetchInteractions();
          setEditing(null);
          }}
         />
          <ChatBox />
        </div>

        <div style={{ padding: "30px" }}>
          <InteractionHistory rows={rows} onEdit={handleEdit} onDelete={handleDelete}/>
        </div>
      </div>
      <Snackbar
  open={snackbar.open}
  autoHideDuration={3000}
  onClose={() =>
    setSnackbar({ ...snackbar, open: false })
  }
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "center",
  }}
>
  <Alert
    severity={snackbar.severity}
    variant="filled"
    sx={{ width: "100%" }}
  >
    {snackbar.message}
  </Alert>
</Snackbar>
    </div>
  );
}

export default LogInteraction;