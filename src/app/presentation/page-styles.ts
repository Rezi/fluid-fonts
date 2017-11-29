export const pageStyles = {
  1: ``,
  2: ``,
  3: `
html {
    font-size: 10px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial;
}

body {
    margin: 0;
    font-size: 1.4rem;
}

/* 320 - 640 */

@media screen and (min-width: 320px) {
    html {
        font-size: calc(10px + 4 * ((100vw - 320px) / 320));
    }
}

/* 640 - 1280 */

@media screen and (min-width: 640px) {
    html {
        font-size: calc(14px + 2 * ((100vw - 640px) / 640));
    }
}

@media screen and (min-width: 1280px) {
    html {
        font-size: 16px;
    }
}

.banner {
    font-size: 60px;
    color: #aaa;
    background-color: #89c1bd;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.banner span {
    transform: rotate(-10deg);
    background-color: #fff;
    padding: 0.5rem;
    box-shadow: 0 0 15px 0 #aaa;
}

.nav {
    background-color: #999;
    color: #fff;
}

.nav-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}

.nav-list__item {
    cursor: pointer;
    text-align: center;
    flex-grow: 1;
    font-size: 30px;
    padding: 0.5rem;
}

.nav-list__item:hover {
    background-color: #666;
}

.main {
    padding: 2rem;
}

.placeholder-text {
    color: transparent;
    background-color: #ddd;
    font-size: 11px;
    line-height: 22px;
}


/* MOBILE DESIGN  */

@media screen and (max-width: 320px) {
    .nav-list__item {
        font-size: 18px;
    }
}
`,
  4: ``,
  5: ``,
  6: `
* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial;
}

body {
  margin: 0;
  font-size: 1.4rem;
}

/* 320 - 640 */

@media screen and (min-width: 320px) {
  html {
      font-size: calc(10px + 4 * ((100vw - 320px) / 320));
  }
}

/* 640 - 1280 */

@media screen and (min-width: 640px) {
  html {
      font-size: calc(14px + 2 * ((100vw - 640px) / 640));
  }
}

@media screen and (min-width: 1280px) {
  html {
      font-size: 16px;
  }
}

.banner {
  font-size: 60px;
  color: #aaa;
  background-color: #89c1bd;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.banner span {
  transform: rotate(-10deg);
  background-color: #fff;
  padding: 0.5rem;
  box-shadow: 0 0 15px 0 #aaa;
}

.nav {
  background-color: #999;
  color: #fff;
}

.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.nav-list__item {
  cursor: pointer;
  text-align: center;
  flex-grow: 1;
  font-size: 30px;
  padding: 0.5rem;
}

.nav-list__item:hover {
  background-color: #666;
}

.main {
  padding: 2rem;
}

.placeholder-text {
  color: transparent;
  background-color: #ddd;
  font-size: 11px;
  line-height: 22px;
}


/* MOBILE DESIGN  */

@media screen and (max-width: 320px) {
  .nav-list__item {
      font-size: 18px;
  }
}

/* FLUID TRANSITION */

.nav-list__item {
  cursor: pointer;
  text-align: center;
  flex-grow: 1;
  font-size: 1.8rem;
  padding: 0.5rem;
}`,
  7: ``,
  8: ``,
  9: `body {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  
  section {
    padding: 16px;
  }
  @media (min-width: 720px) {
    section {
      padding: 32px;
    }
  }
  @media (min-width: 1440px) {
    section {
      padding: 90px;
    }
  }
  
  button {
    background: #ffffff;
    border: none;
    border-radius: 3px;
  }
  
  a {
    text-decoration: none;
    color: #f9f9f9;
  }
  
  @media (min-width: 720px) {
    .u-narrowContainer {
      padding: 90px 32px;
    }
  }
  @media (min-width: 1440px) {
    .u-narrowContainer {
      padding: 90px 180px;
    }
  }
  
  .u-breakout {
    margin: 0;
  }
  @media (min-width: 720px) {
    .u-breakout {
      margin: 0 -32px;
    }
  }
  @media (min-width: 1440px) {
    .u-breakout {
      margin: 0 -180px;
    }
  }
  
  .Page {
    width: 100%;
    overflow: hidden;
    max-width: 1440px;
  }
  
  .Logo {
    width: 140px;
    height: 32px;
    background: #ffffff;
    border-radius: 8px;
  }
  
  .Navigation {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  
  .Navigation-list {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    display: none;
  }
  @media (min-width: 720px) {
    .Navigation-list {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
  }
  
  .Navigation-item {
    font-size: 12px;
  }
  @media (min-width: 720px) {
    .Navigation-item {
      font-size: 16px;
    }
  }
  .Navigation-item + .Navigation-item {
    padding-left: 2em;
  }
  
  .Navigation-button {
    background: #ffffff;
    color: #afafaf;
    padding: 1em 2.5em;
    font-size: inherit;
  }
  
  .Hamburger {
    display: block;
  }
  @media (min-width: 720px) {
    .Hamburger {
      display: none;
    }
  }
  .Hamburger li {
    width: 36px;
    height: 5px;
    border-radius: 3px;
    background: #ffffff;
    margin-bottom: 4px;
  }
  
  .Hero {
    background: url("/assets/1440x900.jpg");
    background-size: cover;
    background-position: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    height: 300px;
  }
  @media (min-width: 324px) {
    .Hero {
      height: 420px;
    }
  }
  @media (min-width: 720px) {
    .Hero {
      height: 615px;
    }
  }
  @media (min-width: 1440px) {
    .Hero {
      height: 900px;
    }
  }
  
  .Hero-content {
    color: #eaeaea;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 10%;
    margin: auto 0;
  }
  
  .Hero-title {
    /* font-size 64px $large, 44px $medium, 36px $small */
    /* margin-bottom 40px $large, 30px $medium, 10px $small*/
    font-size: 36px;
    line-height: 1;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 10px;
  }
  @media (min-width: 324px) {
    .Hero-title {
      font-size: 44px;
      margin-bottom: 30px;
    }
  }
  @media (min-width: 720px) {
    .Hero-title {
      font-size: 64px;
      margin-bottom: 40px;
    }
  }
  
  .Hero-text {
    font-size: 12px;
    line-height: 1.5;
  }
  @media (min-width: 720px) {
    .Hero-text {
      font-size: 18px;
    }
  }
  
  .Hero-button {
    background: #ffffff;
    color: #afafaf;
    padding: 15px 45px;
    font-size: 10px;
    margin-top: 40px;
  }
  @media (min-width: 324px) {
    .Hero-button {
      font-size: 12px;
    }
  }
  @media (min-width: 720px) {
    .Hero-button {
      font-size: 16px;
    }
  }
  
  .NewsFeed {
    color: #afafaf;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  @media (min-width: 324px) {
    .NewsFeed {
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
    }
  }
  @media (min-width: 720px) {
    .NewsFeed {
      -webkit-transform: translateY(-20%);
              transform: translateY(-20%);
    }
  }
  @media (min-width: 1440px) {
    .NewsFeed {
      -webkit-transform: translateY(-30%);
              transform: translateY(-30%);
    }
  }
  
  .NewsFeed-image {
    background: url("//placehold.it/403x279/eaeaea/d3d3d3") no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 71%;
  }
  
  .NewsFeed-article {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
  }
  @media (min-width: 720px) {
    .NewsFeed-article {
      margin: 0 16px;
    }
  }
  .NewsFeed-article:not(:first-child) {
    display: none;
  }
  @media (min-width: 720px) {
    .NewsFeed-article:not(:first-child) {
      display: block;
    }
  }
  
  .NewsFeed-copy {
    margin-top: 28px;
  }
  
  .NewsFeed-title {
    font-family: "Fira Sans";
    font-size: 24px;
    padding-bottom: 32px;
    line-height: 1.4;
    font-weight: 600;
  }
  
  .NewsFeed-date {
    font-family: "Fira Sans";
    font-weight: 600;
    padding-bottom: 16px;
  }
  
  .NewsFeed-text {
    color: #afafaf;
    line-height: 1.5;
  }
  
  .NewsFeed-readMore {
    font-family: "Fira Sans";
    font-weight: 600;
    color: #bebebe;
    display: block;
    text-align: right;
    padding-top: 16px;
  }
  .NewsFeed-readMore::after {
    font-family: sans-serif;
    content: ">";
    padding-left: 0.5em;
  }
  
  .Featured {
    color: #afafaf;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  @media (min-width: 720px) {
    .Featured {
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
      -ms-flex-pack: distribute;
          justify-content: space-around;
    }
  }
  @media (min-width: 1440px) {
    .Featured {
      margin-top: -200px;
    }
  }
  
  .Featured-copy {
    margin-right: 32px;
    margin-top: 28px;
  }
  
  .Featured-title {
    font-family: "Fira Sans";
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    .Featured-title {
      font-size: 36px;
    }
  }
  
  .Featured-text {
    font-size: 16px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    .Featured-text {
      font-size: 18px;
    }
  }
  
  .Featured-image {
    background: url("//placehold.it/508x360/eaeaea/d3d3d3");
    background-size: cover;
    background-position: 100%;
    padding-top: 50%;
    width: 100%;
    -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
            order: -1;
  }
  @media (min-width: 720px) {
    .Featured-image {
      margin-bottom: 0;
      max-width: 508px;
      -webkit-box-ordinal-group: 1;
          -ms-flex-order: 0;
              order: 0;
      padding-top: 33.333%;
    }
  }
  
  .Featured-button {
    background: #afafaf;
    color: #ffffff;
    padding: 15px 45px;
    font-size: 16px;
    margin-top: 35px;
    min-width: 190px;
  }
  
  .Gallery {
    color: #afafaf;
  }
  
  .Gallery-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0.5em;
  }
  @media (min-width: 720px) {
    .Gallery-title {
      font-size: 36px;
    }
  }
  
  .Gallery-text {
    line-height: 1.5;
    font-size: 18px;
  }
  
  .Gallery-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 50px;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  @media (min-width: 720px) {
    .Gallery-grid {
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
    }
  }
  
  .Gallery-image {
    min-width: 0;
    width: 100%;
  }
  .Gallery-image > img {
    height: auto;
    max-width: 100%;
    vertical-align: bottom;
  }
  @media (min-width: 324px) {
    .Gallery-image {
      width: 50%;
    }
  }
  
  .Contact {
    color: #afafaf;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  
  .Contact-forms {
    -webkit-box-flex: 2;
        -ms-flex: 2;
            flex: 2;
  }
  @media (min-width: 720px) {
    .Contact-forms {
      margin-right: 10%;
    }
  }
  
  .Contact-title {
    -webkit-box-flex: 100%;
        -ms-flex: 100%;
            flex: 100%;
    font-family: "Fira Sans";
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 0.5em;
  }
  @media (min-width: 720px) {
    .Contact-title {
      font-size: 36px;
    }
  }
  
  .Contact-text {
    line-height: 1.5;
  }
  
  .Contact-inputs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    margin: 40px auto;
    margin-bottom: 0;
  }
  @media (min-width: 720px) {
    .Contact-inputs {
      margin-bottom: 40px;
    }
  }
  .Contact-inputs input {
    color: #AFAFAF;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    font-family: "Fira Sans";
    font-size: 12px;
    border: none;
    letter-spacing: 0.333px;
    font-weight: 200;
    box-shadow: 0 1px 0 #bebebe;
    padding: 0;
    padding-bottom: 1em;
    margin-bottom: 40px;
  }
  @media (min-width: 324px) {
    .Contact-inputs input {
      -webkit-box-flex: 0;
          -ms-flex: 0 1 calc(50% - 22px);
              flex: 0 1 calc(50% - 22px);
    }
    .Contact-inputs input:nth-child(odd) {
      margin-right: 22px;
    }
  }
  
  .Contact-textarea {
    color: #AFAFAF;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin-bottom: 40px;
  }
  .Contact-textarea label {
    font-family: "Fira Sans";
    font-size: 12px;
    letter-spacing: 0.333px;
    font-weight: 200;
  }
  .Contact-textarea textarea {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 100%;
            flex: 1 1 100%;
    border-color: #bebebe;
    margin-top: 15px;
  }
  
  .Contact-button {
    background: #eaeaea;
    color: #afafaf;
    font-size: 16px;
    width: 100%;
    padding: 1em 2.5em;
  }
  @media (min-width: 324px) {
    .Contact-button {
      width: 150px;
    }
  }
  @media (min-width: 1440px) {
    .Contact-button {
      width: 190px;
    }
  }
  
  .Contact-image {
    display: none;
  }
  @media (min-width: 720px) {
    .Contact-image {
      display: block;
      background: url("//placehold.it/402x387/ffffff/D3D6DB");
      background-size: cover;
      background-position: center;
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      height: 308px;
      border: 1px solid #eaeaea;
      margin-bottom: 0;
      min-width: 280px;
      max-width: 400px;
    }
  }
  @media (min-width: 1440px) {
    .Contact-image {
      margin-right: -110px;
    }
  }
  
  .Footer {
    padding: 54px 32px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    background: #afafaf;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  @media (min-width: 720px) {
    .Footer {
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
    }
  }
  @media (min-width: 1440px) {
    .Footer {
      padding: 93px 67px;
    }
  }
  
  .Footer-map {
    display: none;
    background: url("//placehold.it/296x181/8C8C8C/F2F2F2");
    background-size: cover;
    background-position: center;
    width: 219px;
    height: 181px;
    margin-right: 20px;
  }
  @media (min-width: 720px) {
    .Footer-map {
      display: block;
    }
  }
  
  .Footer-contact {
    font-size: 12px;
    margin-bottom: 50px;
    width: 100%;
  }
  @media (min-width: 324px) {
    .Footer-contact {
      margin-bottom: 0;
      margin-right: 20px;
      width: auto;
    }
  }
  
  .Footer-contactTitle {
    color: #ffffff;
    margin-bottom: 10px;
  }
  
  .Footer-contactText {
    color: #D8D8D8;
    line-height: 1.75;
  }
  
  .Footer-social {
    margin-top: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  
  .Footer-socialIcon {
    background: #D8D8D8;
    width: 36px;
    height: 36px;
  }
  
  .Footer-newsletter {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  @media (min-width: 1440px) {
    .Footer-newsletter {
      margin-right: 90px;
    }
  }
  
  .Footer-newsletterTitle {
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 12px;
    display: none;
  }
  @media (min-width: 720px) {
    .Footer-newsletterTitle {
      display: block;
    }
  }
  
  .Footer-newsletterText {
    color: #D8D8D8;
    margin-bottom: 10px;
  }
  
  .Footer-newsletterInput {
    box-sizing: border-box;
    padding: 0 1em;
    border-radius: 3px;
    background: #ffffff;
    height: 40px;
    border: 0;
    margin-bottom: 25px;
  }
  
  .Footer-button {
    background: #eaeaea;
    color: #afafaf;
    font-size: 16px;
    width: 100%;
    padding: 1em 2.5em;
  }
  @media (min-width: 324px) {
    .Footer-button {
      width: 150px;
    }
  }
  @media (min-width: 1440px) {
    .Footer-button {
      width: 190px;
    }
  }
  `,
  10: `/**
* Computes a CSS calc function that betweens a value from
* A to B over A-viewport-width to B-viewport-width.
* Requires a media query to cap the value at B.
*/
body {
 -webkit-box-align: center;
     -ms-flex-align: center;
         align-items: center;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 font-family: 'Open Sans', sans-serif;
 font-size: 16px;
 -webkit-box-pack: center;
     -ms-flex-pack: center;
         justify-content: center;
}

section {
 padding: 16px;
}
@media (min-width: 324px) {
 section {
   padding: calc(2.90909px + 4.0404vw);
 }
}
@media (min-width: 720px) {
 section {
   padding: calc(-26px + 8.05556vw);
 }
}
@media (min-width: 1440px) {
 section {
   padding: 90px;
 }
}

button {
 background: #ffffff;
 border: none;
 border-radius: 3px;
}

a {
 text-decoration: none;
 color: #f9f9f9;
}

@media (min-width: 720px) {
 .u-narrowContainer {
   padding: calc(-58px + 10.27778vw) calc(-116px + 20.55556vw);
 }
}
@media (min-width: 1440px) {
 .u-narrowContainer {
   padding: 90px 180px;
 }
}

.u-breakout {
 margin: 0;
}
@media (min-width: 324px) {
 .u-breakout {
   margin: 0 calc(52.25806px + -16.12903vw);
 }
}
@media (min-width: 1440px) {
 .u-breakout {
   margin: 0 -180px;
 }
}

.Page {
 width: 100%;
 overflow: hidden;
 max-width: 1440px;
}

.Logo {
 width: 140px;
 height: 32px;
 background: #ffffff;
 border-radius: 8px;
}

.Navigation {
 -webkit-box-align: center;
     -ms-flex-align: center;
         align-items: center;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-pack: justify;
     -ms-flex-pack: justify;
         justify-content: space-between;
}

.Navigation-list {
 -webkit-box-align: center;
     -ms-flex-align: center;
         align-items: center;
 display: none;
}
@media (min-width: 720px) {
 .Navigation-list {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
 }
}

.Navigation-item {
 font-size: 12px;
}
@media (min-width: 720px) {
 .Navigation-item {
   font-size: calc(8px + 0.55556vw);
 }
}
@media (min-width: 1440px) {
 .Navigation-item {
   font-size: 16px;
 }
}
.Navigation-item + .Navigation-item {
 padding-left: 2em;
}

.Navigation-button {
 background: #ffffff;
 color: #afafaf;
 padding: 1em 2.5em;
 font-size: inherit;
}

.Hamburger {
 display: block;
}
@media (min-width: 720px) {
 .Hamburger {
   display: none;
 }
}
.Hamburger li {
 width: 36px;
 height: 5px;
 border-radius: 3px;
 background: #ffffff;
 margin-bottom: 4px;
}

.Hero {
 background: url("/assets/1440x900.jpg");
 background-size: cover;
 background-position: center;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
     -ms-flex-direction: column;
         flex-direction: column;
 height: 300px;
}
@media (min-width: 324px) {
 .Hero {
   height: calc(201.81818px + 30.30303vw);
 }
}
@media (min-width: 720px) {
 .Hero {
   height: calc(-60px + 66.66667vw);
 }
}
@media (min-width: 1440px) {
 .Hero {
   height: 900px;
 }
}

.Hero-content {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 padding: 0 10%;
 margin: auto 0;
}

.Hero-copy {
 color: #eaeaea;
}

.Hero-title {
 /* font-size 64px $large, 44px $medium, 36px $small */
 /* margin-bottom 40px $large, 30px $medium, 10px $small*/
 font-size: 36px;
 line-height: 1;
 font-weight: 700;
 color: #ffffff;
 margin-bottom: 10px;
}
@media (min-width: 324px) {
 .Hero-title {
   font-size: calc(29.45455px + 2.0202vw);
   margin-bottom: calc(-6.36364px + 5.05051vw);
 }
}
@media (min-width: 720px) {
 .Hero-title {
   font-size: calc(24px + 2.77778vw);
   margin-bottom: calc(20px + 1.38889vw);
 }
}
@media (min-width: 1440px) {
 .Hero-title {
   font-size: 64px;
   margin-bottom: 40px;
 }
}

.Hero-text {
 font-size: 12px;
 line-height: 1.5;
}
@media (min-width: 720px) {
 .Hero-text {
   font-size: calc(6px + 0.83333vw);
 }
}
@media (min-width: 1440px) {
 .Hero-text {
   font-size: 18px;
 }
}

.Hero-button {
 background: #ffffff;
 color: #afafaf;
 padding: 15px 45px;
 font-size: 10px;
 margin-top: 40px;
}
@media (min-width: 324px) {
 .Hero-button {
   font-size: calc(8.36364px + 0.50505vw);
 }
}
@media (min-width: 720px) {
 .Hero-button {
   font-size: calc(8px + 0.55556vw);
 }
}
@media (min-width: 1440px) {
 .Hero-button {
   font-size: 16px;
 }
}

.NewsFeed {
 color: #afafaf;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -ms-flex-wrap: wrap;
     flex-wrap: wrap;
}
@media (min-width: 720px) {
 .NewsFeed {
   margin-top: calc(-10px + -9.02778vw);
 }
}
@media (min-width: 1440px) {
 .NewsFeed {
   margin-top: -140px;
 }
}
@media (min-width: 720px) {
 .NewsFeed {
   -ms-flex-wrap: nowrap;
       flex-wrap: nowrap;
 }
}
.NewsFeed-image {
 background: url("//placehold.it/403x279/eaeaea/d3d3d3") no-repeat;
 background-size: cover;
 background-position: 100%;
 height: 200px;
}
@media (min-width: 720px) {
 .NewsFeed-image {
   height: calc(20px + 18.05556vw);
 }
}
@media (min-width: 1440px) {
 .NewsFeed-image {
   height: 280px;
 }
}

.NewsFeed-article {
 -webkit-box-flex: 1;
     -ms-flex: 1 1 auto;
         flex: 1 1 auto;
}
@media (min-width: 720px) {
 .NewsFeed-article {
   margin: 0 16px;
 }
}
.NewsFeed-article:not(:first-child) {
 display: none;
}
@media (min-width: 720px) {
 .NewsFeed-article:not(:first-child) {
   display: block;
 }
}

.NewsFeed-copy {
 margin-top: 28px;
}

.NewsFeed-title {
 font-family: "Fira Sans";
 font-size: 24px;
 padding-bottom: 32px;
 line-height: 1.4;
 font-weight: 600;
}

.NewsFeed-date {
 font-family: "Fira Sans";
 font-weight: 600;
 padding-bottom: 16px;
}

.NewsFeed-text {
 color: #afafaf;
 line-height: 1.5;
}

.NewsFeed-readMore {
 font-family: "Fira Sans";
 font-weight: 600;
 color: #bebebe;
 display: block;
 text-align: right;
 padding-top: 16px;
}
.NewsFeed-readMore::after {
 font-family: sans-serif;
 content: ">";
 padding-left: 0.5em;
}

.Featured {
 color: #afafaf;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-align: center;
     -ms-flex-align: center;
         align-items: center;
 -ms-flex-wrap: wrap;
     flex-wrap: wrap;
}
@media (min-width: 720px) {
 .Featured {
   -ms-flex-wrap: nowrap;
       flex-wrap: nowrap;
   -ms-flex-pack: distribute;
       justify-content: space-around;
 }
}

.Featured-copy {
 margin-right: 32px;
 margin-top: 28px;
}

.Featured-title {
 font-family: "Fira Sans";
 font-weight: 600;
 font-size: 24px;
 line-height: 1;
 margin-bottom: 16px;
}
@media (min-width: 720px) {
 .Featured-title {
   font-size: calc(12px + 1.66667vw);
 }
}
@media (min-width: 1440px) {
 .Featured-title {
   font-size: 36px;
 }
}

.Featured-text {
 font-size: 16px;
 line-height: 1.4;
}
@media (min-width: 720px) {
 .Featured-text {
   font-size: calc(14px + 0.27778vw);
 }
}
@media (min-width: 1440px) {
 .Featured-text {
   font-size: 18px;
 }
}

.Featured-image {
 background: url("//placehold.it/508x360/eaeaea/d3d3d3");
 background-size: cover;
 background-position: 100%;
 padding-top: 50%;
 width: 100%;
 -webkit-box-ordinal-group: 0;
     -ms-flex-order: -1;
         order: -1;
}
@media (min-width: 720px) {
 .Featured-image {
   margin-bottom: 0;
   max-width: 508px;
   -webkit-box-ordinal-group: 1;
       -ms-flex-order: 0;
           order: 0;
   padding-top: 33.333%;
 }
}

.Featured-button {
 background: #afafaf;
 color: #ffffff;
 padding: 15px 45px;
 font-size: 16px;
 margin-top: 35px;
 min-width: 190px;
}

.Gallery {
 color: #afafaf;
}

.Gallery-title {
 font-size: 24px;
 font-weight: 600;
 margin-bottom: 0.5em;
}
@media (min-width: 324px) {
 .Gallery-title {
   font-size: calc(14.18182px + 3.0303vw);
 }
}
@media (min-width: 720px) {
 .Gallery-title {
   font-size: 36px;
 }
}

.Gallery-text {
 line-height: 1.5;
 font-size: 18px;
}

.Gallery-grid {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 margin-top: 50px;
 -ms-flex-wrap: wrap;
     flex-wrap: wrap;
}
@media (min-width: 720px) {
 .Gallery-grid {
   -ms-flex-wrap: nowrap;
       flex-wrap: nowrap;
 }
}

.Gallery-image {
 min-width: 0;
 width: 100%;
}
.Gallery-image > img {
 height: auto;
 max-width: 100%;
 vertical-align: bottom;
}
@media (min-width: 324px) {
 .Gallery-image {
   width: 50%;
 }
}

.Contact {
 color: #afafaf;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-align: center;
     -ms-flex-align: center;
         align-items: center;
 -ms-flex-wrap: wrap;
     flex-wrap: wrap;
 -webkit-box-pack: justify;
     -ms-flex-pack: justify;
         justify-content: space-between;
}

.Contact-forms {
 -webkit-box-flex: 2;
     -ms-flex: 2;
         flex: 2;
}
@media (min-width: 720px) {
 .Contact-forms {
   margin-right: 10%;
 }
}

.Contact-title {
 -webkit-box-flex: 100%;
     -ms-flex: 100%;
         flex: 100%;
 font-family: "Fira Sans";
 font-size: 28px;
 font-weight: 700;
 margin-bottom: 0.5em;
}
@media (min-width: 324px) {
 .Contact-title {
   font-size: calc(21.45455px + 2.0202vw);
 }
}
@media (min-width: 720px) {
 .Contact-title {
   font-size: 36px;
 }
}

.Contact-text {
 line-height: 1.5;
}

.Contact-inputs {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -ms-flex-wrap: wrap;
     flex-wrap: wrap;
 margin: 40px auto;
 margin-bottom: 0;
}
@media (min-width: 324px) {
 .Contact-inputs {
   margin-bottom: calc(-32.72727px + 10.10101vw);
 }
}
@media (min-width: 720px) {
 .Contact-inputs {
   margin-bottom: 40px;
 }
}
.Contact-inputs input {
 color: #AFAFAF;
 -webkit-box-flex: 1;
     -ms-flex: 1 1 100%;
         flex: 1 1 100%;
 font-family: "Fira Sans";
 font-size: 12px;
 border: none;
 letter-spacing: 0.333px;
 font-weight: 200;
 box-shadow: 0 1px 0 #bebebe;
 padding: 0;
 padding-bottom: 1em;
 margin-bottom: 40px;
}
@media (min-width: 324px) {
 .Contact-inputs input {
   -webkit-box-flex: 0;
       -ms-flex: 0 1 calc(50% - 22px);
           flex: 0 1 calc(50% - 22px);
 }
 .Contact-inputs input:nth-child(odd) {
   margin-right: 22px;
 }
}

.Contact-textarea {
 color: #AFAFAF;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
     -ms-flex-direction: column;
         flex-direction: column;
 margin-bottom: 40px;
}
.Contact-textarea label {
 font-family: "Fira Sans";
 font-size: 12px;
 letter-spacing: 0.333px;
 font-weight: 200;
}
.Contact-textarea textarea {
 -webkit-box-flex: 1;
     -ms-flex: 1 1 100%;
         flex: 1 1 100%;
 border-color: #bebebe;
 margin-top: 15px;
}

.Contact-button {
 background: #eaeaea;
 color: #afafaf;
 font-size: 16px;
 width: 100%;
 padding: 1em 2.5em;
}
@media (min-width: 324px) {
 .Contact-button {
   width: 150px;
 }
}
@media (min-width: 720px) {
 .Contact-button {
   width: calc(110px + 5.55556vw);
 }
}
@media (min-width: 1440px) {
 .Contact-button {
   width: 190px;
 }
}

.Contact-image {
 display: none;
}
@media (min-width: 720px) {
 .Contact-image {
   display: block;
   background: url("//placehold.it/402x387/ffffff/D3D6DB");
   background-size: cover;
   background-position: center;
   -webkit-box-flex: 1;
       -ms-flex: 1;
           flex: 1;
   height: 308px;
   border: 1px solid #eaeaea;
   margin-bottom: 0;
   min-width: 280px;
   margin-right: calc(110px + -15.27778vw);
   max-width: 400px;
 }
}
@media (min-width: 1440px) {
 .Contact-image {
   margin-right: -110px;
 }
}

.Footer {
 padding: 54px 32px;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-align: start;
     -ms-flex-align: start;
         align-items: flex-start;
 background: #afafaf;
 -ms-flex-wrap: wrap;
     flex-wrap: wrap;
}
@media (min-width: 324px) {
 .Footer {
   padding: 54px calc(38.54545px + -2.0202vw);
 }
}
@media (min-width: 720px) {
 .Footer {
   -ms-flex-wrap: nowrap;
       flex-wrap: nowrap;
   padding: calc(-25px + 8.19444vw) calc(-19px + 5.97222vw);
 }
}
@media (min-width: 1440px) {
 .Footer {
   padding: 93px 67px;
 }
}

.Footer-map {
 display: none;
 background: url("//placehold.it/296x181/8C8C8C/F2F2F2");
 background-size: cover;
 background-position: center;
 width: 219px;
 height: 181px;
}
@media (min-width: 720px) {
 .Footer-map {
   display: block;
 }
}

.Footer-content {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-flex: 1;
     -ms-flex: 1;
         flex: 1;
 -webkit-box-pack: justify;
     -ms-flex-pack: justify;
         justify-content: space-between;
 -ms-flex-wrap: wrap;
     flex-wrap: wrap;
}
@media (min-width: 324px) {
 .Footer-content {
   -ms-flex-wrap: nowrap;
       flex-wrap: nowrap;
   margin-left: calc(-16.36364px + 5.05051vw);
 }
}
@media (min-width: 720px) {
 .Footer-content {
   margin-left: calc(-90px + 15.27778vw);
 }
}
@media (min-width: 1440px) {
 .Footer-content {
   margin-left: 130px;
 }
}

.Footer-contact {
 font-size: 12px;
 margin-bottom: 50px;
 width: 100%;
}
@media (min-width: 324px) {
 .Footer-contact {
   margin-bottom: 0;
   margin-right: 20px;
   width: auto;
 }
}

.Footer-contactTitle {
 color: #ffffff;
 margin-bottom: 10px;
}

.Footer-contactText {
 color: #D8D8D8;
 line-height: 1.75;
}

.Footer-social {
 margin-top: 50px;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-pack: justify;
     -ms-flex-pack: justify;
         justify-content: space-between;
}

.Footer-socialIcon {
 background: #D8D8D8;
 width: 36px;
 height: 36px;
}

.Footer-newsletter {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-orient: vertical;
 -webkit-box-direction: normal;
     -ms-flex-direction: column;
         flex-direction: column;
 -webkit-box-pack: justify;
     -ms-flex-pack: justify;
         justify-content: space-between;
}
@media (min-width: 720px) {
 .Footer-newsletter {
   margin-right: calc(-90px + 12.5vw);
 }
}
@media (min-width: 1440px) {
 .Footer-newsletter {
   margin-right: 90px;
 }
}

.Footer-newsletterTitle {
 font-size: 24px;
 color: #ffffff;
 margin-bottom: 12px;
 display: none;
}
@media (min-width: 720px) {
 .Footer-newsletterTitle {
   display: block;
 }
}

.Footer-newsletterText {
 color: #D8D8D8;
 margin-bottom: 10px;
}

.Footer-newsletterInput {
 box-sizing: border-box;
 padding: 0 1em;
 border-radius: 3px;
 background: #ffffff;
 height: 40px;
 border: 0;
 margin-bottom: 25px;
}

.Footer-button {
 background: #eaeaea;
 color: #afafaf;
 font-size: 16px;
 width: 100%;
 padding: 1em 2.5em;
}
@media (min-width: 324px) {
 .Footer-button {
   width: 150px;
 }
}
@media (min-width: 720px) {
 .Footer-button {
   width: calc(110px + 5.55556vw);
 }
}
@media (min-width: 1440px) {
 .Footer-button {
   width: 190px;
 }
}
`,
  11: ``,
  12: `/**
* Computes a CSS calc function that betweens a value from
* A to B over A-viewport-width to B-viewport-width.
* Requires a media query to cap the value at B.
*/
html {
 font-size: 10px;
}
@media (min-width: 425px) {
  html {
   font-size: calc(4.32387px + 1.33556vw);
 }
}
@media (min-width: 1024px) {
  html {
   font-size: 18px;
 }
}

html, body {
 min-height: 100vh;
}

body {
 background: #89c1bd;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-pack: center;
     -ms-flex-pack: center;
         justify-content: center;
 -webkit-box-align: center;
     -ms-flex-align: center;
         align-items: center;
}

.Card {
 background: #ffffff;
 border-radius: 5px;
 width: 22rem;
 margin: auto;
 padding: 1.25rem;
}

.Image {
 background: #c4c8cb;
 border-radius: 3px;
 height: 10rem;
 margin-bottom: 1.5rem;
}

.Paragraph {
 background: #c4c8cb;
 border-radius: 3px;
 margin-bottom: 0.65rem;
 height: 1rem;
}

.text-paragraph {
  margin-bottom: 0.5rem  
}

.Paragraph--small {
 height: 0.75rem;
}
.Paragraph:last-child {
 margin-bottom: 0;
}

.Heading {
 height: 1.5rem;
 background: #aeb2b7;
 border-radius: 3px;
 margin-bottom: 1rem;
}

.ButtonGroup {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
}

.Button {
 background: #a9c3d2;
 height: 2.25rem;
 width: 50%;
 border-radius: 6px;
}
.Button--cta {
 background: #3a908a;
}
.Button + .Button {
 margin-left: 1rem;
}

br {
 display: block;
 margin-bottom: 1.5rem;
 content: '';
}

.w-25 {
 width: 25%;
}

.w-50 {
 width: 50%;
}

.w-75 {
 width: 75%;
}

.w-90 {
 width: 90%;
}

.right {
 margin-left: auto;
}
`,
  13: `
  body {
    background: white;
  }`,
  14: ``,
  15: ``
};
