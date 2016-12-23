var arr = [
  'some',
  'another',
  'other',
  'else',
  'whatever'
]

function addStr (arr, str) {
  if (arr.indexOf(str) > -1) throw 'Shit happens'
  arr.push(str)

  return arr
}

function deleteStr (arr, str) {
  const index = arr.indexOf('else')
  if (index > -1) arr.splice(index, 1)

  return arr
}

function run (arr, cb) {
  const result = arr.map(cb)
  return result
}
//Example: run(arr, v => v + '!')


function getHtml (url, cb) {
  return $.get(url, null, cb)
}

function getUrl () {
  const url = document.getElementById('url_input').value
  getHtml(url, data => {
    document.getElementById('output').innerHTML = data
  })

}
