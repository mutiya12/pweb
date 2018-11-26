
function terimainput() {
    var a = document.getElementById("nama").value;

    var b = document.getElementById("tempat").value;
    var c = document.getElementById("tgl").value;
    var d = document.getElementById("bulan").value;
    var e = document.getElementById("tahun").value;
    var f = document.getElementsByClassName("Jkelamin").value;
    var h = document.getElementById("alamat").value;
    var i = document.getElementById("no-telp").value;
    var j = document.getElementById("no-KTP").value;
    var k = document.getElementById("pendidikan").value;
    var l = document.getElementById("pekerjaan").value;
    var m = document.getElementsByClassName("StatusK").value;

    var tabel = document.getElementById("inputan");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);

    if (a != null) {
        cell1.innerHTML = a;
        cell2.innerHTML = b + " " + c + " " + d + " " + e;
        cell3.innerHTML = f;
        cell4.innerHTML = h;
        cell5.innerHTML = i;
        cell6.innerHTML = j;
        cell7.innerHTML = k;
        cell8.innerHTML = l;
        cell9.innerHTML = m;
        
    } else {
        alert("Wah alert");
    }
}