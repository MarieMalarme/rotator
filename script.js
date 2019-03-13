const faces = Array.from(document.querySelectorAll('.face'))

document.addEventListener('mousemove', event => {
  const x = event.pageX
  const y = event.pageY
  const midX = x - window.innerWidth / 2
  const midY = y - window.innerHeight / 2
  const box = document.querySelector('.cube')
  box.style.transform = `rotateX(${midY / 2}deg) rotateY(${midX}deg)`
  faces.map(face => (face.style.backgroundColor = `hsl(${midX / 4}, 70%, 65%)`))
})

const poem = document.querySelector('.poem')
const underlined = Array.from(document.querySelectorAll('.underline'))
underlined.map(item => {
  item.addEventListener('mouseover', event => {
    poem.style.color = '#0a0a0a'
  })
  item.addEventListener('mouseleave', event => {
    poem.style.color = '#191919'
  })
})

const voyage = document.getElementById('inde')
voyage.addEventListener('mouseover', event => {
  faces.map(face => {
    face.style.backgroundImage = `url(https://www.levif.be/medias/13063/6688545.jpg)`
  })
})
voyage.addEventListener('mouseleave', event => {
  faces.map(face => {
    face.style.backgroundImage = `none`
  })
})
