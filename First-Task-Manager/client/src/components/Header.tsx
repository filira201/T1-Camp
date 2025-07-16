import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
} from "@heroui/react";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleTheme } from "../store/reducers/themeSlice";
import { Link, NavLink } from "react-router";
import classNames from "classnames";

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
      <NavbarContent className="xs:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        />
        <NavbarBrand>
          <Link
            onClick={() => setIsMenuOpen(false)}
            aria-label="Перейти на главнаю страницу"
            to="/"
            className="font-bold text-inherit transition-colors hover:text-foreground-500 focus-visible:outline-primary"
          >
            TM
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden xs:flex" justify="start">
        <NavbarBrand>
          <Link
            aria-label="Перейти на главнаю страницу"
            to="/"
            className="font-bold text-inherit transition-colors hover:text-foreground-500 focus-visible:outline-primary"
          >
            TM
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden xs:block">
          <NavLink
            to="/task/new"
            //TODO: МБ додумать покрасивее классы, отдельные компоненты для NavBarLink
            className={({ isActive }) =>
              classNames(
                "font-medium transition-colors hover:text-blue-500",
                {
                  "text-blue-500": isActive,
                }
              )
            }
          >
            Создать задачу
          </NavLink>
        </NavbarItem>
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

      <NavbarMenu className="flex items-center">
        <NavbarMenuItem>
          <NavLink
            to="/task/new"
            onClick={() => setIsMenuOpen(false)}
            //TODO: МБ додумать покрасивее классы
            className={({ isActive }) =>
              classNames(
                "font-medium transition-colors hover:text-blue-500",
                {
                  "text-blue-500": isActive,
                }
              )
            }
          >
            Создать задачу
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
export default Header;
