document.addEventListener('mousemove', event => {
  const x = event.pageX
  const y = event.pageY
  const midX = x - window.innerWidth / 2
  const midY = y - window.innerHeight / 2
  const box = document.querySelector('.cube')
  const faces = Array.from(document.querySelectorAll('.face'))
  box.style.transform = `rotateX(${midY / 2}deg) rotateY(${midX}deg)`
  faces.map(face => (face.style.backgroundColor = `hsl(${midX / 4}, 70%, 65%)`))
})
