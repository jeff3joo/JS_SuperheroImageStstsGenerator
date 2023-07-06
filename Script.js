const api=1990622641318193
const apiurl=`https://superheroapi.com/api.php/${api}`
const generate=document.getElementById(`generate`)
const image=document.getElementById(`image`)
const imagestat=document.getElementById(`imagestat`)
const imagename=document.getElementById(`imagename`)
const searchButton=document.getElementById(`searchbutton`)
const searchInput=document.getElementById(`searchinput`)

const Hero= (id,name)=>{
    fetch(`${apiurl}/${id}`)
    .then(response=> response.json())
    .then(json=>{
        console.log(json.powerstats)
        const hero = json
        showinfo(hero)
    })
}

const showinfo = (character) => {
    const name = `<h2>${character.name}</h2>`
    const img = `<img src="${character.image.url}" height=200 width=200/>`
    const stats = Object.keys(character.powerstats).map(stat => {
      return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')
    image.innerHTML = `${img}`
    imagename.innerHTML=`${name}`
    imagestat.innerHTML=`${stats}`
}

const search=(name)=>{
        fetch(`${apiurl}/search/${name}`)
    .then(response=> response.json())
    .then(json=>{
        const hero=json.results[0]
        showinfo(hero)
    })    
}

const random = () => {
    return Math.ceil(Math.random() * 731)
  }
  
generate.onclick = () => Hero(random())
searchButton.onclick = () => search(searchInput.value)