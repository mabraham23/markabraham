import React, { useState } from "react";
import { Box } from "@mui/system";

export default function Proficiency({ title, description, summary, image, reverse }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        flexDirection: { xs: "column", sm: reverse ? "row-reverse" : "row" }, // Change added
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 3,
        borderRadius: 1,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 12px rgba(0, 0, 0, 0.5)",
        },
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
      onClick={toggleExpanded}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: "1 1 50%",
          backgroundColor: "#fff",
          padding: 2,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            height: "auto",
            width: "auto",
          }} // Change added
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 4,
          backgroundColor: "#ADD8E6",
          width: { xs: "100%", sm: "50%" }, // Change added
        }}
      >
        <h3>{title}</h3>
        <p
          style={{
            maxHeight: expanded ? "auto" : "50px",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}
        >
          {description}
        </p>
        <p style={{ display: expanded ? "block" : "none" }}>{summary}</p>
      </Box>
    </Box>
  );
}
