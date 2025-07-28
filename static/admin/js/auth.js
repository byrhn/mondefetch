import { GoTrue } from 'gotrue-js';

export const auth = new GoTrue({
  APIUrl: 'https://mondefetch.netlify.app/.netlify/identity', // Sitenizin URL'si
  setCookie: true
});

// Kullanıcı giriş fonksiyonu
export const login = (email, password) => {
  return auth.login(email, password, true); // 3. parametre: kalıcı oturum
};