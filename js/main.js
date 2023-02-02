let page = 1;
const perPage = 10;

function loadMovieData(title = null) {
  let url = title
    ? `https://odd-plum-indri-coat.cyclic.app/api/movies?page=${+page}&perPage=${+perPage}&title=${title}`
    : `https://odd-plum-indri-coat.cyclic.app/api/movies?page=${+page}&perPage=${+perPage}`;

    let status = document.querySelector(".pagination");

    if(title){
        status.classList.add("d-none");
    }
    else{
        status.classList.remove("d-none");
    }
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        let postRows = `
            ${data.map(post =>{
                `<trdata-id=${post.id}>
                    <td>${post.year}</td>
                    <td>${post.title}</td>
                    <td>${post.plot}</td>
                    <td>${post.rated}</td>
                    <td>${post.runtime}</td>
                </tr>`
            }).join('')}
        `;

        
        document.querySelector('#moviesTable tbody').innerHTML = postRows;
    });
}
