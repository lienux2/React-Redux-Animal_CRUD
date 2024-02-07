import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/Paw_Print.png";
import { Button } from "../components/Button/Button";
import style from "./RootLayout.module.css";

export const RootLayout = () => {
  return (
    <>
      <nav>
        <div className={style.navigation}>
          <Link to="/">
            <div className={style.navigationLogo}>
              <img className={style.logo} src={Logo} alt="logo" />
              <h1>Animal CRUD</h1>
            </div>
          </Link>
          <div>
            <Link to="add">
              <Button buttonName="Add animal" buttonStyle="add" />
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className={style.footer}>
      </footer>
    </>
  );
};
