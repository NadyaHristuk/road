import {
  Paper,
  Grid,
  TableContainer,
  AppBar,
  Toolbar,
  TextField,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import InfoIcon from "@mui/icons-material/Info";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px; // Це приблизно відповідає theme.spacing(2)
  margin-top: 6px; // Це приблизно відповідає theme.spacing(4)
  max-width: 300px;
  margin: 0 auto; // Центрує контейнер кнопок
`;

const RoadListPage = (props) => {
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

  const [isOpen, setIsOpen] = useState(false);
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
    <Grid container spacing={1}>
      {/* Сайдбар */}
      <Grid item xs={3}>
        <Paper
          style={{
            height: "100vh",
            padding: "5px",
            position: "fixed",
            width: "20%",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {/* Тут можна додати елементи сайдбару */}
          <ButtonsContainer>
            <div>
              <Button
                variant="contained"
                startIcon={<InfoIcon />}
                color="primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                Заповнити загальну інформацію
              </Button>

              {isOpen && (
                <Grid item xs={12}>
                  <Paper>
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
              )}
            </div>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              color="secondary"
              onClick={() => {
                /* ваша логіка */
              }}
            >
              Зберегти дорожній лист в PDF
            </Button>
            <Button
              variant="contained"
              startIcon={<ClearIcon />}
              color="error"
              onClick={() => {
                /* ваша логіка */
              }}
            >
              Очистити форму
            </Button>
          </ButtonsContainer>
          Сайдбар
        </Paper>
      </Grid>

      {/* Основний контент */}
      <Grid item xs={9} style={{ marginLeft: "25%" }}>
        <Paper
          style={{ padding: "20px", maxHeight: "90vh", overflowY: "auto" }}
        >
          {/* Тут можна додати табличку */}
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
          <div style={{ margin: 20 }}>
            <div>
              <div>Водій (механік-водій):</div>
              <TextField
                label="Військове звання"
                variant="outlined"
                style={{ margin: 5 }}
              />
              <TextField
                label="Підпис"
                variant="outlined"
                style={{ margin: 5 }}
              />
              <TextField
                label="Прізвище"
                variant="outlined"
                style={{ margin: 5 }}
              />
              <TextField
                label="Ініціали"
                variant="outlined"
                style={{ margin: 5 }}
              />
            </div>
            <div>
              <div>Правильність оформлення дорожнього листа перевірив:</div>
              <TextField
                label="Посада"
                variant="outlined"
                style={{ margin: 5 }}
              />
              <TextField
                label="Військове звання"
                variant="outlined"
                style={{ margin: 5 }}
              />
              <TextField
                label="Підпис"
                variant="outlined"
                style={{ margin: 5 }}
              />
              <TextField
                label="Прізвище"
                variant="outlined"
                style={{ margin: 5 }}
              />
              <TextField
                label="Ініціали"
                variant="outlined"
                style={{ margin: 5 }}
              />
            </div>
          </div>
          <div style={{ margin: 20 }}>“___” __________________ 2023 року</div>
          Табличка з даними
          {/* Приклад довгого контенту */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RoadListPage;
