import React, { useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../../App.css";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/team");
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleCardClick}
          sx={{ cursor: "pointer" }}
        >
          <StatBox
            title="12"
            subtitle="Total Employees"
            progress="0.75"
            increase="+14%"
            icon={
              <GroupsIcon
                sx={{ color: colors.greenAccent[600], fontSize: "35px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="10"
            subtitle="Present Today"
            progress="0.50"
            increase="+21%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "35px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2"
            subtitle="Absent Today"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonRemoveIcon
                sx={{ color: colors.greenAccent[600], fontSize: "35px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="5"
            subtitle="Leave Requests"
            progress="0.80"
            increase="+43%"
            icon={
              <RequestPageIcon
                sx={{ color: colors.greenAccent[600], fontSize: "35px" }}
              />
            }
          />
        </Box>
      </Box>

      {/* CALENDAR */}
      <Box mt="20px" display="flex" justifyContent="right">
        <div className="card" style={{ width: "70%", background: "#1F2A40" }}>
          <div className="card-body">
            <h3 style={{ color: "white" }}>Today Attendance</h3>
            <Table>
              <thead striped>
                <tr>
                  <th>Emp Id</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Join Time</th>
                  <th>Late Times</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody >
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>04/07/2024</td>
                  <td>10 AM</td>
                  <td>6 PM</td>
                  <td>Indore</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Shiv</td>
                  <td>04/07/2024</td>
                  <td>10 AM</td>
                  <td>6 PM</td>
                  <td>Indore</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Test</td>
                  <td>04/07/2024</td>
                  <td>10 AM</td>
                  <td>6 PM</td>
                  <td>Indore</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Doms</td>
                  <td>04/07/2024</td>
                  <td>10 AM</td>
                  <td>6 PM</td>
                  <td>Indore</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <Calendar
          className="custom-calendar"
          showWeekNumbers
          onChange={onChange}
          value={date}
          tileClassName={{ backgroundColor: colors.primary[400] }}
        />
      </Box>
      <Box mt="10px" display="flex" justifyContent="right">
        <Typography variant="h6">{date.toDateString()}</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
