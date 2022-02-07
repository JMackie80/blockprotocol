import { Components } from "@mui/material";

export const MuiTextField: Components["MuiTextField"] = {
  defaultProps: {
    InputLabelProps: {
      disableAnimation: true,
      shrink: true,
    },
    InputProps: {
      notched: false,
    },
  },
};
