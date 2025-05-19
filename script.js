document.addEventListener("DOMContentLoaded", () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;

            // Vérification si c'est un appareil iOS
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                window.location.href = "https://apple.co/40jCXnQ";
            }
            // Vérification si c'est un appareil Android
            else if (/Android/.test(userAgent)) {
                document.getElementById("android-message").classList.remove("hidden");
            } 
            // Autres appareils : affichage du site web
            else {
                document.getElementById("website-content").classList.remove("hidden");
            }
        });