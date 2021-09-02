document.getElementById('search-button').addEventListener('click', function(){
    getSearchFild();
});

const getSearchFild = () => {
    const searchFild = document.getElementById('search-fild')
    const searchText = searchFild.value;
    searchFild.value = '';
    // console.log(searchText);
    
    
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayResultNum(data));
        
        //total result founded
        const displayResultNum = result =>{
            if(searchFild ===''){
                return 'Oops!';
            }
            else{
                const resultDiv = document.getElementById('total-result')
                const resultDivText = document.createElement('div')
                resultDivText.innerHTML = `
                <h6>Total result found:<span>${result.numFound}</span></h6>
                <h6>Shoing result: <span>${result.docs.length} out of ${result.numFound}</span></h6>
                `;
                resultDiv.value = '';
                resultDiv.appendChild(resultDivText) 
            }
        }

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}

const displaySearchResult = books =>{
    //display book detail
        const showDiv = document.getElementById('book-div');
    for(const book in books){
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="col-">
                <div class="card">
                    <img class="img-fluid w-100" src="${`https://covers.openlibrary.org/b/id/${books[book].cover_i}-M.jpg`}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${books[book].title}</h5>
                    <p class="card-text">Author:${books[book].author_name}</p>
                    <p>Publisher:${books[book].publisher}</p>
                    <p>First Published:${books[book].first_publish_year}</p>
                </div>
                </div>
            </div>`;
        showDiv.appendChild(div)
    }
}






