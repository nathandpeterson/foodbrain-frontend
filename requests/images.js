const foodImages = 'https://source.unsplash.com/collection/251966'
const backgroundSize = '500x500'

const images = {
  getBackground(){
    axios.get(`${foodImages}/${backgroundSize}`)
  }
}
