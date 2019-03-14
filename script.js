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

const images = [
  {
    elem: 'inde',
    url: `https://www.levif.be/medias/13063/6688545.jpg`,
  },
  {
    elem: 'poupe',
    url: `http://s1.lprs1.fr/images/2016/09/30/6164847_ee13aa50e5dc3a2bd9fd78ff90be95adb0df0583_1000x625.jpg`,
  },
  {
    elem: 'caravelle',
    url: `http://www.museeciotaden.org/Pages%20L%E9gendes/Photos%20L%E9gendes/Bateautemp.jpg`,
  },
  {
    elem: 'criait',
    url: `https://tse2.mm.bing.net/th?id=OIP.HCPB7wKx9ot6znopv6mYTwHaLH&pid=15.1&P=0&w=300&h=300`,
  },
  {
    elem: 'nuit',
    url: `https://effondrements.files.wordpress.com/2012/07/aurore-borc3a9ale.jpg?w=640&h=480`,
  },
  {
    elem: 'sourire',
    url: `http://agoras.typepad.fr/.a/6a00d8341ce44553ef01b7c7aa85f8970b-pi`,
  },
]

const fetchData = async query => {
  const key = 'AIzaSyDxqGOhwBYshjDpzsMGIQFfrBzxJ1nUqig'
  const engine = '014074202458323732267:d9doixropei'
  const apiUrl = `
  https://www.googleapis.com/customsearch/v1?key=${key}&cx=${engine}&searchType=image&q=${query}
`
  try {
    let fetchApi = await fetch(apiUrl, {
      tags: query,
      tagmode: 'any',
      format: 'json',
    })
    let jsonData = await fetchApi.json()
    return jsonData
  } catch (err) {
    console.log(err)
  }
}

const random = arr => Math.floor(Math.random() * arr.length)

images.map(async (image, i) => {
  const elem = document.getElementById(image.elem)
  const query = elem.textContent
  let data = await fetchData(query)
  const imageUrl =
    (data.items && data.items[random(data.items)]['link']) || images[i].url
  elem.addEventListener('mouseover', event => {
    underlined.map(item => (item.style.borderBottom = `none`))
    elem.style.borderBottom = `solid 8px #191919`
    faces.map(face => {
      face.style.backgroundImage = `url(${imageUrl})`
    })
  })
  elem.addEventListener('mouseleave', event => {
    faces.map(face => {
      underlined.map(item => (item.style.borderBottom = `solid 8px #191919`))
      face.style.backgroundImage = `none`
    })
  })
})
