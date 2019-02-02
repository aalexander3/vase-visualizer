const BASE_URL = 'http://localhost:8080/api/vases'


const VaseAdapter = {
  index: () => fetch(BASE_URL).then(res => res.json())
}

export default VaseAdapter
