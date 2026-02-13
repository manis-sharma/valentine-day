        function goToPage(pageNumber) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            const targetPage = document.getElementById('page' + pageNumber);
            targetPage.classList.add('active');
            
            // Create floating hearts on page transition
            createFloatingHearts();
        }

        function toggleEnvelope() {
            const envelope = document.getElementById('envelope');
            envelope.classList.toggle('open');
            createFloatingHearts();
        }

        function createFloatingHearts() {
            const container = document.getElementById('heartsContainer');
            const hearts = ['💚', '💕', '💖', '💗', '💝', '❤️'];
            
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart';
                    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDelay = Math.random() * 2 + 's';
                    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
                    container.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 7000);
                }, i * 200);
            }
        }

        // Add some hearts on page load
        window.onload = function() {
            createFloatingHearts();
        };
    