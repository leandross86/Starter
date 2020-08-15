axios.get('https://api.github.com/users/leandross86')
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.warn(error)
  })