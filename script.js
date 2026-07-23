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

const IMG = {
            p1: "https://krowdimg.b-cdn.net/clients/joes-pizza-whitesboro/pizza.png",
            p2: "https://krowdimg.b-cdn.net/clients/joes-pizza-whitesboro/pizza2.png",
            p3: "https://krowdimg.b-cdn.net/clients/joes-pizza-whitesboro/pizza3.png"
        };

        // All prices taken directly from Joe's official price sheets. cash / cc.
        const MENU_DATA = [
            /* ---------- PIZZAS ---------- */
            { title:"Cheese", desc:"Our classic NY-style cheese pie. Simple, iconic, and made fresh.", tag:"Best Seller", category:"pizza", img:IMG.p1,
              prices:[{s:"Sm",cash:12.50,cc:12.98},{s:"Med",cash:15.25,cc:15.83},{s:"Lg",cash:19.00,cc:19.72}] },
            { title:"Cheese & Mushrooms", desc:"Fresh mozzarella and mushrooms baked to perfection.", tag:"", category:"pizza", img:IMG.p3,
              prices:[{s:"Sm",cash:14.00,cc:14.53},{s:"Med",cash:17.00,cc:17.65},{s:"Lg",cash:21.00,cc:21.80}] },
            { title:"Cheese, Mushrooms & Peppers", desc:"Mozzarella with mushrooms and fresh peppers.", tag:"", category:"pizza", img:IMG.p2,
              prices:[{s:"Sm",cash:15.50,cc:16.09},{s:"Med",cash:18.75,cc:19.46},{s:"Lg",cash:23.00,cc:23.87}] },
            { title:"Cheese & Peppers", desc:"Mozzarella with fresh peppers on our hand-tossed crust.", tag:"", category:"pizza", img:IMG.p1,
              prices:[{s:"Sm",cash:14.00,cc:14.53},{s:"Med",cash:17.00,cc:17.65},{s:"Lg",cash:21.00,cc:21.80}] },
            { title:"Cheese & Anchovies", desc:"A classic — mozzarella topped with savory anchovies.", tag:"", category:"pizza", img:IMG.p2,
              prices:[{s:"Sm",cash:14.00,cc:14.53},{s:"Med",cash:17.00,cc:17.65},{s:"Lg",cash:21.00,cc:21.80}] },
            { title:"Cheese, Mushrooms, Peppers & Anchovies", desc:"Mushrooms, peppers, and anchovies on melted mozzarella.", tag:"", category:"pizza", img:IMG.p3,
              prices:[{s:"Sm",cash:17.00,cc:17.65},{s:"Med",cash:20.50,cc:21.28},{s:"Lg",cash:25.00,cc:25.95}] },
            { title:"Cheese, Sausage & Mushrooms", desc:"Fresh mozzarella, savory sausage, and mushrooms.", tag:"Best Seller", category:"pizza", img:IMG.p3,
              prices:[{s:"Sm",cash:16.00,cc:16.61},{s:"Med",cash:19.50,cc:20.24},{s:"Lg",cash:24.00,cc:24.91}] },
            { title:"Cheese & Sausage", desc:"Mozzarella and savory Italian sausage.", tag:"Best Seller", category:"pizza", img:IMG.p3,
              prices:[{s:"Sm",cash:14.50,cc:15.05},{s:"Med",cash:17.75,cc:18.42},{s:"Lg",cash:22.00,cc:22.84}] },
            { title:"Cheese & Pepperoni", desc:"Whole milk mozzarella loaded with pepperoni on our signature crust.", tag:"Best Seller", category:"pizza", img:IMG.p2,
              prices:[{s:"Sm",cash:14.00,cc:14.53},{s:"Med",cash:17.00,cc:17.65},{s:"Lg",cash:21.00,cc:21.80}] },
            { title:"Cheese, Sausage, Mushrooms & Peppers", desc:"Loaded with sausage, mushrooms, and peppers.", tag:"", category:"pizza", img:IMG.p3,
              prices:[{s:"Sm",cash:17.50,cc:18.17},{s:"Med",cash:21.25,cc:22.06},{s:"Lg",cash:26.00,cc:26.99}] },
            { title:"Cheese, Sausage & Peppers", desc:"Sausage and peppers over melted mozzarella.", tag:"", category:"pizza", img:IMG.p1,
              prices:[{s:"Sm",cash:16.00,cc:16.61},{s:"Med",cash:19.50,cc:20.24},{s:"Lg",cash:24.00,cc:24.91}] },
            { title:"The Works", desc:"Cheese, sausage, mushrooms, peppers & anchovies — fully loaded.", tag:"Loaded", category:"pizza", img:IMG.p1,
              prices:[{s:"Sm",cash:19.00,cc:19.72},{s:"Med",cash:23.00,cc:23.87},{s:"Lg",cash:28.00,cc:29.06}] },
            { title:"Garlic Pizza", desc:"Choice of sauce or oil — simple and delicious.", tag:"", category:"pizza", img:IMG.p3,
              prices:[{s:"Sm",cash:12.50,cc:12.98},{s:"Med",cash:15.25,cc:15.83},{s:"Lg",cash:19.00,cc:19.72}] },
            { title:"Tomato Pie", desc:"Pizza with sauce & grated cheese — an old-school classic.", tag:"", category:"pizza", img:IMG.p1,
              prices:[{s:"Sm",cash:10.50,cc:10.90},{s:"Med",cash:12.50,cc:12.98},{s:"Lg",cash:14.00,cc:14.53}] },
            { title:"Cheese, Sausage & Pepperoni", desc:"Sausage and pepperoni piled on melted mozzarella.", tag:"", category:"pizza", img:IMG.p1,
              prices:[{s:"Sm",cash:16.00,cc:16.61},{s:"Med",cash:19.50,cc:20.24},{s:"Lg",cash:24.00,cc:24.91}] },
            { title:"Chicken Wing Pizza", desc:"Our signature chicken wing pizza — a local favorite.", tag:"Fan Favorite", category:"pizza", img:IMG.p2,
              prices:[{s:"Sm",cash:15.50,cc:16.09},{s:"Med",cash:19.00,cc:19.72},{s:"Lg",cash:24.00,cc:24.91}] },

            /* ---------- DAILY SPECIALS ---------- */
            { title:"Large Cheese Pizza & 30 Wings", desc:"Our biggest value — feeds the whole crew.", price:53.99, cc:56.04, tag:"Best Value", category:"specials", img:IMG.p1 },
            { title:"Medium Cheese Pizza & 20 Wings", desc:"Perfect for game night with friends.", price:37.99, cc:39.43, tag:"Combo Deal", category:"specials", img:IMG.p2 },
            { title:"Small Cheese Pizza & 10 Wings", desc:"A great combo for two.", price:23.99, cc:24.90, tag:"Combo Deal", category:"specials", img:IMG.p3 },
            { title:"Slice Special", desc:"2 slices + a 20 oz soda. The classic quick lunch.", price:8.99, cc:9.33, tag:"Lunch Deal", category:"specials", img:IMG.p1 },
            { title:"Tues, Wed & Thurs Special", desc:"Large cheese pizza, 2-liter soda & small antipasto.", price:27.99, cc:29.05, tag:"Weekday Special", category:"specials", img:IMG.p2 },

            /* ---------- JUMBO WINGS ---------- */
            { title:"Jumbo Wings — 10", desc:"Ten crispy jumbo wings, sauced to order.", price:14.00, cc:14.53, tag:"Fan Favorite", category:"wings", img:IMG.p3 },
            { title:"Jumbo Wings — 20", desc:"Twenty jumbo wings — great for sharing.", price:27.00, cc:28.03, tag:"", category:"wings", img:IMG.p3 },
            { title:"Jumbo Wings — 30", desc:"Thirty jumbo wings for the whole table.", price:40.00, cc:41.52, tag:"", category:"wings", img:IMG.p3 },
            { title:"Jumbo Wings — 40", desc:"Forty jumbo wings — party sized.", price:52.00, cc:53.98, tag:"", category:"wings", img:IMG.p3 },
            { title:"Jumbo Wings — 50", desc:"Fifty jumbo wings. Bring the whole crowd.", price:64.00, cc:66.43, tag:"Party Pack", category:"wings", img:IMG.p3 },

            /* ---------- FINGER FOODS ---------- */
            { title:"Cheese Sticks", desc:"Golden, gooey mozzarella sticks served hot with marinara.", price:9.00, cc:9.34, tag:"Shareable", category:"fingers", img:IMG.p1 },
            { title:"Fries", desc:"Hot, crispy golden fries.", price:5.00, cc:5.19, tag:"", category:"fingers", img:IMG.p2 },
            { title:"Onion Rings", desc:"Thick-cut, beer-battered onion rings.", price:8.00, cc:8.30, tag:"", category:"fingers", img:IMG.p3 },
            { title:"Chicken Fingers", desc:"Hand-breaded chicken fingers, fried crisp.", price:10.00, cc:10.38, tag:"", category:"fingers", img:IMG.p1 },
            { title:"Buffalo Fingers", desc:"Chicken fingers tossed in our buffalo sauce.", price:11.00, cc:11.42, tag:"Spicy", category:"fingers", img:IMG.p2 },
            { title:"Boneless Wings", desc:"All the flavor of our wings, none of the bones.", price:11.00, cc:11.42, tag:"", category:"fingers", img:IMG.p3 },

            /* ---------- HOT SUBS ---------- */
            { title:"Meatball Sub w/ Cheese", desc:"House meatballs, rich sauce, and melted cheese on a toasted roll.", price:12.00, cc:12.46, tag:"Hot Sub", category:"subs", img:IMG.p3 },
            { title:"Sausage Sub w/ Cheese", desc:"Italian sausage with melted cheese on a fresh roll.", price:12.00, cc:12.46, tag:"Hot Sub", category:"subs", img:IMG.p1 },
            { title:"Eggplant Sub w/ Cheese", desc:"Breaded eggplant, marinara, and melted cheese.", price:12.00, cc:12.46, tag:"Hot Sub", category:"subs", img:IMG.p2 },
            { title:"Chicken Parm Sub", desc:"Breaded chicken, marinara, and melted cheese on a fresh roll.", price:12.00, cc:12.46, tag:"Hot Sub", category:"subs", img:IMG.p2 },
            { title:"Steak Sub — 2 Items", desc:"Grilled steak with your choice of two toppings.", price:12.00, cc:12.46, tag:"Hot Sub", category:"subs", img:IMG.p3 },
            { title:"Chicken Club Sub", desc:"Chicken, bacon, lettuce and tomato piled high.", price:12.00, cc:12.46, tag:"Hot Sub", category:"subs", img:IMG.p1 },
            { title:"Garlic Bread w/ Cheese", desc:"Toasted garlic bread topped with melted cheese.", price:5.00, cc:5.19, tag:"", category:"subs", img:IMG.p2 },

            /* ---------- COLD SUBS (Lg / Sm) ---------- */
            { title:"Turkey Sub", desc:"Sliced turkey with your choice of fixings.", tag:"Cold Sub", category:"subs", img:IMG.p1,
              prices:[{s:"Sm",cash:7.50,cc:7.79},{s:"Lg",cash:11.50,cc:11.94}] },
            { title:"Salami Sub", desc:"Genoa salami stacked on a fresh roll.", tag:"Cold Sub", category:"subs", img:IMG.p2,
              prices:[{s:"Sm",cash:7.50,cc:7.79},{s:"Lg",cash:11.50,cc:11.94}] },
            { title:"Mixed Sub", desc:"A mix of our cold cuts, dressed how you like it.", tag:"Cold Sub", category:"subs", img:IMG.p3,
              prices:[{s:"Sm",cash:7.50,cc:7.79},{s:"Lg",cash:11.50,cc:11.94}] },
            { title:"Ham Sub", desc:"Sliced ham with lettuce, tomato and more.", tag:"Cold Sub", category:"subs", img:IMG.p1,
              prices:[{s:"Sm",cash:7.50,cc:7.79},{s:"Lg",cash:11.50,cc:11.94}] },
            { title:"Tuna Sub", desc:"House-made tuna salad on a fresh roll.", tag:"Cold Sub", category:"subs", img:IMG.p2,
              prices:[{s:"Sm",cash:7.50,cc:7.79},{s:"Lg",cash:11.50,cc:11.94}] },

            /* ---------- SALADS & PASTA ---------- */
            { title:"Antipasto Salad", desc:"Crisp greens loaded with Italian meats, cheese and olives.", tag:"Salad", category:"salads", img:IMG.p2,
              prices:[{s:"Sm",cash:8.50,cc:8.82},{s:"Lg",cash:12.00,cc:12.46}] },
            { title:"Tossed Salad", desc:"Fresh garden greens with your choice of dressing.", tag:"Salad", category:"salads", img:IMG.p3,
              prices:[{s:"Sm",cash:7.00,cc:7.27},{s:"Lg",cash:11.00,cc:11.42}] },
            { title:"Tossed Salad w/ Chicken", desc:"Our garden salad topped with grilled chicken.", tag:"Salad", category:"salads", img:IMG.p1,
              prices:[{s:"Sm",cash:10.00,cc:10.38},{s:"Lg",cash:13.00,cc:13.49}] },
            { title:"Stuffed Shells", desc:"Ricotta-stuffed pasta shells baked in marinara.", price:9.00, cc:9.34, tag:"Pasta", category:"salads", img:IMG.p2 }
        ];

        window.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            renderMenuItems('all');
            window.addEventListener('scroll', () => {
                const header = document.getElementById('mainHeader');
                if (window.scrollY > 20) { header.classList.add('bg-white','shadow-md'); header.classList.remove('bg-warmCream-50/90'); }
                else { header.classList.add('bg-warmCream-50/90'); header.classList.remove('bg-white','shadow-md'); }
            });
            setTimeout(() => { const t=document.getElementById('chat-tooltip'); if(t){t.style.opacity='0';setTimeout(()=>t.style.display='none',500);} }, 9000);
        });

        function priceBlock(item) {
            if (item.prices) {
                const rows = item.prices.map(p => `
                    <div class="flex items-center justify-between text-base border-t border-warmCream-200 pt-2.5 first:border-t-0 first:pt-0">
                        <span class="font-extrabold text-warmCream-900 w-12">${p.s}</span>
                        <span class="text-warmCream-800 font-bold">$${p.cash.toFixed(2)} <span class="text-warmCream-400 font-semibold text-sm">cash</span></span>
                        <span class="text-pizzaGold-600 font-extrabold">$${p.cc.toFixed(2)} <span class="text-warmCream-400 font-semibold text-sm">card</span></span>
                    </div>`).join('');
                return `<div class="space-y-2.5 mt-2">${rows}</div>`;
            }
            return `<div class="flex items-center justify-between text-base border-t border-warmCream-200 pt-3 mt-2">
                        <span class="text-warmCream-800 font-bold">$${item.price.toFixed(2)} <span class="text-warmCream-400 font-semibold text-sm">cash</span></span>
                        <span class="text-pizzaGold-600 font-extrabold">$${item.cc.toFixed(2)} <span class="text-warmCream-400 font-semibold text-sm">card</span></span>
                    </div>`;
        }

        function renderMenuItems(category) {
            const grid = document.getElementById('menu-grid');
            grid.innerHTML = '';
            const data = category==='all' ? MENU_DATA : MENU_DATA.filter(i=>i.category===category);
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = "bg-white border border-warmCream-300 rounded-3xl overflow-hidden shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-warm flex flex-col justify-between";
                card.innerHTML = `
                    <div>
                        <div class="h-52 relative overflow-hidden bg-warmCream-200">
                            <img src="${item.img}" class="w-full h-full object-cover" alt="${item.title}" onerror="this.src='https://placehold.co/400x300/f4efea/4e3629?text=${encodeURIComponent(item.title)}'">
                            ${item.tag ? `<span class="absolute top-4 left-4 bg-pizzaGold-500 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-white/20 shadow-sm">${item.tag}</span>` : ''}
                        </div>
                        <div class="p-7 space-y-3">
                            <h4 class="font-serif text-2xl font-bold text-warmCream-900 leading-tight">${item.title}</h4>
                            <p class="text-warmCream-800 text-base leading-relaxed font-medium">${item.desc}</p>
                            ${priceBlock(item)}
                        </div>
                    </div>
                    <div class="p-7 pt-0">
                        <a href="https://order.joespizzaofwhitesboro.com/" target="_blank" class="w-full bg-warmCream-200 hover:bg-pizzaRed-600 hover:text-white text-warmCream-900 text-base font-bold py-4 px-4 rounded-xl border border-warmCream-300 hover:border-pizzaRed-600 transition-all flex items-center justify-center gap-2">
                            <i data-lucide="shopping-bag" class="w-5 h-5"></i><span>Order Online</span>
                        </a>
                    </div>`;
                grid.appendChild(card);
            });
            const note = document.getElementById('toppings-note');
            if (note) note.style.display = (category==='all' || category==='pizza') ? 'block' : 'none';
            const extras = document.getElementById('extras-block');
            if (extras) extras.style.display = (category==='all' || category==='fingers' || category==='wings' || category==='subs') ? 'block' : 'none';
            lucide.createIcons();
        }

        function filterMenu(category) {
            document.querySelectorAll('.menu-cat-btn').forEach(btn => {
                btn.className = "menu-cat-btn px-6 py-3 rounded-full text-base font-bold transition-all bg-white hover:bg-warmCream-50 text-warmCream-800 border border-warmCream-300";
            });
            const active = document.getElementById(`cat-btn-${category}`);
            if (active) active.className = "menu-cat-btn px-6 py-3 rounded-full text-base font-bold transition-all bg-pizzaRed-600 text-white border border-pizzaRed-600 shadow-sm";
            renderMenuItems(category);
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