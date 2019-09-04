let data = [ 1, 1, 1, 2, 1, 1, 3, 3, 4, 4, 6, 6, 3, 10, 10, 1, 2, 8, 8, 'A' ]

const uniqueNumber = (arr) => {
  let processed = []
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]

    if (processed.indexOf(item) >= 0) {
      continue
    }

    processed.push(item)

    result.push({ number: item, count: arr.filter((v) => v === item).length })
  }

  let unique = result.filter((item) => item.count === 1)

  if (!unique.length) {
    return null
  }

  return unique[0].number
}

console.log(uniqueNumber(data))
