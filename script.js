/* =========================================================
   1. LÓGICA DE VENTANA INICIO (1 y 1.1) - BLOQUEO JERÁRQUICO
   ========================================================= */
function actualizarTemasInicio() {
    const grado = document.getElementById("select-grado").value;
    const selectTema = document.getElementById("select-tema");
    const selectLeccion = document.getElementById("select-leccion");

    selectTema.innerHTML = '<option value="">-- 2. Selecciona Tema --</option>';
    selectLeccion.innerHTML = '<option value="">-- 3. Selecciona Lección --</option>';
    selectLeccion.disabled = true; // Bloqueado hasta que se elija tema

    if (!grado) {
        selectTema.disabled = true;
        return;
    }

    const temas = Object.keys(CURRICULO_SECUNDARIA[grado]);
    temas.forEach(tema => {
        const opt = document.createElement("option");
        opt.value = tema;
        opt.textContent = tema;
        selectTema.appendChild(opt);
    });
    selectTema.disabled = false;
}

function actualizarLeccionesInicio() {
    const grado = document.getElementById("select-grado").value;
    const tema = document.getElementById("select-tema").value;
    const selectLeccion = document.getElementById("select-leccion");

    selectLeccion.innerHTML = '<option value="">-- 3. Selecciona Lección --</option>';

    if (!grado || !tema) {
        selectLeccion.disabled = true;
        return;
    }

    const lecciones = CURRICULO_SECUNDARIA[grado][tema].lecciones;
    lecciones.forEach((lec, index) => {
        const opt = document.createElement("option");
        opt.value = index;
        opt.textContent = lec.titulo;
        selectLeccion.appendChild(opt);
    });

    // Se desbloquea únicamente cuando ya hay un tema seleccionado
    selectLeccion.disabled = false;
}

function cargarLeccion() {
    const grado = document.getElementById("select-grado").value;
    const tema = document.getElementById("select-tema").value;
    const indiceLeccion = document.getElementById("select-leccion").value;

    if (grado && tema && indiceLeccion !== "") {
        const leccionObj = CURRICULO_SECUNDARIA[grado][tema].lecciones[indiceLeccion];
        document.getElementById("titulo-tema").innerText = `${grado} • ${tema}`;
        document.getElementById("subtitulo-aprendizaje").innerHTML = `<strong>Aprendizaje Esperado (SEP):</strong> ${leccionObj.aprendizaje}`;
        document.getElementById("titulo-leccion").innerText = leccionObj.titulo;
        document.getElementById("texto-leccion").innerHTML = `
            ${leccionObj.contenido}
            <div class="leccion-glosario">
                <strong>Glosario Curricular:</strong> ${leccionObj.glosario}
            </div>
        `;
    }
}

/* =========================================================
   2. LÓGICA DE VENTANA TAREAS (AUTOCALIFICABLE + BD)
   ========================================================= */
function actualizarTemasTareas() {
    const grado = document.getElementById("grado-tareas").value;
    const selectTema = document.getElementById("tema-tareas");
    selectTema.innerHTML = '<option value="">-- Selecciona Tema para abrir Tarea --</option>';

    if (!grado) {
        selectTema.disabled = true;
        return;
    }

    Object.keys(CURRICULO_SECUNDARIA[grado]).forEach(tema => {
        const opt = document.createElement("option");
        opt.value = tema;
        opt.textContent = tema;
        selectTema.appendChild(opt);
    });
    selectTema.disabled = false;
}

function cargarActividadesTarea() {
    const grado = document.getElementById("grado-tareas").value;
    const tema = document.getElementById("tema-tareas").value;
    const contenedor = document.getElementById("contenedor-preguntas-tarea");
    const acciones = document.getElementById("acciones-tarea");
    const banner = document.getElementById("resultado-tarea-banner");

    banner.className = "feedback-banner";
    banner.innerHTML = "";

    if (!grado || !tema) {
        contenedor.innerHTML = "<p>Selecciona un grado y un tema válidos.</p>";
        acciones.style.display = "none";
        return;
    }

    document.getElementById("encabezado-tarea").innerText = `Tarea: ${tema} (${grado})`;
    const preguntas = CURRICULO_SECUNDARIA[grado][tema].tareas;

    contenedor.innerHTML = preguntas.map((item, idx) => `
        <div class="question-card" id="card-tarea-${idx}">
            <h4>${item.pregunta}</h4>
            <div class="options-list">
                ${item.opciones.map((op, opIdx) => `
                    <label class="option-label">
                        <input type="radio" name="preg_tarea_${idx}" value="${opIdx}">
                        <span>${op}</span>
                    </label>
                `).join("")}
            </div>
        </div>
    `).join("");

    acciones.style.display = "block";
}

async function calificarYGuardarTarea() {
    const grado = document.getElementById("grado-tareas").value;
    const tema = document.getElementById("tema-tareas").value;
    const preguntas = CURRICULO_SECUNDARIA[grado][tema].tareas;

    let aciertos = 0;
    let respondidas = 0;

    preguntas.forEach((item, idx) => {
        const seleccion = document.querySelector(`input[name="preg_tarea_${idx}"]:checked`);
        const card = document.getElementById(`card-tarea-${idx}`);
        if (seleccion) {
            respondidas++;
            if (parseInt(seleccion.value) === item.correcta) {
                aciertos++;
                card.style.borderLeftColor = "#2E7D32";
            } else {
                card.style.borderLeftColor = "#C62828";
            }
        }
    });

    if (respondidas < preguntas.length) {
        alert("Por favor responde todas las actividades antes de calificar.");
        return;
    }

    const registroGuardado = await guardarCalificacionDB({
        grado: grado,
        materia: tema,
        tipo: "Tarea",
        titulo: "Actividad de Reforzamiento",
        aciertos: aciertos,
        total: preguntas.length
    });

    const banner = document.getElementById("resultado-tarea-banner");
    banner.className = "feedback-banner success";
    banner.innerHTML = `
        ¡Tarea calificada y guardada en la Base de Datos! 
        Obtuviste <strong>${aciertos} de ${preguntas.length} aciertos</strong> 
        (Calificación: <strong>${registroGuardado.calificacion} / 10</strong>). 
        Puedes consultarla en el apartado de <a href="calificacion.html" style="color: inherit; text-decoration: underline;">Calificación</a>.
    `;
}

/* =========================================================
   3. LÓGICA DE VENTANA EXAMEN (CAJONES DE PREGUNTAS + BD)
   ========================================================= */
let intervaloTiempo;

function actualizarMateriasExamen() {
    const grado = document.getElementById("grado-examen").value;
    const selectMateria = document.getElementById("materia-examen");
    const btn = document.getElementById("btn-comenzar-examen");

    selectMateria.innerHTML = '<option value="">-- Selecciona Materia --</option>';
    if (!grado) {
        selectMateria.disabled = true;
        btn.disabled = true;
        return;
    }

    Object.keys(CURRICULO_SECUNDARIA[grado]).forEach(materia => {
        const opt = document.createElement("option");
        opt.value = materia;
        opt.textContent = materia;
        selectMateria.appendChild(opt);
    });

    selectMateria.disabled = false;
    btn.disabled = false;
}

function iniciarExamen() {
    const grado = document.getElementById("grado-examen").value;
    const materia = document.getElementById("materia-examen").value;
    const contenedor = document.getElementById("contenedor-examen");

    if (!grado || !materia) {
        alert("Selecciona primero el grado y la materia a evaluar.");
        return;
    }

    const reactivos = CURRICULO_SECUNDARIA[grado][materia].examen;

    contenedor.innerHTML = `
        <div class="gob-header">
            <span class="gob-badge">${grado} • Evaluación Oficial</span>
            <h3>Examen de ${materia}</h3>
            <p style="font-size: 0.9rem; color: var(--texto-moka);">Contesta todas las preguntas encerradas en los cajones inferiores y presiona el botón final para registrar tu calificación.</p>
        </div>
        <div class="question-grid">
            ${reactivos.map((item, idx) => `
                <div class="question-card" id="card-examen-${idx}">
                    <h4>${item.pregunta}</h4>
                    <div class="options-list">
                        ${item.opciones.map((op, opIdx) => `
                            <label class="option-label">
                                <input type="radio" name="preg_examen_${idx}" value="${opIdx}">
                                <span>${op}</span>
                            </label>
                        `).join("")}
                    </div>
                </div>
            `).join("")}
        </div>
        <div style="margin-top: 25px;">
            <button class="primary-btn" onclick="finalizarYGuardarExamen('${grado}', '${materia}')">
                Finalizar Examen y Guardar en Base de Datos
            </button>
        </div>
        <div id="resultado-examen-banner" class="feedback-banner"></div>
    `;

    clearInterval(intervaloTiempo);
    let segundos = 480; // 8 minutos
    const display = document.getElementById("tiempo-restante");

    intervaloTiempo = setInterval(() => {
        segundos--;
        let min = Math.floor(segundos / 60);
        let seg = segundos % 60;
        display.innerText = `${min < 10 ? '0' : ''}${min}:${seg < 10 ? '0' : ''}${seg}`;
        if (segundos <= 0) {
            clearInterval(intervaloTiempo);
            finalizarYGuardarExamen(grado, materia, true);
        }
    }, 1000);
}

async function finalizarYGuardarExamen(grado, materia, porTiempo = false) {
    const reactivos = CURRICULO_SECUNDARIA[grado][materia].examen;
    let aciertos = 0;
    let respondidas = 0;

    reactivos.forEach((item, idx) => {
        const seleccion = document.querySelector(`input[name="preg_examen_${idx}"]:checked`);
        const card = document.getElementById(`card-examen-${idx}`);
        if (seleccion) {
            respondidas++;
            if (parseInt(seleccion.value) === item.correcta) {
                aciertos++;
                card.style.borderLeftColor = "#2E7D32";
            } else {
                card.style.borderLeftColor = "#C62828";
            }
        }
    });

    if (!porTiempo && respondidas < reactivos.length) {
        alert("Responde todas las preguntas de los cajones antes de enviar el examen.");
        return;
    }

    clearInterval(intervaloTiempo);

    const registro = await guardarCalificacionDB({
        grado: grado,
        materia: materia,
        tipo: "Examen",
        titulo: "Evaluación Parcial",
        aciertos: aciertos,
        total: reactivos.length
    });

    const banner = document.getElementById("resultado-examen-banner");
    banner.className = "feedback-banner success";
    banner.innerHTML = `
        ¡Examen concluido y registrado en la Base de Datos! 
        Aciertos: <strong>${aciertos} / ${reactivos.length}</strong> | 
        Calificación Final: <strong>${registro.calificacion} / 10</strong>. 
        Revisa tu boleta en <a href="calificacion.html" style="color: inherit; text-decoration: underline;">Calificación</a>.
    `;
}

/* =========================================================
   4. LÓGICA DE VENTANA CALIFICACIÓN (CONSULTA A LA BD)
   ========================================================= */
async function renderizarTablaCalificaciones() {
    const tbody = document.getElementById("tabla-calificaciones-body");
    if (!tbody) return;

    const filtroFecha = document.getElementById("fecha-calif").value;
    const filtroTipo = document.getElementById("filtro-tipo-calif").value;

    const registros = await obtenerCalificacionesDB(filtroFecha, filtroTipo);

    if (registros.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; color: var(--texto-moka); padding: 25px;">
                    No hay calificaciones registradas aún en la Base de Datos para este filtro. 
                    Realiza una <strong>Tarea</strong> o un <strong>Examen</strong> para ver tus resultados aquí.
                </td>
            </tr>
        `;
        document.getElementById("promedio-general-badge").innerText = "Promedio General: --";
        return;
    }

    let suma = 0;
    tbody.innerHTML = registros.map(reg => {
        suma += reg.calificacion;
        const claseBadge = reg.tipo === "Examen" ? "badge-examen" : "badge-tarea";
        return `
            <tr>
                <td>${reg.fecha} <small style="color: var(--texto-moka);">(${reg.hora})</small></td>
                <td>${reg.grado}</td>
                <td><strong>${reg.materia}</strong></td>
                <td><span class="badge-tipo ${claseBadge}">${reg.tipo}</span></td>
                <td>${reg.aciertos} / ${reg.total}</td>
                <td><strong style="font-size: 1.05rem;">${reg.calificacion}</strong></td>
            </tr>
        `;
    }).join("");

    const promedio = (suma / registros.length).toFixed(2);
    document.getElementById("promedio-general-badge").innerText = `Promedio General: ${promedio}`;
}

function limpiarFiltroFecha() {
    document.getElementById("fecha-calif").value = "";
    document.getElementById("filtro-tipo-calif").value = "Todos";
    renderizarTablaCalificaciones();
}

// Inicialización automática en la ventana de Calificaciones
document.addEventListener("DOMContentLoaded", () => {
    if (document.body.getAttribute("data-page") === "calificacion") {
        renderizarTablaCalificaciones();
    }
});