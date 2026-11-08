(function () {
  var abas = document.querySelectorAll(".aba-dia");
  var paineis = document.querySelectorAll(".painel-dia-grade");
  if (!abas.length || !paineis.length) return;

  function ativarDia(abaEscolhida) {
    var diaId = abaEscolhida.getAttribute("data-dia");
    abas.forEach(function (aba) {
      var ativa = aba === abaEscolhida;
      aba.classList.toggle("aba-dia-ativa", ativa);
      aba.setAttribute("aria-selected", ativa ? "true" : "false");
    });

    paineis.forEach(function (painel) {
      var corresponde = painel.id === "painel-" + diaId;
      painel.hidden = !corresponde;
    });
  }

  abas.forEach(function (aba, idx) {
    aba.addEventListener("click", function () {
      ativarDia(aba);
    });

    aba.addEventListener("keydown", function (ev) {
      if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
        ev.preventDefault();
        var dir = ev.key === "ArrowRight" ? 1 : -1;
        var prox = (idx + dir + abas.length) % abas.length;
        abas[prox].focus();
        ativarDia(abas[prox]);
      }
    });
  });
})();
