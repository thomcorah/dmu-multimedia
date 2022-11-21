showAllPhotos = () => {
    let photos = document.querySelectorAll('.work img')
    photos.forEach(element => {
        element.classList.remove('hidden')
    })
}

filterPhotos = (evt) => {
    let filter = evt.target.innerText
    showAllPhotos()
    if (filter !="All") {
        let photos = document.querySelectorAll('img:not(.'+filter.toLowerCase())
        photos.forEach(element => {
            element.classList.add('hidden')
        })
    }
}

let menuItems = document.querySelectorAll('.menuItem')

menuItems.forEach(element => {
    element.addEventListener('click', filterPhotos)
});

