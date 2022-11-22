const selectSetEl = document.querySelectorAll('.custom-select');

        selectSetEl.forEach(item => {
            item.addEventListener('click', (event) => {
     
                if (event.target.nodeName !== 'BUTTON') {
                    console.log('no button')
                    return
                }

                const currentSelect = event.currentTarget;
                currentSelect.classList.toggle('active');

            })
        })

        selectSetEl.forEach(item => {
            item.addEventListener('click', (event) => {

                if (event.target.nodeName !== 'LI') {
                    console.log('no button')
                    return
                }
              
                const currentSelect = event.currentTarget;
                const currentTime = event.currentTarget.querySelector('.custom-select__current-value');

                currentTime.textContent = event.target.dataset.timevalue;
                currentSelect.classList.remove('active');
            })
        })