const BASE_URL = 'http://localhost:8080/api/flowers'

const FlowerAdapter = {
  index: () => fetch(BASE_URL).then(res => res.json())
}

export default FlowerAdapter
