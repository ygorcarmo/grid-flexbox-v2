import "./footer.css";
import facebooklogo from "../../assets/facebook-icon.svg";
import instagramlogo from "../../assets/instagram-icon.svg";

export const Footer = () => {
  return (
    <div class="footer">
      <footer>
        <div class="social">
          <h4>Stay Connected</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <img src={facebooklogo} alt="Visit us at Facebook." />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <img src={instagramlogo} alt="Visit us on Instagram." />
              </a>
            </li>
          </ul>
        </div>
        <address>
          Wall of Wonder <br />
          RBC Plaza
          <br />
          60 South 6th Street
          <br />
          Minneapolis, MN 55402
        </address>
      </footer>
    </div>
  );
};
