const figure = document.querySelector('#user_list')
const elClick = document.querySelector('#click')
const conversaciones = [
    {
        userId: 1,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 09:30:00",
                mensaje: "Hola, ¿cómo estás?",
                remitente: "Juan Pérez",
            },
            {
                fechaEnvio: "2023-10-27 09:35:00",
                mensaje: "¡Hola! Estoy bien, ¿y tú?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 09:40:00",
                mensaje: "Yo también estoy bien, ¿qué has estado haciendo?",
                remitente: "Juan Pérez",
            },
        ]
    },
    {
        userId: 2,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 10:15:00",
                mensaje: "Hola María, ¿cómo te va?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 10:20:00",
                mensaje: "Hola Miguel, todo bien. ¿Qué has estado haciendo?",
                remitente: "María García",
            },
            {
                fechaEnvio: "2023-10-27 10:25:00",
                mensaje: "Estuve trabajando en un proyecto, ¿y tú?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 3,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 11:00:00",
                mensaje: "Hola Ana, ¿cómo te ha ido?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 11:05:00",
                mensaje: "Hola Miguel, todo tranquilo por aquí. ¿Y tú?",
                remitente: "Ana Martínez",
            },
            {
                fechaEnvio: "2023-10-27 11:10:00",
                mensaje: "Estoy ocupado con el trabajo, pero todo va bien.",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 4,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 12:30:00",
                mensaje: "Hola Luis, ¿qué tal estás?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 12:35:00",
                mensaje: "¡Hola Miguel! Bien, gracias. ¿Has oído hablar de la nueva película?",
                remitente: "Luis Sánchez",
            },
            {
                fechaEnvio: "2023-10-27 12:40:00",
                mensaje: "Sí, la vi anunciada. ¿Quieres verla juntos?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 5,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 13:15:00",
                mensaje: "Hola Laura, ¿cómo estás?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 13:20:00",
                mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Cómo va tu día?",
                remitente: "Laura López",
            },
            {
                fechaEnvio: "2023-10-27 13:25:00",
                mensaje: "Mi día va bien, ocupado en el trabajo. ¿El tuyo?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 6,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 14:00:00",
                mensaje: "Hola David, ¿qué has estado haciendo?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 14:05:00",
                mensaje: "Hola Miguel, estuve trabajando en mi proyecto. ¿Tú?",
                remitente: "David Gómez",
            },
            {
                fechaEnvio: "2023-10-27 14:10:00",
                mensaje: "Yo también ocupado con el trabajo. ¡Sigamos esforzándonos!",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 7,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 15:30:00",
                mensaje: "Hola Elena, ¿cómo te ha ido hoy?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 15:35:00",
                mensaje: "Hola Miguel, hoy fue un día ocupado en la oficina. ¿El tuyo?",
                remitente: "Elena Torres",
            },
            {
                fechaEnvio: "2023-10-27 15:40:00",
                mensaje: "Lo mismo por aquí, mucho trabajo. ¡Ánimo!",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 8,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 16:15:00",
                mensaje: "Hola Sofía, ¿cómo te va?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 16:20:00",
                mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Y tú?",
                remitente: "Sofía Ramírez",
            },
            {
                fechaEnvio: "2023-10-27 16:25:00",
                mensaje: "Todo va bien, gracias. ¿Qué planes tienes para el fin de semana?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 9,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 17:00:00",
                mensaje: "Hola Pablo, ¿qué tal estás?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 17:05:00",
                mensaje: "¡Hola Miguel! Estoy bien, gracias. ¿Cómo va todo contigo?",
                remitente: "Pablo Martín",
            },
            {
                fechaEnvio: "2023-10-27 17:10:00",
                mensaje: "Todo en orden, ocupado con el trabajo. ¿Y tú?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 10,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 18:30:00",
                mensaje: "Hola Carmen, ¿cómo ha sido tu día?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 18:35:00",
                mensaje: "Hola Miguel, bien, gracias. ¿El tuyo?",
                remitente: "Carmen Rodríguez",
            },
            {
                fechaEnvio: "2023-10-27 18:40:00",
                mensaje: "Ocupado, pero bien. ¿Tienes planes para el fin de semana?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 11,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 19:15:00",
                mensaje: "Hola Diego, ¿cómo estás?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 19:20:00",
                mensaje: "¡Hola Miguel! Todo bien por aquí. ¿Qué novedades hay?",
                remitente: "Diego Sánchez",
            },
            {
                fechaEnvio: "2023-10-27 19:25:00",
                mensaje: "Nada nuevo, solo trabajo y rutina. ¿Tú?",
                remitente: "Miguel Salinas",
            },
        ]
    },
    {
        userId: 12,
        conversacion: [
            {
                fechaEnvio: "2023-10-27 20:00:00",
                mensaje: "Hola Isabel, ¿cómo te ha ido hoy?",
                remitente: "Miguel Salinas",
            },
            {
                fechaEnvio: "2023-10-27 20:05:00",
                mensaje: "Hola Miguel, día ocupado, pero todo bien. ¿El tuyo?",
                remitente: "Isabel López",
            },
            {
                fechaEnvio: "2023-10-27 20:10:00",
                mensaje: "Lo mismo por aquí, mucho trabajo. ¡Ánimo!",
                remitente: "Miguel Salinas",
            },
        ]
    },
];

// Crea una funcion que imprima en pantalla todos los usuarios cuyo nombre sea diferente de Miguel Salinas sin repetir ninguno (array.includes (utiliza return or brack))
function nameUsuarios() {
   figure.innerHTML = ""
    for (let i = 0; i < conversaciones.length; i++) {
        let primero = conversaciones[i].conversacion
        let id = conversaciones[i].userId
        for (let i = 0; i < primero.length; i++) {
            let conv = primero[i]
            if (conv.remitente !== "Miguel Salinas") {
                let rs = conv.remitente
                iterar(id, rs)
                break
            }
        }
    }
}
nameUsuarios()
function iterar(id, rs) {
    let template = `<div class="d-flex align-items-center gap-3 user-item" id="${id}">
              <figure class="user-image ratio ratio-1x1 rounded-5 overflow-hidden m-0">
                  <img src="https://robohash.org/${id}" alt="">
              </figure>
              <h3 class="fs-5 text-white">${rs}</h3>
          </div>
  `
    figure.innerHTML += template
    numeroEntero(id)
}
let usuarios = document.querySelectorAll('.user-item')
let elMain = document.querySelector('main')
let header = document.querySelector('.main-user')
function chat() {
    for (let i = 0; i < usuarios.length; i++) {
        usuarios[i].addEventListener('click', function () {
            let miClick = parseInt(this.id)
            chatId(miClick)
            console.log(miClick);
        }) 
    }
}
chat()
/// crea una funcion que reciba como parametro un numero entero positivo y retorne el array de conversaciones correspondiente a ese numero.
function chatId(nwId){
   for (let i = 0; i < conversaciones.length; i++) {
       let rs = conversaciones[i]
       if(rs.userId === parseInt(nwId)){
         loadMessage(rs)
            break
       }
   }
 } 
function loadMessage(conversacion){
    elMain.innerHTML = ""
     let message = conversacion.conversacion
    for (let i = 0; i < message.length; i++) {
        let current = message[i]
        let messageUserId = conversacion.userId
        let isNotMiguel = ""
        if(current.remitente === 'Miguel Salinas'){
            messageUserId = 13
            isNotMiguel = "flex-row-reverse"
        }
       let template = `
       <div class="w-100 py-3 message d-flex gap-2 align-items-center ${isNotMiguel}">
                    <figure class="ratio ratio-1x1 bg-primary overflow-hidden rounded-circle user-image m-0 ">
                        <img src="https://robohash.org/${messageUserId}" alt="random robot">
                    </figure>

                    <div class="w-75  bg-dark p-2 bg-opacity-50 text-warning shadow rounded-2">
                        <div class="d-flex justify-content-between message-header">
                            <h5 class="fst-italic text-white">${current.remitente}</h5>
                            <h6 class="fst-italic text-white">${current.fechaEnvio}</h6>
                        </div>
                        <p>
                        ${current.mensaje}
                        </p>
                    </div>
                </div>
       `
       elMain.innerHTML += template
        
    }
}

function numeroEntero(id){
   for (let i = 0; i < conversaciones.length; i++) {
       if(conversaciones[i].userId === parseInt(id)){
           
       }
   }
 }


