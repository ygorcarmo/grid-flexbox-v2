import { useLocation } from "preact-iso";
import logo from "../../assets/header-logo.svg";
import "./header.css";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" class={url == "/" && "active"}>
              <img src={logo} alt="logo" />
            </a>
          </li>
          <li class="order-1">
            <a href="/coming-soon">Collections</a>
          </li>
          <li class="order-1">
            <a href="/coming-soon">About</a>
          </li>
          <li>
            <a href="/coming-soon">Contact</a>
          </li>
          <li>
            <a href="/coming-soon">Donate</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
