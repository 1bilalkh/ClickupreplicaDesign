import { Box } from "@mui/material";
import SearchBar from "./Topbar/component/SearchBar";
import { Typography } from "@mui/material";

function TopBar() {
  return (
    <>
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{  borderBottom: "1px solid #e0e0e0", p: 1 }}
           
            >
            <div><Typography variant="h6body2">Dashboard WorkSpace</Typography></div>
            <div><SearchBar /></div>
            <div>Right</div>
            </Box>
    </>
  )
}

export default TopBar