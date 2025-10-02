// Retos sostenibles
const retos = [
    "Hoy evita usar botellas plásticas 🚫🥤",
    "Planta una semilla 🌱",
    "Camina en vez de usar el carro 🚶‍♂️",
    "Ahorra energía apagando luces innecesarias 💡",
    "Usa una bolsa reutilizable 🛍️"
];

// Reto del día aleatorio
const retoDia = retos[Math.floor(Math.random() * retos.length)];
document.getElementById("reto").innerText = "🔥 Reto del día: " + retoDia;

let puntos = 0;
let acciones = [];

function guardarAccion() {
    const input = document.getElementById("accion");
    if (input.value.trim() === "") return;

    // Guardamos acción
    acciones.push(input.value);

    // Sumamos puntos
    puntos += 10;

    // Actualizamos UI
    actualizarUI();

    input.value = "";
}

function actualizarUI() {
    const lista = document.getElementById("acciones");
    const puntosSpan = document.getElementById("puntos");

    // Limpiar y actualizar lista de acciones
    lista.innerHTML = "";
    acciones.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a;
        lista.appendChild(li);
    });

    // Actualizar puntos
    puntosSpan.innerText = puntos;
}

// Información educativa ampliada
function mostrarInfo(tipo) {
    const info = {
        reciclaje: "El reciclaje reduce la cantidad de residuos que van a los vertederos y ayuda a conservar recursos naturales como agua, madera y minerales. Separar plásticos, vidrios y papel, y llevarlos a puntos de reciclaje, contribuye a disminuir la contaminación y genera oportunidades económicas. Además, reciclar fomenta la conciencia ambiental y puede inspirar a otras personas a cuidar el planeta.",
        energia: "Ahorrar energía disminuye la contaminación del aire y reduce el uso de combustibles fósiles, principales responsables del cambio climático. Apagar luces innecesarias, usar focos LED, desconectar aparatos eléctricos cuando no se usan y optar por energías renovables son acciones concretas que pueden tener un gran impacto. Cada kilovatio ahorrado ayuda a proteger nuestros ecosistemas y a reducir costos en el hogar.",
        agua: "El agua es un recurso limitado y esencial para la vida. Cerrar la llave mientras te cepillas los dientes, reparar fugas, reutilizar agua de lluvia o para riego, y evitar desperdicios son formas de conservarla. El cuidado del agua protege la biodiversidad, mantiene la salud de los ecosistemas y asegura disponibilidad para futuras generaciones. Además, el uso responsable del agua ayuda a prevenir sequías y conflictos por este recurso vital.",
        sostenibilidad: "Ser sostenible significa satisfacer nuestras necesidades actuales sin comprometer a las futuras generaciones. Implica tomar decisiones conscientes sobre consumo, producción y manejo de recursos naturales. La sostenibilidad abarca la economía, sociedad y medio ambiente, buscando un equilibrio que permita vivir bien sin dañar el planeta. Adoptar hábitos sostenibles como reducir residuos, consumir responsablemente y promover energías limpias contribuye a un mundo más justo y saludable."
    };

    document.getElementById("infoDetalle").innerText = info[tipo];
}

