String.prototype.toCamelCase = function() {
  let text = this
  const words = text.split(' ')
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    words[i] = word.charAt(0).toUpperCase() + word.substr(1)
  }

  return words.join('')
}
const str = 'camel case word'

console.log(str.toCamelCase())
