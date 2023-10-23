import { useState } from "react";
import axios from "axios";
import {
  Grid,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Sidebar = ({ formSubmit }) => {
  const [carData, setCarData] = useState({
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
  });

  const handleTextFieldChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formSubmit(carData);

    // const cellData = Object.entries(carData).map(([, value], index) => {
    //   return {
    //     address: `A${index + 1}`,
    //     value: value,
    //   };
    // });

    // try {
    //   await axios.post("/api/cars", carData);
    //   window.location.href = `/directory?${new URLSearchParams(
    //     carData
    //   ).toString()}`;
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      <Grid item xs={12} sm={12}>
        <Paper
          elevation={3}
          style={{ padding: "6px", marginTop: "6px", minHeight: "400px" }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              label="Назва автомобіля"
              name="carName"
              value={carData.carName}
              onChange={handleTextFieldChange}
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              label="Номерний знак"
              name="licensePlate"
              value={carData.licensePlate}
              onChange={handleTextFieldChange}
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="fuelType"
              value={carData.fuelType}
              onChange={handleTextFieldChange}
              label="Тип палива"
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="fuelConsumption"
              value={carData.fuelConsumption}
              onChange={handleTextFieldChange}
              label="Розхід палива на 100 км"
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="oilType"
              value={carData.oilType}
              onChange={handleTextFieldChange}
              label="Тип мастила"
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="oilConsumption"
              value={carData.oilConsumption}
              onChange={handleTextFieldChange}
              label="Розхід оливи"
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="exploitationGroup"
              value={carData.exploitationGroup}
              onChange={handleTextFieldChange}
              label="Група експлуатації"
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="exploitationGroup2"
              value={carData.exploitationGroup2}
              onChange={handleTextFieldChange}
              label="Група експлуатації2"
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="driver"
              value={carData.driver}
              onChange={handleTextFieldChange}
              label="Водій"
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="driverRank"
              value={carData.driverRank}
              onChange={handleTextFieldChange}
              label="Звання водія"
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="subdivision"
              value={carData.subdivision}
              onChange={handleTextFieldChange}
              label="Підрозділ"
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="senior"
              value={carData.senior}
              onChange={handleTextFieldChange}
              label="Старший"
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              name="seniorRank"
              value={carData.seniorRank}
              onChange={handleTextFieldChange}
              label="Звання старшого"
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
              type="submit"
            >
              Відправити
            </Button>
          </form>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Sidebar;
