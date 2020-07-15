<template>
  <div></div>
</template>

<script>
export default {
  name: 'CookieBanner',
  mounted() {
    const CookieBanner = (function () {
      return {
        createCookieWhenBannerIsShown: false,
        createCookieWhenAcceptIsClicked: true,
        cookieDuration: 14, // Number of days before the cookie expires, and the banner reappears
        cookieName: 'cookieConsent', // Name of our cookie
        cookieValue: 'accepted', // Value of cookie

        _createDiv(html) {
          const bodytag = document.getElementsByTagName('body')[0];
          const div = document.createElement('div');
          div.setAttribute('id', 'cookie-law');
          div.innerHTML = html;

          // bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
          // or
          bodytag.insertBefore(div, bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag

          // Adds a class tothe <body> tag when the banner is visible
          document.getElementsByTagName('body')[0].className += ' cookiebanner';

          if (CookieBanner.createCookieWhenBannerIsShown) {
            CookieBanner.createAcceptCookie();
          }
        },

        _createCookie(name, value, days) {
          let expires;
          if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toGMTString();
          } else {
            expires = '';
          }
          document.cookie = name + '=' + value + expires + '; path=/';
        },

        _checkCookie(name) {
          const nameEQ = name + '=';
          const ca = document.cookie.split(';');
          for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
              return c.substring(nameEQ.length, c.length);
          }
          return null;
        },

        _eraseCookie(name) {
          CookieBanner._createCookie(name, '', -1);
        },

        createAcceptCookie() {
          CookieBanner._createCookie(
            CookieBanner.cookieName,
            CookieBanner.cookieValue,
            CookieBanner.cookieDuration
          ); // Create the cookie
        },

        closeBanner() {
          const element = document.getElementById('cookie-law');
          element.parentNode.removeChild(element);
        },

        accept() {
          CookieBanner.createAcceptCookie();
          CookieBanner.closeBanner();
        },

        showUnlessAccepted(html) {
          // alert(CookieBanner._checkCookie(CookieBanner.cookieName));
          // alert(document.cookie);
          if (
            CookieBanner._checkCookie(CookieBanner.cookieName) !==
            CookieBanner.cookieValue
          ) {
            CookieBanner._createDiv(html);
          }
        },
      };
    })();

    let html =
      '<div>' +
      'By using this website, you agree to our <a href="">Privacy Policy</a>' +
      '</div>';

    // Add the accept button
    html +=
      '<div><a href="javascript:void(0);" onclick="CookieBanner.accept();"><span>Close</span></a></div>';

    CookieBanner.showUnlessAccepted(html);
  },
};
</script>

<style>
#cookie-law {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 5%;
  background-color: #ccc;
  z-index: 999;
}

#cookie-law > div:first-child {
  padding-right: 40px;
}
#cookie-law > div:first-child > a {
  color: inherit;
}
#cookie-law > div:last-child {
  vertical-align: middle;
}
#cookie-law > div:last-child > a {
  padding: 10px 20px;
  background-color: rgb(226, 231, 144);
  border-radius: 5px;
  color: black;
  text-decoration: none;
}
</style>
