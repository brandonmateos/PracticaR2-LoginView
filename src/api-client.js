const URL = 'https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rj&api_key=b8bd31e6c4b2821cceacf52eafefb4e1&format=json '

function getMusicData(){
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
.then(response => response.json())
.then(data => data.topartists.artist)
.then(artists => artists.map(artist => {
    return {
        id: artist.mbid,
        name: artist.name,
        image: artist.image[0]['#text']
    }
}))
}

const getMusicImage = (nameArtist, setStateImage) => {
    return fetch (`${apiurl}${encodeURIComponent(nameArtist)}`)
    .then(response => response.json())
    .then(data => data.results[0].picture.large)
    .then(image => setStateImage(image))
}


export {getMusicData, getMusicImage}
