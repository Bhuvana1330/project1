import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../login/UserAuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { googleSignIn } = useUserAuth();

  const { user, logOut } = useUserAuth();

  const data = useUserAuth();

  console.log(data);
  //logout
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  //signin
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <header>
      <NavLink to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPZzhwuL42NhYVWq6SUAhqF-TBDMVIK4pSHnXGum2fw&usqp=CAU&ec=48665701"
          alt=""
          className="logo"
        />
      </NavLink>
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
          <p>{cart ? cart.length : ""}</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <h2 className="userName">BHUVANA BHUVI</h2>
        <div>
          {user ? (
            <NavLink onClick={handleSignOut} to="/Logout">
              Logout
            </NavLink>
          ) : (
            <NavLink to="/Login">Login +</NavLink>
          )}
        </div>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
