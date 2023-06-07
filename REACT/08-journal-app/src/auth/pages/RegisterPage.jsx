import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatUserDirectFulfilment } from "../../store/auth/thunks";

const formData = {
  email: "",
  displayName: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), " Ecorreo debe tener una @ "],
  password: [
    (value) => value.length >= 6,
    " El password debe tener mas de 6 digitos ",
  ],
  displayName: [(value) => value.length >= 1, " El nombre es obligatorio "],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    onInputChange,
    formState,
    email,
    displayName,
    password,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    dispatch(startCreatUserDirectFulfilment(formState));
    console.log(formState);
  };

  return (
    <AuthLayout title="Crear una cuenta">
      <h1>Form Valid? {isFormValid ? "Sipi" : "Nopo"} </h1>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Tu nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correogoogle@.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid
              item
              xs={12}
              display={!!errorMessage ? "" : "none"}>
              <Alert severity="error"> {errorMessage} </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresa aqui !!
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
