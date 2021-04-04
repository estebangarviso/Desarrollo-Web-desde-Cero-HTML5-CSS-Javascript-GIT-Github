(function() {
    /**
     * Header
     */
    document.addEventListener("click", (event) => {
        var menu = '#navbar-menu';
        menuCollapse = document.querySelector(menu+" .navbar-collapse");
        classNames = ['navbar-collapse', 'collapse', 'show'];
        let constainsMultiple = (el, classes) => Array.isArray(classes) && !!classes.length && classes.every(cls => el.classList.contains(cls));
        opened = constainsMultiple(menuCollapse, classNames);
        console.log(opened);
        if (opened === true && !event.target.classList.contains("navbar-toggler")) {
            document.querySelector(menu+" button.navbar-toggler").click();
        }
    });
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
          document.getElementById('header').classList.add('fixed-top');
          document.getElementById('logo-curso').classList.add('d-none');
          document.querySelector('#header .header-top').classList.add('p-0');
          header_height = document.querySelector('#header').offsetHeight;
          document.body.style.paddingTop = header_height + 'px';
        } else {
          document.getElementById('header').classList.remove('fixed-top');
          document.getElementById('logo-curso').classList.remove('d-none');
          document.querySelector('#header .header-top').classList.remove('p-0');
          document.body.style.paddingTop = '0';
        } 
    });
})();
