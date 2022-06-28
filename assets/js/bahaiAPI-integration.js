
// click event that calls a function
document.querySelector('button').addEventListener('click', getFetch)
// 
function getFetch(){

  const url = 'https://BahaiPrayers.net/api/prayer/HiddensByLanguage?languageid=1'

  // fetches the information
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // this vaiable generates a random number out of 153 (index of object) 
        let num = Math.floor(Math.random(data) * data.length);
        // the number genrated acts as the index
        console.log(num)
        // displays the quote at the specific index number and removes '<p>, </p>' from text body
        document.querySelector('#display').innerText = data[num].Text.replace('<p>',' ').replace('</p>',' ').replace('<p>',' ').replace('</p>',' ').replace('<p>',' ').replace('</p>',' ').replace('<p>',' ').replace('</p>',' ');
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
