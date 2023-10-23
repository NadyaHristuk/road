import { Grid, Paper, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit as EditIcon } from "@mui/icons-material";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const initialData = [
  {
    id: 1,
    carName: "Car 1",
    licensePlate: "AA 1234 BB",
    fuelType: "Gasoline",
    fuelConsumption: 8.5,
    oilType: "10W-40",
    oilConsumption: 0.5,
    exploitationGroup: "Group 1",
    exploitationGroup2: "Group 2",
    driver: "John Doe",
    driverRank: "Driver",
    subdivision: "Subdivision 1",
    senior: "Jane Smith",
    seniorRank: "Senior",
  },
  {
    id: 2,
    carName: "Car 2",
    licensePlate: "BC 5678 DE",
    fuelType: "Diesel",
    fuelConsumption: 10.2,
    oilType: "5W-30",
    oilConsumption: 0.3,
    exploitationGroup: "Group 2",
    exploitationGroup2: "Group 1",
    driver: "Jane Smith",
    driverRank: "Senior Driver",
    subdivision: "Subdivision 2",
    senior: "John Doe",
    seniorRank: "Senior",
  },
];

function DirectoryPage(props) {
  const [data, setData] = useState(initialData);

  const handleAddData = (newData) => {
    const id = data.length + 1;
    newData.id = id;
    setData([...data, newData]);
  };

  const handleEdit = (id) => {
    // handle edit logic here

    console.log(`Editing data with id ${id}`);
  };

  const handleDelete = (id) => {
    setData(data.splice(id - 1));
    console.log(`Deleting data with id ${id}`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={2}>
        <Sidebar data={data} formSubmit={handleAddData} />
      </Grid>
      <Grid item xs={12} md={10}>
        <Paper
          elevation={3}
          style={{ padding: "20px", marginTop: "6px", height: "100%" }}
        >
          <Typography variant="h6" gutterBottom>
            Довідник
          </Typography>
          <div className="directory-table-container">
            <table>
              <thead>
                <tr>
                  <th>Назва автомобіля</th>
                  <th>Номерний знак</th>
                  <th>Тип палива</th>
                  <th>Розхід палива на 100 км</th>
                  <th>Тип мастила</th>
                  <th>Розхід оливи</th>
                  <th>Група експлуатації</th>
                  <th>Група експлуатації2</th>
                  <th>Водій</th>
                  <th>Звання водія</th>
                  <th>Підрозділ</th>
                  <th>Старший</th>
                  <th>Звання старшого</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.carName}</td>
                    <td>{item.licensePlate}</td>
                    <td>{item.fuelType}</td>
                    <td>{item.fuelConsumption}</td>
                    <td>{item.oilType}</td>
                    <td>{item.oilConsumption}</td>
                    <td>{item.exploitationGroup}</td>
                    <td>{item.exploitationGroup2}</td>
                    <td>{item.driver}</td>
                    <td>{item.driverRank}</td>
                    <td>{item.subdivision}</td>
                    <td>{item.senior}</td>
                    <td>{item.seniorRank}</td>
                    <td>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                        style={{ marginTop: "20px" }}
                        onClick={() => handleEdit(item.id)}
                      >
                        Редагувати
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        style={{ marginTop: "20px" }}
                        onClick={() => handleDelete(item.id)}
                      >
                        Видалити
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default DirectoryPage;
