const lists = document.querySelectorAll('.list');
const rightBox = document.querySelector('.rightBox');
const leftBox = document.querySelector('.leftBox');


lists.forEach((list)=>{
    list.addEventListener('dragstart', (e)=>{

        let selected = e.target;

// Add list in right Box

        rightBox.addEventListener('dragover', (e)=>{
            e.preventDefault();
        })

        rightBox.addEventListener('drop', ()=>{
            rightBox.appendChild(selected);
            selected = null;
        });

// Add list in left Box

        leftBox.addEventListener('dragover', (e)=>{
            e.preventDefault();
        })

        leftBox.addEventListener('drop', ()=>{
            leftBox.appendChild(selected);
            selected = null;
        })

    })
});

