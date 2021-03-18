const messages = ["Hola amigo", "Hola que tal", "Cómo estás?", "Holi", "Que milagro", "No me digas"]

const randomMsg = () => {
    const msg = messages[Math.floor(Math.random()* messages.length)]
    console.log(msg)
} 

module.exports = {randomMsg}
