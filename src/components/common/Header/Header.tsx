import { AppBar, IconButton, useTheme } from "hikari-ui";
import classNames from "classnames";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export function Header() {
  const { toogleTheme, isDarkMode } = useTheme();
  return (
    <AppBar className="mb-4">
      <AppBar.Tool className={classNames("justify-between mx-auto max-w-7xl")}>
        <h2
          className={classNames(
            "text-base sm:text-2xl text-slate-200 font-bold"
          )}
        >
          Aprenda inglês com música
        </h2>
        <div className="flex items-center">
          <IconButton
            onClick={toogleTheme}
            variantStyle="light-ghost"
            icon={isDarkMode ? <FaRegSun /> : <FaRegMoon />}
          />
        </div>
      </AppBar.Tool>
    </AppBar>
  );
}
