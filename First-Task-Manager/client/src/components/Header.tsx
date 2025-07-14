import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Switch,
} from "@heroui/react";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleTheme } from "../store/reducers/themeSlice";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { darkMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const toggleMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <Navbar
      isBordered
      isBlurred={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link
            aria-label="Перейти на главнаю страницу"
            to="/"
            className="font-bold text-inherit transition-colors hover:text-foreground-500 active:text-foreground-400 focus-visible:outline-blue-500"
          >
            TM
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            isSelected={!darkMode}
            onValueChange={toggleMode}
            endContent={<LuSunMedium />}
            startContent={<FaRegMoon />}
            size="lg"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
export default Header;
