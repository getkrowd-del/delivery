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

const MENU_DATA = [
            { title:"Cheese Pizza", desc:"Our classic NY-style cheese pie. Simple, iconic, and made fresh for New York Mills.", price:11.45, tag:"Best Seller", category:"pizza", img:"https://krowdimg.b-cdn.net/clients/joes-pizza-whitesboro/pizza.png" },
            { title:"Cheese & Pepperoni", desc:"Whole milk mozzarella loaded with pepperoni on our signature crust.", price:13.00, tag:"Best Seller", category:"pizza", img:"https://krowdimg.b-cdn.net/clients/joes-pizza-whitesboro/pizza2.png" },
            { title:"Cheese, Sausage & Mushrooms", desc:"Fresh mozzarella, savory sausage, and mushrooms baked to perfection.", price:15.10, tag:"Best Seller", category:"pizza", img:"https://krowdimg.b-cdn.net/clients/joes-pizza-whitesboro/pizza3.png" }
        ];

        window.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            renderMenuItems();
            window.addEventListener('scroll', () => {
                const header = document.getElementById('mainHeader');
                if (window.scrollY > 20) { header.classList.add('bg-white','shadow-md'); header.classList.remove('bg-warmCream-50/90'); }
                else { header.classList.add('bg-warmCream-50/90'); header.classList.remove('bg-white','shadow-md'); }
            });
            setTimeout(() => { const t=document.getElementById('chat-tooltip'); if(t){t.style.opacity='0';setTimeout(()=>t.style.display='none',500);} }, 9000);
        });

        function renderMenuItems() {
            const grid = document.getElementById('menu-grid');
            grid.innerHTML = '';
            MENU_DATA.forEach(item => {
                const card = document.createElement('div');
                card.className = "bg-white border border-warmCream-300 rounded-3xl overflow-hidden shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-warm flex flex-col justify-between";
                card.innerHTML = `
                    <div>
                        <div class="h-48 relative overflow-hidden bg-warmCream-200">
                            <img src="${item.img}" class="w-full h-full object-cover" alt="${item.title} — Joe's Pizza New York Mills" onerror="this.src='https://placehold.co/400x300/f4efea/4e3629?text=${encodeURIComponent(item.title)}'">
                            ${item.tag ? `<span class="absolute top-4 left-4 bg-pizzaGold-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-sm">${item.tag}</span>` : ''}
                        </div>
                        <div class="p-6 space-y-3">
                            <div class="flex items-baseline justify-between gap-2">
                                <h4 class="font-serif text-xl font-bold text-warmCream-900">${item.title}</h4>
                                <span class="text-pizzaGold-600 font-serif font-black text-lg">$${item.price.toFixed(2)}</span>
                            </div>
                            <p class="text-warmCream-800 text-xs leading-relaxed font-semibold">${item.desc}</p>
                        </div>
                    </div>
                    <div class="p-6 pt-0">
                        <a href="https://www.joespizzaofwhitesboro.com/" target="_blank" class="w-full bg-warmCream-200 hover:bg-pizzaRed-600 hover:text-white text-warmCream-900 text-xs font-bold py-3 px-4 rounded-xl border border-warmCream-300 hover:border-pizzaRed-600 transition-all flex items-center justify-center gap-2">
                            <i data-lucide="shopping-bag" class="w-4 h-4"></i><span>Order Online</span>
                        </a>
                    </div>`;
                grid.appendChild(card);
            });
            lucide.createIcons();
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const icon = document.getElementById('mobileMenuIcon');
            if (menu.classList.contains('hidden')) { menu.classList.remove('hidden'); icon.setAttribute('data-lucide','x'); }
            else { menu.classList.add('hidden'); icon.setAttribute('data-lucide','menu'); }
            lucide.createIcons();
        }

        function toggleChat() {
            const win = document.getElementById('chat-window');
            if (win.classList.contains('hidden')) { win.classList.remove('hidden'); win.classList.add('flex'); }
            else { win.classList.add('hidden'); win.classList.remove('flex'); }
            document.getElementById('chat-tooltip').style.display = 'none';
        }
        function openChat() {
            const win = document.getElementById('chat-window');
            win.classList.remove('hidden'); win.classList.add('flex');
            document.getElementById('chat-tooltip').style.display = 'none';
        }