import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLogoutAction } from "../../store/auth/actions";
import { CircularProgress } from "@mui/material";

export const UserInfo = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { authStatus } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const isLogged = authStatus;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signIn = () => {
    setAnchorEl(null);
    navigate("/authentication/sign-in");
  };

  const settings = () => {
    setAnchorEl(null);
    navigate("/pixema/settings");
  };

  const logOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh__token");
    setAnchorEl(null);
    dispatch(setLogoutAction());
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{
              width: 56,
              height: 56,
              borderRadius: "10px",
              backgroundColor: "#7B61FF",
              ml: 2,
              mr: 1,
            }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {isLogged ? (
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "10px",
                  backgroundColor: "#7B61FF",
                  font: 'normal 700 20px/24px "Exo 2"',
                  letterSpacing: "1px",
                }}
              >
                {!!user
                  ? `${user.username.split(" ").map((name) => name[0])}`
                  : <CircularProgress color="primary" />}
              </Avatar>
            ) : (
              <PersonOutlineIcon
                sx={{
                  color: "white",
                }}
              />
            )}
          </IconButton>
        </Tooltip>
        {isLogged && user && (
          <Typography sx={{ mr: 1, font: 'normal 600 16px/24px "Exo 2"' }}>
            {user.username}
          </Typography>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        sx={{ ml: "115px" }}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "175px",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            right: 0,
            mt: 1.5,
            backgroundColor: "#242426",
            color: "white",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 145,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
              backgroundColor: "#242426",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {isLogged && (
          <>
            <MenuItem onClick={settings}>Edit profile</MenuItem>
            <Divider />
          </>
        )}
        {isLogged ? (
          <MenuItem onClick={logOut}>Log Out</MenuItem>
        ) : (
          <MenuItem onClick={signIn}>Sign In</MenuItem>
        )}
      </Menu>
    </React.Fragment>
  );
};
