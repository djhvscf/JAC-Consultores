//Variables
var url = "../db.xlsx",
    oReq = new XMLHttpRequest(),
    workbook = null;

$( document ).ready(function() {
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function(e) {
        var arraybuffer = oReq.response;

        /* convert data to binary string */
        var data = new Uint8Array(arraybuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) {
            arr[i] = String.fromCharCode(data[i]);
        }
        workbook = XLSX.read(arr.join(""), {type:"binary"});
    };

    oReq.send();
});


var getCondominios = function () {
    var obj = workbook.Sheets[workbook.SheetNames[0]],
        array = [];
    for (var prop in obj) {
        array.push(obj[prop].v);
    }

    return array;
};


/*
var first_sheet_name = workbook.SheetNames[0];
var address_of_cell = 'A1';
var worksheet = workbook.Sheets[first_sheet_name];
var desired_cell = worksheet[address_of_cell];
var desired_value = desired_cell.v;
*/