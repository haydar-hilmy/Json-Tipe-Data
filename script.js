const myURL = "json001.json";

fetch(myURL)
    .then(response => response.json())
    .then(data => {
        console.log("Use Fetch: ", data);
    })

$(document).ready(function () {
    $.get(myURL, function (data) {
        console.log("Use Get Jquery: ", data);
        console.log("Nama index ke 1: ", data.nama[1]);
        console.log("Object didalam Object: ", data.nama[7].subnama);
        console.log("Print All:");
        for(let i = 0; i < data.nama.length; i++){
            console.log("Data ke-", i, "tipe data:", typeof data.nama[i], "isi data:", data.nama[i]);
        }
    });
})
