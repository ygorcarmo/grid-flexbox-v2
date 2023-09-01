import { useLocation } from "preact-iso";
import logo from "../../assets/header-logo.svg";
import "./header.css";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li class="order0">
            <a href="/" class={url == "/" && "active"}>
              <img src={logo} alt="logo" />
            </a>
          </li>
          <li class="order-1">
            <a href="/">Collections</a>
          </li>
          <li class="order-1">
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Donate</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
