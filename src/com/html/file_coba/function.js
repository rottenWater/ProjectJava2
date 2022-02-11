function klikIni() {
    alert("Terima kasih sudah klik saya")
}

const angka = 100;
try {
angka = 10;

function gantiCost() {
    angka = 90;
}
} catch (error) {
    console.log("error const");
}

console.log("const = "+angka);

let angka2 = 500; // variablenya TIDAK BISA di deklarasikan ulang
angka2 = 350;

console.log(angka2);

var angka3 = 900; // variablenya BISA di deklarasikan ulang
//logic var angka3 1
console.log(angka3);

var angka3 = 120;
// logic 2
console.log(angka3);

angka3 = "number";
// logic 2
console.log(angka3);

// function parameter
function mahasiswa(nama, alamat, ipk) {
    document.write(nama +"<br>"+alamat+"<br>"+ipk);
}

// return state
function returnState(params) {
    
}

// var myHoby = {
//     hoby: "football",
//     func: function(){
//         var self = this;
//         document.write("outer func: this.hoby = " + this.hoby + "<br />");
//         document.write("outer func: self.hoby = " + self.hoby + "<br />");

//         (function(){
//             document.write("inner func: this.hoby = " + this.hoby + "<br />");
//             document.write("inner func: self.hoby = " + self.hoby);
//         })

//     }

// }

function hobby(){
    
    var myHoby = {
        hoby: "football",
        func: function(){
            var self = this;
            document.write("outer func: this.hoby = " + this.hoby + "<br />");
            document.write("outer func: self.hoby = " + self.hoby + "<br />");
    
            (function(){
                document.write("inner func: this.hoby = " + this.hoby + "<br />");
                document.write("inner func: self.hoby = " + self.hoby);
            }());
    
        }
    
    }

}

console.log(hobby);