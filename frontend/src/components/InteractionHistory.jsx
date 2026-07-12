import { DataGrid } from "@mui/x-data-grid";
import { Card, CardContent, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function InteractionHistory({ rows, onEdit, onDelete }) {

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "hcp_name", headerName: "HCP Name", width: 180 },
    { field: "hospital", headerName: "Hospital", width: 180 },
    { field: "specialty", headerName: "Specialty", width: 180 },
    { field: "product", headerName: "Product", width: 180 },
    { field: "interaction_type", headerName: "Type", width: 160 },
    { field: "date", headerName: "Date", width: 140 },

    {
      field: "actions",
      headerName: "Actions",
      width: 180,

      renderCell: (params) => (
        <>
          <Button
            size="small"
            color="primary"
            onClick={(event) =>{
               event.stopPropagation(); // Prevent row click event
               onEdit(params.row);}}
          >
            <EditIcon />
          </Button>

          <Button
            size="small"
            color="error"
            onClick={(event) => {
              event.stopPropagation(); // Prevent row click event
              onDelete(params.row.id)}}
          >
            <DeleteIcon />
          </Button>
        </>
      ),
    },
  ];

  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>

        <Typography variant="h5" gutterBottom>
          Interaction History
        </Typography>

        <div style={{ height: 450, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 10, 100]}
            disableRowSelectionOnClick
          />
        </div>

      </CardContent>
    </Card>
  );
}

export default InteractionHistory;