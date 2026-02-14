import styled from 'styled-components';

export const Styles = styled.div`
html, .body, .container {
  color: white;
  background-color: #000000;
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
}

.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.pfp-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-list {
  margin-bottom: 25px;
}

.project-list p {
  display: flex;
  align-items: center;
}

.navbar {
  background-color: black;
  display: flex;
  width: 100%;
  padding-top: 10px;
  padding-right: 100px;
  justify-content: center;
}

.navbar-brand-logo {
  width: 80px;
  height: auto;
}

p {
  font-size: 1.5em;
  font-family: 'Bebas Neue', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Bebas Neue', sans-serif;
}

.404-img {
  justify-content: center;
  align-items: center;
  width: 100px;
  height: auto;
}

.profile-pic {
  image-width: 20%;
  width: 400px;
  height: auto;
  border-radius: 100%;
  filter: grayscale(100%);
}

.collective-logo {
  image-width: 20%;
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

.form-label {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3em;
}

.form-control {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2em;
  border-radius: 0em;
}

button {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2em;
  border-radius: 0em;
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
  width: 100%;
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