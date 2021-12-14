const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle= "#d30f0e"
ctx.fillRect(30, 30, 410, 190)
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.lineWidth = 5
ctx.strokeRect(130, 50, 200, 150)

ctx.strokeStyle = 'black'
ctx.lineWidth = 3
ctx.lineTo(200, 110)
ctx.lineTo(220, 140)
ctx.lineTo(180, 180)
ctx.lineTo(255, 140)
ctx.lineTo(240, 110)
ctx.lineTo(290, 75)
ctx.closePath()
ctx.fillStyle = "#f4c521"
ctx.fill()
ctx.stroke()


