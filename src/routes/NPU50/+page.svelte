<main>
  <div style="text-align:center;width:40%">
    <h2>NEIGHBORHOOD PLANNING UNITS</h2>
    <h3 style="">Established 1974</h3>
    <h4 style="text-align: left;">CELEBRATING</h4>
    <h4 id="celeb50">
      <img
        src="./NPU 50th Logo_GOLD.png"
        width="150px"
        alt="Celebrating 50 logo"
      />YEARS
    </h4>
    <div style="display: flex;">
      <span class="bigQuote">"</span>
      <p style="line-height: 130% ;">
        Love must be a city filled<br />with people working<br />together to
        improve the<br />quality of all our lives.
      </p>
      <span class="bigQuote">"</span>
    </div>
    <button>LEARN MORE</button>
  </div>
  <!-- Celebrating 50 Maynard PHOTO -->
  <div style="position: relative;">
    <img
      src="https://static.wixstatic.com/media/82e69c_87419aa089c549c49028b8aa9e6604e6~mv2.png/v1/crop/x_10,y_0,w_1421,h_771/fill/w_979,h_531,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/82e69c_87419aa089c549c49028b8aa9e6604e6~mv2.png"
      alt="Celebrating 50 Years"
      width="100%"
    />
    <button id="learnMore">LEARN MORE</button>
  </div>
  <div>
    <div class="imgRight">
      <div>
        <h1>FIND YOUR NPU</h1>
        <p>
          Whether you're a newcomer to Atlanta or a longtime resident, uncover
          your Neighborhood Planning Unit (NPU) and learn how you can play an
          active role in shaping the future of the City!
        </p>
      </div>
      <img src="./NPU Map LOGO TEAL.png" alt="NPU Map Logo" height="280" />
    </div>
  </div>

  <div class="imgLeft">
    <img src="https://picsum.photos/280/280" alt="placeholder" />
    <div>
      <h1>GET CONNECTED</h1>
      <p>
        Your neighbors are meeting about changes on your street this month!
        Click here tog et connected to your neighborhood, discover the schedule
        for monthly meetings, and explore the most recent agenda items.
      </p>
    </div>
  </div>

  <div class="center" style="margin-block: 20px;">
    <div>
      <h1>STAY IN TOUCH!</h1>
      <p>
        2024 is the 50th Anniversary of this esteemed system for collaborative
        neighborhood planning. Join the mailing list to stay up-to-date with
        this year's activities!
      </p>
    </div>
  </div>

  <footer>
    <img
      src="./NPU Logo White.png"
      alt="Neighborhood Planning Units Logo"
      width="280px"
    />
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/whatis">About</a></li>
      <li>
        <a href="https://www.npuatlanta.org/npuuniversity">NPU University</a>
      </li>
      <li><a href="/NPU50">NPU 50</a></li>
    </ul>
  </footer>
</main>

<style>
  main {
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-inline: 10vw;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }

  button {
    background-color: #efb641;
    border: none;
    border-radius: 30px;
    color: black;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    font-family: 'Tungsten-SemiBold';
    font-size: 2rem;
    font-weight: 100;
    margin: 4px 2px;
    cursor: pointer;
    width: 10svw;
    text-wrap: nowrap;
  }

  h1 {
    font-family: 'Tungsten-SemiBold';
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 0;
    color: #efb641;
  }

  h2 {
    font-family: 'Tungsten-SemiBold';
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 0;
    color: whitesmoke;
  }

  h3 {
    font-family: 'GT-Eesti';
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0;
    color: whitesmoke;
  }

  h4 {
    font-family: 'Tungsten-SemiBold';
    font-size: 6rem;
    margin-top: 0;
    margin-bottom: 0;
    color: #efb641;
  }

  p {
    font-family: 'GT-Eesti';
    /* font-size: 2vw; */
    font-weight: 100;
    text-wrap: pretty;
    margin-top: 0;
    margin-bottom: 0;
    color: whitesmoke;
  }

  .bigQuote {
    font-family: 'GT-Eesti';
    font-size: 3rem;
    color: whitesmoke;
  }

  .imgRight {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .imgLeft {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .center {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  #celeb50 {
    display: flex;
    flex-direction: row;
    justify-content: start;
  }

  #learnMore {
    position: absolute;
    top: 77%;
    left: 14%;
  }

  div > div {
    margin-inline: 30px;
  }

  li a {
    font-family: 'GT-Eesti';
    font-size: 1rem;
    font-weight: 100;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    color: whitesmoke;
  }

  @media (max-width: 1200px) {
    button {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    main {
      padding-inline: 5vw;
    }

    footer {
      flex-direction: column;
    }

    footer > img {
      margin-bottom: 20px;
    }

    button {
      font-size: 1rem;
      width: 20svw;
    }

    /* footer > ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 20px;
    } */

    .imgRight {
      flex-direction: column;
    }

    .imgLeft {
      flex-direction: column-reverse;
    }

    .center {
      flex-direction: column;
    }
  }
</style>
