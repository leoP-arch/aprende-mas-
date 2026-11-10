// Configuración de Base de Datos Gratuita (Supabase Cloud + LocalStorage Fallback)
// Si deseas sincronizar en la nube con Supabase (Gratis), pega tu URL y API Key aquí:
const SUPABASE_URL = ""; // Ej: "https://xyzcompany.supabase.co"
const SUPABASE_ANON_KEY = ""; 
const DB_STORAGE_KEY = "aprende_plus_calificaciones_db";

// Guardar una calificación de Examen o Tarea
async function guardarCalificacionDB(registro) {
    const nuevoRegistro = {
        id: Date.now(),
        fecha: new Date().toISOString().split('T')[0],
        hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        grado: registro.grado,
        materia: registro.materia,
        tipo: registro.tipo, // "Examen" o "Tarea"
        titulo: registro.titulo,
        aciertos: registro.aciertos,
        total: registro.total,
        calificacion: Number(((registro.aciertos / registro.total) * 10).toFixed(1))
    };

    // 1. Guardar en Base de Datos Local Persistente
    const historialActual = JSON.parse(localStorage.getItem(DB_STORAGE_KEY) || "[]");
    historialActual.unshift(nuevoRegistro);
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(historialActual));

    // 2. Si hay credenciales de Supabase configuradas, replica en la nube gratis
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        try {
            await fetch(`${SUPABASE_URL}/rest/v1/calificaciones`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": SUPABASE_ANON_KEY,
                    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify(nuevoRegistro)
            });
        } catch (err) {
            console.warn("Guardado en modo local (sin conexión a Supabase):", err);
        }
    }

    return nuevoRegistro;
}

// Obtener todas las calificaciones desde la Base de Datos
async function obtenerCalificacionesDB(filtroFecha = "", filtroTipo = "Todos") {
    let datos = [];

    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        try {
            const res = await fetch(`${SUPABASE_URL}/rest/v1/calificaciones?select=*&order=id.desc`, {
                headers: {
                    "apikey": SUPABASE_ANON_KEY,
                    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
                }
            });
            if (res.ok) datos = await res.json();
        } catch (e) {
            datos = JSON.parse(localStorage.getItem(DB_STORAGE_KEY) || "[]");
        }
    } else {
        datos = JSON.parse(localStorage.getItem(DB_STORAGE_KEY) || "[]");
    }

    return datos.filter(item => {
        const coincideFecha = !filtroFecha || item.fecha === filtroFecha;
        const coincideTipo = filtroTipo === "Todos" || item.tipo === filtroTipo;
        return coincideFecha && coincideTipo;
    });
}