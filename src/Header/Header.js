import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        m: "40px 0px",
        alignItems: "center",
      }}
    >
      <Box sx={{ background: "white", width: "240px", borderRadius: "10px" }}>
        <Typography
          variant="h6"
          sx={{ fontSize: "bold", fontWeight: "bold", p: "10px 0px" }}
        >
          LOGO
        </Typography>
      </Box>
      <Box
        sx={{
          background: "white",
          width: "600px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <TextField
          placeholder="search..."
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display: "flex", mr: "10px" }}>
          <TuneIcon />
          <Typography sx={{ alignContent: "center", alignItems: "center" }}>
            Filter
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#88C2BB",
          borderRadius: "10px",
          width: "200px",
          p: "10px 0px",
          color: "white",
        }}
      >
        <Typography>Become a Seller</Typography>
      </Box>
    </Box>
  );
};

export default Header;
