mport React, { useState } from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
} from "@material-ui/core";

function RoadListPage() {
  const [formData, setFormData] = useState({
    route: "",
    date: "",
    kmDeparture: "",
    kmArrival: "",
    motoHoursTotal: "",
    motoHoursIdle: "",
    motoHoursOnRoute: "",
    workDone: "",
    speedometerReading: "",
    driverRank: "",
    driverSignature: "",
  });

  const [tableData, setTableData] = useState([]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    setTableData((prevTableData) => [...prevTableData, formData]);
    setFormData({
      route: "",
      date: "",
      kmDeparture: "",
      kmArrival: "",
      motoHoursTotal: "",
      motoHoursIdle: "",
      motoHoursOnRoute: "",
      workDone: "",
      speedometerReading: "",
      driverRank: "",
      driverSignature: "",
    });
  };

  return (
    <Grid container spacing={3}>
      {/* Форма */}
      <Grid item xs={3}>
        <Paper style={{ padding: "20px" }}>
          <TextField
            label="Маршрут руху (звідки, куди)"
            variant="outlined"
            style={{ margin: 5 }}
            name="route"
            value={formData.route}
            onChange={handleFormChange}
          />
          <TextField
            label="Дата і час (години, хвилини)"
            variant="outlined"
            style={{ margin: 5 }}
            name="date"
            value={formData.date}
            onChange={handleFormChange}
          />
          <TextField
            label="Пройдено кілометрів (вибуття)"
            variant="outlined"
            style={{ margin: 5 }}
            name="kmDeparture"
            value={formData.kmDeparture}
            onChange={handleFormChange}
          />
          <TextField
            label="Пройдено кілометрів (прибуття)"
            variant="outlined"
            style={{ margin: 5 }}
            name="kmArrival"
            value={formData.kmArrival}
            onChange={handleFormChange}
          />
          <TextField
            label="Відпрацьовано мотогодин (усього)"
            variant="outlined"
            style={{ margin: 5 }}
            name="motoHoursTotal"
            value={formData.motoHoursTotal}
            onChange={handleFormChange}
          />
          <TextField
            label="Відпрацьовано мотогодин (на місці)"
            variant="outlined"
            style={{ margin: 5 }}
            name="motoHoursIdle"
            value={formData.motoHoursIdle}
            onChange={handleFormChange}
          />
          <TextField
            label="Відпрацьовано мотогодин (під час руху)"
            variant="outlined"
            style={{ margin: 5 }}
            name="motoHoursOnRoute"
            value={formData.motoHoursOnRoute}
            onChange={handleFormChange}
          />
          <TextField
            label="Виконана робота"
            variant="outlined"
            style={{ margin: 5 }}
            name="workDone"
            value={formData.workDone}
            onChange={handleFormChange}
          />
          <TextField
            label="Показання спідометра, час і місце відпускання машини, підпис старшого машини (особи, яка використовувала машину)"
            variant="outlined"
            style={{ margin: 5 }}
            name="speedometerReading"
            value={formData.speedometerReading}
            onChange={handleFormChange}
          />
          <TextField
            label="Військове звання водія"
            variant="outlined"
            style={{ margin: 5 }}
            name="driverRank"
            value={formData.driverRank}
            onChange={handleFormChange}
          />
          <TextField
            label="Підпис водія"
            variant="outlined"
            style={{ margin: 5 }}
            name="driverSignature"
            value={formData.driverSignature}
            onChange={handleFormChange}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 5 }}
            onClick={handleFormSubmit}
          >
            Підтвердити
          </Button>
          <Button variant="contained" style={{ margin: 5 }}>
            Очистити форму
          </Button>
        </Paper>
      </Grid>

      {/* Таблиця */}
      <Grid item xs={9} style={{ marginLeft: "25%" }}>
        <Paper
          style={{ padding: "20px", maxHeight: "90vh", overflowY: "auto" }}
        >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell rowSpan={2} align="center">
                    Маршрут руху (звідки, куди)
                  </TableCell>
                  <TableCell rowSpan={2} align="center">
                    Дата і час (години, хвилини)
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    Пройдено кілометрів
                  </TableCell>
                  <TableCell colSpan={4} align="center">
                    Відпрацьовано мотогодин
                  </TableCell>
                  <TableCell rowSpan={2} align="center">
                    Виконана робота
                  </TableCell>
                  <TableCell rowSpan={2} align="center">
                    Показання спідометра, час і місце відпускання машини, підпис
                    старшого машини (особи, яка використовувала машину)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">вибуття</TableCell>
                  <TableCell align="center">прибуття</TableCell>
                  <TableCell align="center">усього</TableCell>
                  <TableCell
                    align="center"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    у тому числі
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    на місці
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    під час руху
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((rowData, index) => (
                  <TableRow key={index}>
                    <TableCell>{rowData.route}</TableCell>
                    <TableCell>{rowData.date}</TableCell>
                    <TableCell>{rowData.kmDeparture}</TableCell>
                    <TableCell>{rowData.kmArrival}</TableCell>
                    <TableCell>{rowData.motoHoursTotal}</TableCell>
                    <TableCell>{rowData.motoHoursIdle}</TableCell>
                    <TableCell>{rowData.motoHoursOnRoute}</TableCell>
                    <TableCell>{rowData.workDone}</TableCell>
                    <TableCell>{rowData.speedometerReading}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default RoadListPage;
