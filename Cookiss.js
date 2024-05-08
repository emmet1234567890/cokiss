var navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right ="0";
        }
        function hideMenu(){
            navLinks.style.right ="-200px";
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isInteresting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }

            });
        });



      const hiddenElement = document.querySelectorAll('.Cool');
      hiddenElement.forEach((el) => observer.observe(el));


      window.addEventListener('scroll', function(){
        var header = document.querySelector('nav');
        header.classList.toggle('sticky', window.scrollY > 0);

      });