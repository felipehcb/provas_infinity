document.addEventListener('DOMContentLoaded', () => {
    const breedsContainer = document.getElementById('breeds');
    const imagesContainer = document.getElementById('images');

    async function fetchBreeds() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();
            const breeds = Object.keys(data.message);
            displayBreeds(breeds);
        } catch (error) {
            console.error('Erro ao buscar raças:', error);
            alert('Erro ao buscar raças. Tente novamente mais tarde.');
        }
    }

    function displayBreeds(breeds) {
        breeds.forEach(breed => {
            const button = document.createElement('button');
            button.textContent = breed;
            button.addEventListener('click', () => fetchImages(breed));
            breedsContainer.appendChild(button);
        });
    }

    async function fetchImages(breed) {
        try {
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`);
            const data = await response.json();
            displayImages(data.message);
        } catch (error) {
            console.error('Erro ao buscar imagens:', error);
            alert('Erro ao buscar imagens. Tente novamente mais tarde.');
        }
    }

    function displayImages(images) {
        imagesContainer.innerHTML = '';
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imagesContainer.appendChild(imgElement);
        });
    }

    fetchBreeds();
});