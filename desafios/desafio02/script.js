document.querySelector('#theme-toggle').addEventListener('click', (event) => {
    event.preventDefault();

    toggleTheme();
})

function toggleTheme(){
    document.body.classList.toggle('dark')
}

// cast

const cast = [
    'Keanu Reeves',
    'Carrie-Anne Moss',
    'Laurence Fishburne',
    'Hugo Weaving'
]

const castList = document.querySelector('.cast');

cast.forEach(person => {
    const item = document.createElement('li')
    const personName = document.createTextNode(person)
    item.appendChild(personName)

    castList.appendChild(item)
})

/*

// exibe repositórios do github em forma de lista

document.querySelector('main').innerText = '';

fetch('https://api.github.com/users/thiagosouza1989/repos?per_page=100')
    .then(response => response.json())
    .then(repos => repos.forEach(repo => {
        let item = document.createElement('li')
        var repoName = document.createTextNode(repo.name)
        item.appendChild(repoName)
        document.querySelector('main').appendChild(item)
    }))
*/