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


            var xlsxWriter = new SimpleExcel.Writer.CSV();
            var xlsxSheet = new SimpleExcel.Sheet();
            var Cell = SimpleExcel.Cell;
            xlsxSheet.records.push([
                [new Cell('ID', 'TEXT'), new Cell('Nama', 'TEXT'), new Cell('Kode Wilayah', 'TEXT')],
                [new Cell(1, 'NUMBER'), new Cell('Kab. Bogor', 'TEXT'), new Cell(1, 'NUMBER')],
                [new Cell(2, 'NUMBER'), new Cell('Kab. Cianjur', 'TEXT'), new Cell(1, 'NUMBER')],
                [new Cell(3, 'NUMBER'), new Cell('Kab. Sukabumi', 'TEXT'), new Cell(1, 'NUMBER')],
                [new Cell(4, 'NUMBER'), new Cell('Kab. Tasikmalaya', 'TEXT'), new Cell(2, 'NUMBER')]
            ]);
            xlsxWriter.insertSheet(xlsxSheet);
            // export when button clicked

                xlsxWriter.saveFile(); // pop! ("Save As" dialog appears)
            


        });
    }
    init = function () {
        setTimeout(function () {
            cargarCondominios();
        }, 250);
        tipoPropiedad();
    };

init();