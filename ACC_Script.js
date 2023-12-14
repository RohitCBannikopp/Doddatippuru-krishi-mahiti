const navigation_bar = document.querySelector('.navigation-bar');
        const menu_icon = document.querySelector('.menu_icon');
        menu_icon.addEventListener('click', () => {
            navigation_bar.classList.toggle('show');
        });
        document.addEventListener('click', (event) => {
            if (menu_icon.contains(event.target)) {
                return;
            } else {
                navigation_bar.classList.remove('show');
            }
        });
