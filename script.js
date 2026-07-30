tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        pizzaRed: { 50:'#fef2f2',100:'#fee2e2',500:'#e53935',600:'#d32f2f',700:'#b71c1c' },
                        pizzaGold: { 100:'#fef3c7',400:'#fbbf24',500:'#f59e0b',600:'#d97706' },
                        warmCream: { 50:'#fdfcfb',100:'#faf8f5',200:'#f4efea',300:'#e9dfd5',400:'#d5c7b9',800:'#4e3629',900:'#2d2521' },
                        basilGreen: { 100:'#f0fdf4',500:'#22c55e',600:'#16a34a',700:'#15803d' }
                    },
                    fontFamily: { sans:['"Plus Jakarta Sans"','sans-serif'], serif:['"Playfair Display"','serif'] },
                    boxShadow: {
                        'warm':'0 4px 20px -2px rgba(78,54,41,0.08), 0 2px 8px -1px rgba(78,54,41,0.04)',
                        'warm-lg':'0 10px 30px -5px rgba(78,54,41,0.12), 0 8px 12px -3px rgba(78,54,41,0.06)'
                    }
                }
            }
        }

window.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            window.addEventListener('scroll', () => {
                const header = document.getElementById('mainHeader');
                if (window.scrollY > 20) { header.classList.add('bg-white','shadow-md'); header.classList.remove('bg-warmCream-50/90'); }
                else { header.classList.add('bg-warmCream-50/90'); header.classList.remove('bg-white','shadow-md'); }
            });
        });
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const icon = document.getElementById('mobileMenuIcon');
            if (menu.classList.contains('hidden')) { menu.classList.remove('hidden'); icon.setAttribute('data-lucide','x'); }
            else { menu.classList.add('hidden'); icon.setAttribute('data-lucide','menu'); }
            lucide.createIcons();
        }