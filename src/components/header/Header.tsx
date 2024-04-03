import { useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import { House, Info, User } from "@phosphor-icons/react";
import { Drawer, IconButton } from "@mui/material";
import { Box, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <div
          className={style.navItem}
          style={{ padding: "20px 0 5px 30px" }}
          onClick={() => navigate("/")}
        >
          <House size={30} className={style.icon} />
          <a style={{ fontSize: "1.1rem" }}>Início</a>
        </div>
        <div
          className={style.navItem}
          style={{ padding: "20px 0 5px 30px" }}
          onClick={() => navigate("/about")}
        >
          <Info size={30} className={style.icon} />
          <a style={{ fontSize: "1.1rem" }}>Sobre</a>
        </div>
        <div
          className={style.navItem}
          style={{ padding: "20px 0 5px 30px" }}
          onClick={() => navigate("/characters")}
        >
          <User size={30} className={style.icon} />
          <a style={{ fontSize: "1.1rem" }}>Personagens</a>
        </div> 
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <header>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <nav>
          <div className={style.navItem} onClick={() => navigate("/")}>
            <House size={28} className={style.icon} />
            <a>Início</a>
          </div>
          <div className={style.navItem} onClick={() => navigate("/about")}>
            <Info size={28} className={style.icon} />
            <a>Sobre</a>
          </div>
          <div
            className={style.navItem}
            onClick={() => navigate("/characters")}
          >
            <User size={28} className={style.icon} />
            <a>Personagens</a>
          </div>
        </nav>
      </Box>

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { sm: "none" },
          color: "var(--light-text)",
          padding: 0,
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <div>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 260,
              backgroundColor: "var(--background-dark)",
              color: "var(--light-text)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </div>
    </header>
  );
}
