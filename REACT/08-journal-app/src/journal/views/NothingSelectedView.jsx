import { StarOutlineOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      className=" animate__animated animate__fadeInUp animate__slow "
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px )",
        backgroundColor: "primary.main",
        padding: 4,
        borderRadius: 5,
      }}
    >
      <Grid
        className=" animate__animated animate__bounceIn animate__delay-2s	 animate__slow  "
        item
        xs={12}
      >
        <StarOutlineOutlined sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
