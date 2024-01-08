let navbar=()=>{
    return `<div id="nav">
    <div onclick="location.href='http://127.0.0.1:5500/source-1/lp.html'">
        <img src="data:image/jpeg;base64,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" alt="">
    </div>
    <div id="nav_cat">
        <div><h3>MEN</h3></div>
        <div><h3>WOMEN</h3></div>
        <div><h3>KIDS</h3></div>
        <div><h3>HOME & LIVING</h3></div>
        <div><h3>BEAUTY</h3></div>
    </div>
    <div id="nav_search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input style="border: none;" type="search" placeholder="Search for products, brands and more">
    </div>
    <div>
        <div id="nav_profile">
            <i class="fa-solid fa-user"></i>
            <p>Profile</p>
        </div>
        <div onclick="location.href='http://127.0.0.1:5500/source-3/wishlist-page.html'">
            <i class="fa-solid fa-heart"></i>
            <p>Wishlist</p>
        </div>
        <div onclick="location.href='http://127.0.0.1:5500/source-3/bag-page.html'">
            <i class="fa-solid fa-bag-shopping"></i>
            <p>Bag</p>
        </div>
    </div>
</div>
<div id="drop">
    <div style="display: flex;">
        <div style="background-color: white;">
            <p class="nav-color">Boys Clothing</p>
            <p>T-Shirts</p>
            <p>Shirts</p>
            <p>Shorts</p>
            <p>Jeans</p>
            <p>Trousers</p>
            <p>Clothing Sets</p>
            <p>Ethnic Wear</p>
            <p>Track Pants & Pyjamas</p>
            <p>Jacket, Sweater & Sweats</p>
            <p>Party Wear</p>
            <p>Innerwear & Thermals</p>
            <p>Nightwear & Loungewear</p>
            <p>Value Packs</p>
        </div>
        <div style="background-color: azure;">
            <p class="nav-color">Girls Clothing</p>
            <p>Dresses</p>
            <p>Tops</p>
            <p>Tshirts</p>
            <p>Clothing Sets</p>
            <p>Lehenga choli</p>
            <p>Kurta Sets</p>
            <p>Party wear</p>
            <p>Dungarees & Jumpsuits</p>
            <p>Skirts & shorts</p>
            <p>Tights & Leggings</p>
            <p>Jeans, Trousers & Capris</p>
            <p>Jacket, Sweater & Sweats</p>
            <p>Innerwear & Thermals</p>
            <p>Nightwear & Loungewear</p>
            <p>Value Packs</p>
        </div>
        <div style="background-color: white;">
            <p class="nav-color">Footwear</p>
            <p>Casual Shoes</p>
            <p>Flipflops</p>
            <p>Sports Shoes</p>
            <p>Flats</p>
            <p>Sandals</p>
            <p>Heels</p>
            <p>School Shoes</p>
            <p>Socks</p>
            <hr>
            <p class="nav-color">Toys</p>
            <p>Learning & Development</p>
            <p>Activity Toys</p>
            <p>Soft Toys</p>
            <p>Action Figure / Play set</p>
        </div>
        <div style="background-color: azure;">
            <p class="nav-color">Infants</p>
            <p>Bodysuits</p>
            <p>Rompers & Sleepsuits</p>
            <p>Clothing Sets</p>
            <p>Tshirts & Tops</p>
            <p>Dresses</p>
            <p>Bottom wear</p>
            <p>Winter Wear</p>
            <p>Innerwear & Sleepwear</p>
            <p>Infant Care</p>
            <hr>
            <p class="nav-color">Home & Bath</p>
            <br>
            <p class="nav-color">Personal Care</p>
        </div>
        <div style="background-color: white;">
            <p class="nav-color">Kids Accessories</p>
            <p>Bags & Backpacks</p>
            <p>Watches</p>
            <p>Jewellery & Hair accessory</p>
            <p>Sunglasses</p>
            <p>Masks & Protective Gears</p>
            <p>Caps & Hats</p>
            <hr>
            <p class="nav-color">Brands</p>
            <p>H&M</p>
            <p>Max Kids</p>
            <p>Pantaloons</p>
            <p>United Colors Of Benetton</p>
            <p>YK</p>
            <p>U.S. Polo Assn. Kids</p>
            <p>Mothercare</p>
            <p>HRX</p>
        </div>
    </div>
</div>
<div id="profile_drop">
    <p>Hello there</p>
    <p>9776467878</p>
    <hr>
    <p>Orders</p>
    <p>Wishlist</p>
    <p>Gift Cards</p>
    <p>Contact Us</p>
    <p>Myntra Insider</p>
    <hr>
    <p>Orders</p>
    <p>Wishlist</p>
    <p>Gift Cards</p>
    <p>Contact Us</p>
    <p>Myntra Insider</p>
    <hr>
    <p>Edit profile</p>
    <p>Logout</p>
</div>`
}

export default navbar