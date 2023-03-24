import { CircularProgress } from "@mui/material";
import { Loading } from "./styled";

export function Load() {
  return (
    <Loading sx={{ display: "flex" }}>
      <CircularProgress />
    </Loading>
  );
}
