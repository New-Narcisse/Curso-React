import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";

import { useCheckauth } from "../hooks";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const { status } = useCheckauth();

  const { uid } = useSelector((state) => state.auth);
  
  if (status === "checking") return <CheckingAuth />;
  

  return (
    <Routes>
      {status === "authentiacated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/*  <Route path="/auth/*" element={<AuthRoutes />} /> */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};
