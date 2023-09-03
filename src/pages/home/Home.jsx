import "./home.css";
import hero1200 from "../../assets/hero-1200.png";
import hero838 from "../../assets/hero-838.png";
import hero300 from "../../assets/hero-300.png";
import logo from "../../assets/logo2.png";
import fork from "../../assets/fork-it-up.jpg";
import eyeing from "../../assets/eyeing-you.jpg";
import scoot from "../../assets/lets-scoot.jpg";

import toocoool300 from "../../assets/too-cool-300.jpg";
import toocool740 from "../../assets/too-cool-740.jpg";
import toocool1058 from "../../assets/too-cool-1058.jpg";
import toocool1200 from "../../assets/too-cool-1200.jpg";

import popart from "../../assets/pop-art.jpg";
import abstract from "../../assets/abstract.jpg";
import vivid from "../../assets/vivid.jpg";
import music from "../../assets/music.jpg";
import vehicles from "../../assets/vehicles.jpg";
import landscape from "../../assets/landscape.jpg";

import donout1 from "../../assets/donut1.jpg";
import donout2 from "../../assets/donut2.jpg";
import donout3 from "../../assets/donut3.jpg";
import donout4 from "../../assets/donut4.jpg";
import donout5 from "../../assets/donut5.jpg";

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
      <div class="stripe">
        <section id="popular">
          <h2>Popular Prints</h2>
          <ul>
            <li>
              <figure class="color8">
                <img src={fork} alt="Fork on green background" />
                <figcaption>
                  <a href="#">Fork It Up</a>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure class="color7">
                <img
                  src={eyeing}
                  alt="Viewing part of an orange car with an oversized headlight."
                />
                <figcaption>
                  <a href="#">Eyeing You</a>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure class="color4">
                <img src={scoot} alt="Vespa scooter parked on a street." />
                <figcaption>
                  <a href="#">Let's Scoot</a>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
      </div>
      <section id="featured">
        <h2>Featured Print</h2>

        <figure class="color6">
          <img
            sizes="(min-width: 300px) 33.3vw, 100vw"
            srcset={`
            ${toocoool300}  300w,
            ${toocool740}    740w,
            ${toocool1058} 1058w,
            ${toocool1200} 1200w
          `}
            src={toocool1200}
            alt="Closeup of woman in sunglasses showing eyes, nose, and fingers over mouth."
          />

          <figcaption>
            <a href="#">Too Cool for School</a>
          </figcaption>
        </figure>
      </section>
      <section id="collections">
        <h2>Collections</h2>
        <ul>
          <li>
            <figure class="color7">
              <img src={popart} alt="Pop Art: This must be the place" />
              <figcaption>
                <a href="#">Pop Art</a>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure class="color2">
              <img src={abstract} alt="Abstract: grey and green squares." />
              <figcaption>
                <a href="#">Abstract</a>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure class="color6">
              <img
                src={vivid}
                alt="Tree on island in lake with purple sunrise."
              />
              <figcaption>
                <a href="#">Vivid</a>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure class="color8">
              <img src={music} alt="Music: guitar leaning against wall." />
              <figcaption>
                <a href="#">Music</a>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure class="color4">
              <img src={vehicles} alt="Vehicles: 1930's car on street." />
              <figcaption>
                <a href="#">Vehicles</a>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure class="color3">
              <img
                src={landscape}
                alt="Landscape: moonrise over tree-covered mountains."
              />
              <figcaption>
                <a href="#">Landscape</a>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>
      <section id="donut">
        <h2>Sharon McCutcheon: Donut Love</h2>
        <ul>
          <li class="d1">
            <img src={donout5} alt="Donut with sprinkles." />
          </li>
          <li class="d2">
            <img src={donout1} alt="Donut with sprinkles." />
          </li>
          <li class="d3">
            <div class="author">
              <h3>About Sharon McCutcheon</h3>
              <p>
                Sharon McCutcheon specializes in LGBTQIA+ themes, stock photos,
                macro images, backgrounds, and colorful visuals. She currently
                works as a stock photographer for &nbsp;
                <a href="https://www.pexels.com/@mccutcheon" target="_blank">
                  Pexels
                </a>
                &nbsp; and &nbsp;
                <a
                  href="https://unsplash.com/@sharonmccutcheon"
                  target="_blank"
                >
                  Unsplash
                </a>
                &nbsp; and sells additional photos at &nbsp;
                <a href="https://www.eyeem.com/u/mccutcheon" target="_blank">
                  EyeEm
                </a>
                .
              </p>
            </div>
            <img src={donout2} alt="Donut with sprinkles." />
          </li>
          <li class="d4">
            <img src={donout3} alt="Donut with sprinkles." />
          </li>
          <li class="d5">
            <img src={donout4} alt="Donut with sprinkles." />
          </li>
        </ul>
      </section>
    </div>
  );
}
