import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch } from "react-redux";
import {
  addInteraction,
  updateInteraction,
} from "../redux/interactionSlice";
import api from "../services/api";
import "./InteractionForm.css";

function InteractionForm({editing, onSaved}) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    hcpName: "",
    hospital: "",
    specialty: "",
    product: "",
    interactionType: "",
    date: "",
    notes: "",
  });
  const [snackbar, setSnackbar] = useState({
  open: false,
  message: "",
  severity: "success",
   });
  useEffect(() => {
   }, [form]);
  useEffect(() => {
  if (editing) {

    setForm({
      hcpName: editing.hcp_name,
      hospital: editing.hospital,
      specialty: editing.specialty,
      product: editing.product,
      interactionType: editing.interaction_type,
      date: editing.date,
      notes: editing.notes,
    });

  }

}, [editing]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async () => {
  try {
    const payload = {
      hcp_name: form.hcpName,
      hospital: form.hospital,
      specialty: form.specialty,
      product: form.product,
      interaction_type: form.interactionType,
      date: form.date,
      notes: form.notes,
    };

    let response;

    if (editing) {
      response = await api.put(
        `/interactions/${editing.id}`,
        payload
      );

      setSnackbar({
       open: true,
       message: "Interaction saved successfully",
       severity: "success",
      });
    } else {
      response = await api.post(
        "/interactions/",
        payload
      );

      setSnackbar({
       open: true,
       message: "Interaction saved successfully",
       severity: "success",
      });
    }

    setForm({
      hcpName: "",
      hospital: "",
      specialty: "",
      product: "",
      interactionType: "",
      date: "",
      notes: "",
    });

    if (onSaved) {
      onSaved();
    }

  } catch (error) {
    console.error(error);
    setSnackbar({
      open: true,
      message: "Failed to save interaction",
      severity: "error",
     });
  }
};

  return (
    <Card className="interaction-card" sx={{height: "100%"}}>
      <CardContent sx={{p:4}}>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 3 }}
        >
          <PersonIcon color="primary" />
          <Typography variant="h5" fontWeight="bold">
            Log HCP Interaction
          </Typography>
        </Stack>

        <Grid container spacing={3}>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="HCP Name"
              name="hcpName"
              value={form.hcpName}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Hospital"
              name="hospital"
              value={form.hospital}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Specialty"
              name="specialty"
              value={form.specialty}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              label="Product Discussed"
              name="product"
              value={form.product}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              fullWidth
              label="Interaction Type"
              name="interactionType"
              value={form.interactionType}
              onChange={handleChange}
            >
              <MenuItem value=""><em>Select Interaction Type</em></MenuItem>
              <MenuItem value="Face to Face">Face to Face</MenuItem>
              <MenuItem value="Phone Call">Phone Call</MenuItem>
              <MenuItem value="Video Meeting">Video Meeting</MenuItem>
              <MenuItem value="Email">Email</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
                slotProps={{
                  inputLabel: {
                   shrink: true,
            },
          }}
        />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Interaction Notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              variant="contained"
              disableElevation
              size="large"
              fullWidth
              startIcon={<SaveIcon />}
              onClick={handleSubmit}
              sx={{
                height: 55,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
             {editing ? "Update Interaction" : "Save Interaction"}
            </Button>
          </Grid>

        </Grid>
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

      </CardContent>
    </Card>
  );
}

export default InteractionForm;