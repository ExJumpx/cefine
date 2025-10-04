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


// --- TRIVIA INTERACTIVA ---
const preguntas = [
{ pregunta: "♻️ ¿Qué color de contenedor se usa para el papel?", opciones: ["Verde", "Azul", "Amarillo"], correcta: "Azul" },
{ pregunta: "💡 ¿Cuál de estas acciones ahorra más energía?", opciones: ["Dejar la TV encendida", "Usar bombillos LED", "Usar focos incandescentes"], correcta: "Usar bombillos LED" },
{ pregunta: "💧 ¿Cuál es la mejor forma de cuidar el agua?", opciones: ["Lavar el auto con manguera", "Cerrar el grifo al cepillarte", "Dejar la llave abierta"], correcta: "Cerrar el grifo al cepillarte" },
{ pregunta: "🌍 ¿Qué significa sostenibilidad?", opciones: ["Usar todo sin pensar", "Cuidar los recursos para el futuro", "Consumir sin límites"], correcta: "Cuidar los recursos para el futuro" },
{ pregunta: "🌡️ ¿Qué causa el cambio climático?", opciones: ["Los gases de efecto invernadero", "El frío extremo", "La lluvia"], correcta: "Los gases de efecto invernadero" },
{ pregunta: "🛒 ¿Qué es consumo responsable?", opciones: ["Comprar sin pensar", "Evitar el plástico y apoyar lo local", "Tirar comida en buen estado"], correcta: "Evitar el plástico y apoyar lo local" },
{ pregunta: "🌳 ¿Qué ayuda a reducir el CO₂?", opciones: ["Talar árboles", "Plantar árboles", "Quemar basura"], correcta: "Plantar árboles" },
{ pregunta: "🚶‍♂️ ¿Qué transporte contamina menos?", opciones: ["Auto particular", "Caminar o usar bicicleta", "Moto"], correcta: "Caminar o usar bicicleta" },
{ pregunta: "🍃 ¿Qué es una energía renovable?", opciones: ["Carbón", "Solar", "Petróleo"], correcta: "Solar" },
{ pregunta: "🌊 ¿Qué pasa si arrojamos basura al mar?", opciones: ["Se limpia sola", "Afecta a los animales marinos", "Nada"], correcta: "Afecta a los animales marinos" },
{ pregunta: "🥤 ¿Qué material tarda más en degradarse?", opciones: ["Papel", "Plástico", "Cáscaras de frutas"], correcta: "Plástico" },
{ pregunta: "🔥 ¿Qué debemos hacer con los residuos peligrosos?", opciones: ["Botarlos en la calle", "Llevarlos a puntos especiales", "Quemarlos"], correcta: "Llevarlos a puntos especiales" },
{ pregunta: "🌾 ¿Qué ayuda a conservar la biodiversidad?", opciones: ["Usar pesticidas sin control", "Cuidar los ecosistemas", "Cazar animales"], correcta: "Cuidar los ecosistemas" },
{ pregunta: "📱 ¿Qué puedes hacer con un celular viejo?", opciones: ["Tirarlo", "Reciclarlo", "Guardarlo sin batería"], correcta: "Reciclarlo" },
{ pregunta: "🚿 ¿Cuál es un hábito sostenible?", opciones: ["Duchas cortas", "Dejar luces encendidas", "Usar bolsas plásticas"], correcta: "Duchas cortas" },
{ pregunta: "🍽️ ¿Qué puedes hacer para evitar el desperdicio de comida?", opciones: ["Servir solo lo necesario", "Cocinar de más", "Tirar lo que sobra"], correcta: "Servir solo lo necesario" },
{ pregunta: "🏠 ¿Cómo puedes reducir el consumo eléctrico?", opciones: ["Apagar luces innecesarias", "Usar muchos aparatos a la vez", "Dejar el aire encendido"], correcta: "Apagar luces innecesarias" },
{ pregunta: "🚯 ¿Qué significa reducir en las 3R?", opciones: ["Comprar más cosas", "Evitar generar basura", "Tirar todo"], correcta: "Evitar generar basura" },
{ pregunta: "🌞 ¿Cuál de estas es energía limpia?", opciones: ["Gas natural", "Energía solar", "Carbón"], correcta: "Energía solar" },
{ pregunta: "🧃 ¿Qué envase se puede reciclar?", opciones: ["Botella plástica", "Cáscara de plátano", "Comida cocida"], correcta: "Botella plástica" }
];

let preguntaActual = 0;

// --- FUNCIÓN PARA MOSTRAR PREGUNTA ---
function mostrarPregunta() {
if (preguntaActual >= preguntas.length) {
    document.getElementById("trivia-container").innerHTML = `
    <h3>🎉 ¡Has completado la trivia!</h3>
    <p>Increíble trabajo, has aprendido mucho sobre sostenibilidad 🌍</p>
    `;
    return;
}

const q = preguntas[preguntaActual];
const contenedor = document.getElementById("trivia-container");

contenedor.innerHTML = `
    <div class="pregunta-card">
    <h3>${q.pregunta}</h3>
    <div class="opciones">
        ${q.opciones
        .map(
            (op) => `<button class="opcion-btn" onclick="verificarRespuesta('${op}')">${op}</button>`
        )
        .join("")}
    </div>
    </div>
`;
}

// --- VERIFICAR RESPUESTA ---
function verificarRespuesta(respuesta) {
const correcta = preguntas[preguntaActual].correcta;
const mensaje = document.createElement("div");
mensaje.classList.add("mensaje-resultado");

if (respuesta === correcta) {
    puntos += 15;
    mensaje.innerHTML = `<p class="correcto">🎉 ¡Correcto! Ganas 15 puntos 🌟</p>`;
} else {
    mensaje.innerHTML = `<p class="incorrecto">😢 Mala suerte... la respuesta correcta era: <b>${correcta}</b></p>`;
}

document.getElementById("trivia-container").appendChild(mensaje);

setTimeout(() => {
    mensaje.remove();
    preguntaActual++;
    actualizarUI();
    mostrarPregunta();
}, 2500);
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
