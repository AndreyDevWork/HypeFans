export default class Cookies {
  setCookie(name, value, maxAge) {
    const cookieValue = encodeURIComponent(value) + "; max-age=" + maxAge;
    document.cookie = name + "=" + cookieValue + "; path=/";
  }

  getCookie(name) {
    const cookies = document.cookie.split(';'); 
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const [cookieName, cookieValue] = cookie.split('=');
      if (name === cookieName) {
        return cookieValue;
      }
    }
  }
}