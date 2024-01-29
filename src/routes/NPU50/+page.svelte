<main>
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
      <li><a href="/About">About</a></li>
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
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }

  h1 {
    font-family: 'Tungsten-SemiBold';
    font-size: 3vw;
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

  div > div {
    margin-inline: 30px;
  }

  li a {
    font-family: 'GT-Eesti';
    font-size: 1vw;
    font-weight: 100;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    color: whitesmoke;
  }
</style>
