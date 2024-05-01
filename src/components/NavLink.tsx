import { useEffect, useState } from "react";
import { LocalStorageController } from "../api/LocalStorageController";
import { Routes } from "../utils.ts/utils";
import { PAGE_THEME } from "../api/constants";
import { useNavigate } from "react-router-dom";

export const NavLink = () => {
  const _isLightTheme = LocalStorageController.getItem(PAGE_THEME) === "light";

  const [isLightTheme, setIsLightTheme] = useState(_isLightTheme);

  useEffect(() => {
    setPageTheme(_isLightTheme ? "light" : "dark");
  }, []);

  const navigate = useNavigate();

  const setPageTheme = (mode: "dark" | "light") => {
    const bgColor = mode === "dark" ? "#121212" : "#ffffff";
    const textColor = mode === "dark" ? "#ffffff" : "#000000";
    const navbarBgColor = mode === "dark" ? "#23252b" : "#ffffff";

    document.documentElement.style.setProperty("--primary-background", bgColor);
    document.documentElement.style.setProperty(
      "--movie--item-text-color",
      textColor
    );
    document.documentElement.style.setProperty(
      "--navbar-bgColor",
      navbarBgColor
    );
  };

  const changeTheme = () => {
    if (isLightTheme) {
      LocalStorageController.setItem(PAGE_THEME, "dark");
      setIsLightTheme(false);
      setPageTheme("dark");
      return;
    }

    LocalStorageController.setItem(PAGE_THEME, "light");
    setIsLightTheme(true);
    setPageTheme("light");
  };

  return (
    <div className="moviesSprite--navLink">
      <div className="moviesSprite--navLink--items">
        <div
          onClick={() => navigate(Routes.HOME)}
          className="moviesSprite--navLink--item"
        >
          Movies
        </div>
        <div
          onClick={() => navigate(Routes.SHOWS)}
          className="moviesSprite--navLink--item"
        >
          Shows
        </div>
        <div
          onClick={() => navigate(Routes.FAVORITES)}
          className="moviesSprite--navLink--item"
        >
          Favorites
        </div>
      </div>
      <div onClick={changeTheme} className="moviesSprite--navLink--settings">
        Change Theme
      </div>
    </div>
  );
};
