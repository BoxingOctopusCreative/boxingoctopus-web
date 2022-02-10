import styled from 'styled-components';

export const Styles = styled.div`
html, .body, .container {
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
}

.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
}

.navbar {
  display: flex;
  padding-top: 20px;
  padding-bottom: 100px;
  padding-right: 100px;
  justify-content: flex-end;
}

.navbar-brand-logo {
  width: 80px;
  height: auto;
}

p {
  font-size: 1.5em;
  font-family: 'Bebas Neue', sans-serif;
}

.404-img {
  justify-content: center;
  align-items: center;
  width: 100px;
  height: auto;
}

.profile-pic {
  width: 400px;
  height: auto;
}

.nav-link {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px;
  color: white !important;
  text-decoration: none;
  margin-left: 16px;
}

.logo-splash {
  display: flex;
  align-items: center;
  vertical-align: middle;
  width: 100%;
  padding-left: 60px;
}

.text-splash {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 90px;
  line-height: 1;
}

.page-footer {
  background-color: black;
  width: 50%;
  margin: 0 auto;
}

.footer-copyright {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
}

.footer-copyright a {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  color: white !important;
  text-decoration: none;
}
`