<template>
  <nav>
    <div id="logoContainer">
      <a href="/" id="homepageTitle" title="Tom Metcalfe | Software Engineering Manager | London | Homepage">
        Tom Metcalfe <span>.</span>
      </a>
      <div id="navBar">
        <ul>
          <li>
            <a href="/#/about" title="About Tom Metcalfe">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  nav {
    background-color: #303030;
    width:100%;
    height:64px;
    font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
  }

  #homepageTitle {
    color: #fff;
    font-weight: 900;
    font-size: 28px;
    text-decoration: none;
  }

  #homepageTitle span {
    color: #00b3fe;
    padding-left: 3px;
    text-decoration: none;
  }

  #logoContainer {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 64rem;
    display: table;
    padding:1rem;
  }

  #navBar {
    float:right;
    width:10rem;
  }

  @media screen and (max-width:1048px){
    #navBar {
      padding-right:1.75rem;
    }
  }

  #navBar ul {
    list-style-type: none;
    padding: 0;
    margin:10px 0 0 0;
  }

  #navBar ul li {
    float:right;
  }

  #navBar ul li a {
    color: #fff;
    font-weight: 900;
    font-size: 18px;
    text-decoration: none;
  }
</style>
