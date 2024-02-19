// const form = document.querySelector(".form-insert");
// const invalid = document.querySelectorAll(".form-control");

// form.addEventListener("submit", submitForm);

// function submitForm(e) {
//    e.preventDefault();

//    const validFalse = invalid.value;

//    if (validFalse === "") {
//       invalid.classList.add('is-invalid');
//    }
// }


// function validateForm() {
//     inputs = document.querySelectorAll('.form-control');
   
//    inputs.forEach(input => {
//        if (input.value.trim() === '') {
//            input.classList.add('is-invalid');
//     } else {
//         input.classList.remove('is-invalid');
//        }
//    });
// }
// return validateForm();

// function validateForm() {
//     alert("Berhasil");
// }

// validateForm()

// if (nama.value == "" &&
    //     nim.value == "" &&
    //     prodi.selectedIndex < 1 &&
    //     email.value == "" &&
    //     alamat.value == "" &&
    //     agama.value == "Agama") {
            
    //     } 
// }


// 1
// function validateForm() {
//     inputs = document.querySelectorAll('.form-control');

//     inputs.forEach(input => {
//         if (input.value == "") {
//             alert("oke")
//             // input.classList.add('is-invalid');
//             // input.focus();
//             return false;
//         } else {
//             input.classList.remove('is-invalid');
//         }
//     })

    // let nama = document.forms['formMhs']['nama'];
    // let nim = document.forms['formMhs']['nim'];
    // let prodi = document.forms['formMhs']['prodi'];
    // let email = document.forms['formMhs']['email'];
    // let alamat = document.forms['formMhs']['alamat'];
    // let agama = document.forms['formMhs']['agama'];

    // if (nama.value == '') {
    //     nama.classList.add('is-invalid');
    //     return false;
    // } else { nama.classList.remove('is-invalid')}

    // if (nim.value == '') {
    //     nim.classList.add('is-invalid');
    //     return false;
    // } else { nim.classList.remove('is-invalid') }

    // if (prodi.selectedIndex < 1) {
    //     prodi.classList.add('is-invalid');
    //     return false;
    // } else { prodi.classList.remove('is-invalid') }

    // if (email.value == '') {
    //     email.classList.add('is-invalid');
    //     return false;
    // } else { email.classList.remove('is-invalid') }

    // if (alamat.value == '') {
    //     alamat.classList.add('is-invalid');
    //     return false;
    // } else { alamat.classList.remove('is-invalid') }

    // if (agama.value == '') {
    //     agama.classList.add('is-invalid');
    //     return false;
    // } else { agama.classList.remove('is-invalid') }
// }

// 2


// const inputs = document.querySelector('.form-control')

let nim = document.forms['forms']['nim'];
let prodi = document.forms['forms']['prodi'];
let email = document.forms['forms']['email'];
let alamat = document.forms['forms']['alamat'];
let agama = document.forms['forms']['agama'];

function validateName() {
    let nama = document.getElementById('nama').value;

    if (nama.length == 0) {
        alert('ok');
        // inputs.classList.add('.is-invalid');
        return false;
    }
}