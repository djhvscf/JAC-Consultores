var condominio = $("#condominio"),
    cargarCondominios = function () {
        var condominios = getCondominios();

        for (var i = 0; i < condominios.length; i++) {
            condominio.append($("<option></option>")
                .attr("value", condominios[i])
                .text($('<div />').html(condominios[i]).text()));
        }
    },
    tipoPropiedad = function () {
        $("#ingPropiedad input[name='tipoalq']").click(function(){
            if($('input:radio[name=tipoalq]:checked').val() === "casa"){
                $("#areacomp").hide();
                $(".cuotaseg").show();
                $(".cuotamant").hide();
            } else {
                $("#areacomp").show();
                $(".cuotaseg").hide();
                $(".cuotamant").show();
            }
        });
    }
    init = function () {
        setTimeout(function () {
            cargarCondominios();
        }, 250);
        tipoPropiedad();
    };

init();