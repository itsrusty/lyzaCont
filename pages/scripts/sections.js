// clientes
const clients = document.querySelector(".text-clients");
clients.addEventListener("click", () => {
  window.location.assign("./clients.html");
});

// facturas
const facturas = document.querySelector(".text-facturas");
facturas.addEventListener("click", () => {
  window.location.assign("./facturas.html");
});

// gastos recibidos
const gastosRecibidos = document.querySelector(".text-pagos");
gastosRecibidos.addEventListener("click", () => {
  window.location.assign("./pagos.recibidos.html");
});

// providers
const providers = document.querySelector(".text-providers");
providers.addEventListener("click", () => {
  window.location.assign("./providers.html");
});

// gastos realizados
const gastosRealizados = document.querySelector(".text-pagosRealizados");
gastosRealizados.addEventListener("click", () => {
  window.location.assign("./pagos.realizados.html");
});

// gastos
const gastos = document.querySelector(".text-gastos");
gastos.addEventListener("click", () => {
  window.location.assign("./gastos.html");
});
