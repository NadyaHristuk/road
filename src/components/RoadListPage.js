import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import InfoIcon from "@mui/icons-material/Info";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import axios from "axios";
import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
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
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <ButtonsContainer>
          <Button
            variant="contained"
            startIcon={<InfoIcon />}
            color="primary"
            onClick={() => {
              /* ваша логіка */
            }}
          >
            Заповнити загальну інформацію
          </Button>
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
      </Grid>
    </Grid>
  );
};

export default RoadListPage;
