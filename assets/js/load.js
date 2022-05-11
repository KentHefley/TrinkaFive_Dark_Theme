// console.clear()
const loadmore = document.querySelector('#load-more');
    let currentItems = 1;
    loadmore.addEventListener('click', function(e){
        var elementList = document.querySelectorAll('.items');
        for (let i = currentItems; i < currentItems + 1; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'flex';
                
            }
          
        }
        currentItems += 1;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
      

    })