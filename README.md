
# LEARN JSON

JSON atau javascript object notation adalah sebuah struktur data sebagai teks yang biasanya dipergunakan untuk pertukaran data antar jaringan atau server

file .json :

    {
        "nama": [
            "Haydar Hilmy Alhakim",
            "John Cena",
            "Mark Zuckerberg",
            "Bill Gates",
            12,
            -0.3,
            ["halo", "halo2"],
            {"subnama":"Hello World"}
        ]
    }

Dalam file json tersebut terdapat sebuah object "nama" yang mempunyai array dengan berbagai tipe data

semisal jika ingin menampilkan "John Cena".
berarti -> object.nama[1]

semisal ingin menampilkan "Hello World".
berarti -> object.nama[7].subnama

semisal ingin menampilkan "halo2".
maka object.nama[6][1]
