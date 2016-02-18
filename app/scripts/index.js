var condominio = $("#condominio"),
    cargarCondominios = function () {
        var condominios = getCondominios();

        for (var i = 0; i < condominios.length; i++) {
            condominio.append($("<option></option>")
                .attr("value", condominios[i])
                .text($('<div />').html(condominios[i]).text()));
        }
    },
    init = function () {
        setTimeout(function () {
            cargarCondominios();
        }, 250);
    };

init();