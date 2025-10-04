function entrarApp() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("contenido").style.display = "block";
}

// --- RETOS ---
const retos = [
    "Evita usar botellas plásticas 🚫🥤",
    "Planta una semilla 🌱",
    "Camina o usa bicicleta 🚴‍♀️",
    "Apaga luces innecesarias 💡",
    "Usa bolsas reutilizables 🛍️"
];
const retoDia = retos[Math.floor(Math.random() * retos.length)];
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("reto").innerText = "🔥 Reto del día: " + retoDia;
});

let puntos = 0;
let acciones = [];

// Guardar acción
function guardarAccion() {
    const input = document.getElementById("accion");
    if (input.value.trim() === "") return;
    acciones.push(input.value);
    puntos += 5;
    actualizarUI();
    input.value = "";
}
function actualizarUI() {
    const lista = document.getElementById("acciones");
    const puntosSpan = document.getElementById("puntos");
    lista.innerHTML = "";
    acciones.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a + " ✅";
        lista.appendChild(li);
    });
    puntosSpan.innerText = puntos;
}

// --- INFORMACIÓN ---
function mostrarInfo(tipo) {
    const info = {
        reciclaje: "♻️ El reciclaje es clave para reducir la cantidad de residuos que terminan en los vertederos y para conservar recursos naturales como el agua, la madera y los minerales. Separar correctamente los materiales, reutilizarlos y apoyar programas de reciclaje ayuda a disminuir la contaminación y fomenta una economía circular. Además, reciclar inspira a las personas de tu entorno a cuidar más el planeta.",
        
        energia: "💡 La energía que consumimos proviene en su mayoría de fuentes que contaminan el aire y contribuyen al cambio climático. Ahorrar energía no solo reduce el gasto, también protege el ambiente. Usa bombillos LED, apaga dispositivos que no uses, aprovecha la luz natural y opta por energías renovables como la solar o eólica. ¡Cada pequeño cambio suma un gran impacto positivo!",
        
        agua: "💧 El agua es un recurso esencial y limitado. En muchos lugares del mundo ya escasea debido al consumo excesivo y la contaminación. Cierra el grifo mientras te cepillas, repara fugas, reutiliza el agua cuando sea posible y evita arrojar desechos a los ríos o alcantarillas. Cada gota cuenta, y ahorrar agua hoy garantiza que las futuras generaciones también puedan disfrutarla.",
        
        sostenibilidad: "🌍 La sostenibilidad busca satisfacer nuestras necesidades sin comprometer las de las futuras generaciones. Significa cuidar el planeta, promover la justicia social y mantener una economía equilibrada. Vivir sosteniblemente es consumir con conciencia, reducir residuos, cuidar los ecosistemas y apoyar productos locales y ecológicos. Ser sostenible no es hacer todo perfecto, sino mejorar un poco cada día.",
        
        cambio: "🌡️ El cambio climático es uno de los mayores retos del siglo XXI. Es causado principalmente por el exceso de gases de efecto invernadero, generados por actividades humanas como la quema de combustibles fósiles, la deforestación y la ganadería intensiva. Sus consecuencias incluyen olas de calor, sequías, inundaciones y pérdida de biodiversidad. Puedes ayudar reduciendo tu huella de carbono: usa transporte público, planta árboles y evita el desperdicio de alimentos.",
        
        consumo: "🛒 El consumo responsable consiste en elegir productos que sean amigables con el medio ambiente y justos con las personas que los producen. Compra solo lo que realmente necesites, evita plásticos de un solo uso, apoya a productores locales y revisa si las marcas que consumes son sostenibles. Al consumir con conciencia, contribuyes a una economía más justa, ecológica y humana."
    };

    document.getElementById("infoDetalle").innerText = info[tipo];
}


// --- TRIVIA ---
const preguntas = [
    { texto: "¿Qué contenedor usa el papel?", opciones: ["Azul", "Verde", "Amarillo"], correcta: 0 },
    { texto: "¿Cuál de estas energías es renovable?", opciones: ["Solar", "Petróleo", "Carbón"], correcta: 0 },
    { texto: "¿Qué se debe hacer con el agua mientras te cepillas?", opciones: ["Dejarla correr", "Cerrar la llave", "Tirar jabón"], correcta: 1 },
    { texto: "¿Qué color de cesto se usa para el plástico?", opciones: ["Amarillo", "Verde", "Gris"], correcta: 0 }
];
let preguntaActual = 0;

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    document.getElementById("pregunta").innerText = pregunta.texto;
    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";
    pregunta.opciones.forEach((op, i) => {
        const btn = document.createElement("button");
        btn.textContent = op;
        btn.onclick = () => verificarRespuesta(i);
        opcionesDiv.appendChild(btn);
    });
}
function verificarRespuesta(indice) {
    const correcta = preguntas[preguntaActual].correcta;
    const mensaje = document.getElementById("mensajeTrivia");
    if (indice === correcta) {
        puntos += 5;
        mensaje.textContent = "🎉 ¡Correcto! ¡Sigue asi!";
        mensaje.style.color = "#2e7d32";
    } else {
        mensaje.textContent = "💀 Incorrecto. ¡Vuelve a intentarlo!";
        mensaje.style.color = "red";
    }
    document.getElementById("puntos").innerText = puntos;
    preguntaActual = (preguntaActual + 1) % preguntas.length;
    setTimeout(() => mostrarPregunta(), 1500);
}

// --- JUEGO DE RECICLAJE ---
const residuos = [
    { nombre: "Botella de plástico 🧴", tipo: "plastico" },
    { nombre: "Periódico 📄", tipo: "papel" },
    { nombre: "Frasco 🍾", tipo: "vidrio" },
    { nombre: "Lata de refresco 🥫", tipo: "metal" },
    { nombre: "Cáscara de guineo 🍌", tipo: "organico" },
    { nombre: "Caja de cartón 📦", tipo: "papel" },
    { nombre: "Envase de yogurt 🧃", tipo: "plastico" },
    { nombre: "Clavo oxidado 🔩", tipo: "metal" }
];

function iniciarJuego() {
    const contenedor = document.getElementById("residuos");
    contenedor.innerHTML = "";
    residuos.forEach(r => {
        const div = document.createElement("div");
        div.classList.add("residuo");
        div.textContent = r.nombre;
        div.draggable = true;
        div.dataset.tipo = r.tipo;
        div.addEventListener("dragstart", e => e.dataTransfer.setData("tipo", r.tipo));
        contenedor.appendChild(div);
    });

    document.querySelectorAll(".cesto").forEach(cesto => {
        cesto.addEventListener("dragover", e => e.preventDefault());
        cesto.addEventListener("drop", e => {
            const tipo = e.dataTransfer.getData("tipo");
            const residuo = [...document.querySelectorAll(".residuo")].find(r => r.dataset.tipo === tipo);
            if (cesto.dataset.tipo === tipo) {
                cesto.classList.add("correcto");
                document.getElementById("mensajeJuego").innerText = "✅ ¡Bien hecho!";
                puntos += 5;
                if (residuo) residuo.remove();
            } else {
                document.getElementById("mensajeJuego").innerText = "❌ ¡Ups! Ese no va ahí.";
            }
            document.getElementById("puntos").innerText = puntos;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarPregunta();
    iniciarJuego();
});
