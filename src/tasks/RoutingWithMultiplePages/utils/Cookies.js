// A simple, reusable set of cookie utility functions
export const cookieUtil = {
  // Create or Update cookie
  setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    // Use encodeURIComponent to handle special characters
    document.cookie =
      name + "=" + encodeURIComponent(value) + expires + "; path=/";
  },

  // Read cookie by name
  getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        // Use decodeURIComponent to retrieve the original value
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  },

  // Delete cookie
  eraseCookie(name) {
    // Set the cookie's expiration date to a time in the past
    document.cookie = name + "=; Max-Age=-99999999; path=/"; // Using Max-Age is a modern alternative
  },
};
