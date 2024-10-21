document.getElementById("notaForm").addEventListener("submit", function (event) {
event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener valores del formulario
    let nombre = document.getElementById("nombre").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);

    // Calcular la nota final ponderada
    let notaFinal = nota1 * 0.2 + nota2 * 0.3 + nota3 * 0.4 + nota4 * 0.1;

    // Determinar si el estudiante aprueba o reprueba
    let estado = notaFinal >= 3.0 ? "APROBADO" : "REPROBADO";
    let claseResultado = notaFinal >= 3.0 ? "aprobado" : "reprobado";

    // Mostrar el resultado
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Estudiante: ${nombre}<br>Nota Final: ${notaFinal.toFixed(
    2
    )}<br>Estado: <span class="${claseResultado}">${estado}</span>`;
    });
