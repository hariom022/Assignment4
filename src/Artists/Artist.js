import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import "./Artist.css";

const Artist = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
        }}
      >
        <Typography>Artists</Typography>
        <Typography sx={{ color: "#8D8D8D", pl: "15px" }}>
          Photographers
        </Typography>
      </Box>
      <Card
        sx={{ minWidth: 200, height: "100px", mt: "10px" }}
        className="artist1-con"
      >
        <CardHeader
          avatar={
            <Avatar aria-label="artist">
              <img src="artist1.png" alt="" />
            </Avatar>
          }
          title="Lara Leones"
          subheader="@thewallart"
          sx={{ color: "white" }}
        />
      </Card>
      <Card
        sx={{ minWidth: 200, height: "100px", mt: "10px" }}
        className="artist2-con"
      >
        <CardHeader
          avatar={
            <Avatar aria-label="artist">
              <img src="artist2.png" alt="" />
            </Avatar>
          }
          title="Lara Leones"
          subheader="@thewallart"
          sx={{ color: "white" }}
        />
      </Card>
      <Card
        sx={{ minWidth: 200, height: "100px", mt: "10px" }}
        className="artist3-con"
      >
        <CardHeader
          avatar={
            <Avatar aria-label="artist">
              <img src="artist3.png" alt="" />
            </Avatar>
          }
          title="Lara Leones"
          subheader="@thewallart"
          sx={{ color: "white" }}
        />
      </Card>
      <Card
        sx={{ minWidth: 200, height: "100px", mt: "10px" }}
        className="artist4-con"
      >
        <CardHeader
          avatar={
            <Avatar aria-label="artist">
              <img src="artist4.png" alt="" />
            </Avatar>
          }
          title="Lara Leones"
          subheader="@thewallart"
          sx={{ color: "white" }}
        />
      </Card>
      <Card
        sx={{ minWidth: 200, height: "100px", mt: "10px", color: "white" }}
        className="artist5-con"
      >
        <CardHeader
          avatar={
            <Avatar aria-label="artist">
              <img src="artist3.png" alt="" />
            </Avatar>
          }
          title="Lara Leones"
          subheader="@thewallart"
          sx={{ color: "white" }}
        />
      </Card>
    </Box>
  );
};

export default Artist;
