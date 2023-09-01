import "./home.css";
import hero1200 from "../../assets/hero-1200.png";
import hero838 from "../../assets/hero-838.png";
import hero300 from "../../assets/hero-300.png";
import logo from "../../assets/logo2.png";

export function Home() {
  return (
    <div class="home">
      <section id="hero">
        <picture>
          <source srcset={hero1200} media="(min-width: 839px)" />
          <source srcset={hero838} media="(min-width: 301px)" />
          <img src={hero300} alt="Rainbow hero image banner." />
        </picture>
      </section>
      <section id="mission">
        <h2>Our Mission</h2>
        <div class="missiontext">
          <p>
            <img src={logo} alt="Logo for Wall of Wonder." class="missionimg" />
            We strive to bring people interesting and unique art that inspires
            them to be more creative and enjoy their homes. We know art can be
            expensive, so we work with a rotating set of artists and
            photographers to being you fantastic prints - all for free. We just
            ask that you donate what you think is fair, or share the site with
            someone who might like great art as much as you do.
          </p>
        </div>
      </section>
    </div>
  );
}
