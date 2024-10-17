const menuItems = document.querySelectorAll('nav ul li');

        // Itera sobre cada uno de ellos para añadir eventos
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const submenu = item.querySelector('ul');
                if (submenu) {
                    submenu.classList.add('visible');
                }
            });

            item.addEventListener('mouseleave', () => {
                const submenu = item.querySelector('ul');
                if (submenu) {
                    submenu.classList.remove('visible');
                }
            });
        });


        
/*alerta */
        function registrarUsuario() {
            // Captura el valor del campo de texto con el id "name"
            var nombre = document.getElementById("name").value;
        
            // Muestra una alerta con el nombre ingresado
            alert("¡Estás registradx, " + nombre + "!");
        }