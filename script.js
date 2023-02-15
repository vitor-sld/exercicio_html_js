const form = document.getElementById('formularioComparacao')


function validador(a, b) {
    let resultadoValidado = b - a > 0 ? true : false
    return resultadoValidado;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valorA = document.getElementById('valorA');
    let valorB = document.getElementById('valorB');
    let pError = document.getElementById('errorMessage');
    let pSuccess = document.getElementById('successMessage');
    let messageErro = `Este elemento não pode ser maior ou igual ao valor B, por favor, insira um valor válido`;
    let messageSucesso = `O valor B é maior que o valor A`;



    let resultado = validador(valorA.value, valorB.value);

    if (resultado) {
        pSuccess.innerHTML = messageSucesso;

        if (pSuccess.classList.contains('hidden')) {
            pSuccess.classList.remove('hidden')
        }

        if (!pError.classList.contains('hidden')) {
            pError.classList.add('hidden')
        }


    } else {
        pError.innerHTML = messageErro;

        if (!pSuccess.classList.contains('hidden')) {
            pSuccess.classList.add('hidden')
        }

        if (pError.classList.contains('hidden')) {
            pError.classList.remove('hidden')
        }
    }

});
