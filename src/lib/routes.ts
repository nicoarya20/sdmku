export const pages = {
  "/": "/",
  "/masuk/verifikasi/[userid]": ({ userid }: { userid: string }) =>
    `/masuk/verifikasi/${userid}`,
  "/masuk/login": "/masuk/login",
  "/auth/verifikasi": "/auth/verifikasi",
  "/auth/registrasi": "/auth/registrasi",
  "/application/home": "/application/home",
};

export const apies = {
  "/masuk/api/ver": "/masuk/api/ver",
  "/masuk/api/login": "/masuk/api/login",
  "/api/auth/verifikasi": "/api/auth/verifikasi",
  "/api/auth/registrasi": "/api/auth/registrasi",
  "/api/auth/login": "/api/auth/login",
  "/api/auth/logout": "/api/auth/logout",
};
