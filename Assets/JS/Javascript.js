function terimainput() {
    var namaBulan = ["Januari", "Februari", "Maret", "April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    var bulan = namaBulan[document.getElementById("bulan").value-1];
    // console.log(bulan)
    var a = document.getElementById("nama").value;
    var b = document.getElementById("tempat").value;
    var c = document.getElementById("tgl").value;
    var d = bulan;
    var e = document.getElementById("tahun").value;
    var f = document.querySelector("#gender").value;
    var h = document.getElementById("alamat").value;
    var i = document.getElementById("no-telp").value;
    var j = document.getElementById("no-KTP").value;
    var k = document.getElementById("pendidikan").value;
    var l = document.getElementById("pekerjaan").value;
    var m = document.querySelector("#status").value;
    var n = document.getElementById("email").value;
    var o = document.getElementById("password").value;

    // var tabel = document.getElementById("inputan");
    // var row = tabel.insertRow(1);
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // var cell4 = row.insertCell(3);
    // var cell5 = row.insertCell(4);
    // var cell6 = row.insertCell(5);
    // var cell7 = row.insertCell(6);
    // var cell8 = row.insertCell(7);
    // var cell9 = row.insertCell(8);

    if (a != "" && b != "" && c != "" && d != "" && e != "" && f != "" &&
        h != "" && i != "" && j != "" && k != "" && l != "" && m != ""&& n != ""&& o != "") {
        
        alert("Registrasi Berhasil");
        window.location.replace("http://localhost/ProjectKoperasi/awal.html")
    } else {
        alert("Maaf Semua Data tidak boleh kosong !");
    }
}