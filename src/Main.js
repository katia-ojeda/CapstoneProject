import React from 'react';
import restaurantFood from "./restaurantfood.jpg";
import greekSalad from "./greek salad.jpg";

function Main() {
    return (
        <main>
            <section id="intro" class="greenstyle">
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Reserve a Table</button>
                </div>
                <img src={restaurantFood} alt='img'/>
            </section>
            <section id="specials">
                <h2>Specials</h2>
                <button>Online Menu</button>
                <article>
                <img src={greekSalad} alt='img'/>
                    <h6>Greek Salad</h6>
                    <p class="price">$12.99</p>
                    <p class="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <button class="order">Order a delivery</button>
                </article>
                <article>
                    {/* <img src={restaurantFood} alt='img'/> */}
                    <h6>Bruchetta</h6>
                    <p class="price">$5.99</p>
                    <p class="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <button class="order">Order a delivery</button>
                </article>
                <article>
                    {/* <img src={restaurantFood} alt='img'/> */}
                    <h6>Lemon Dessert</h6>
                    <p class="price">$5.00</p>
                    <p class="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <button class="order">Order a delivery</button>
                </article>
            </section>
            <section id="testimonials">
                <h2>Testimonials</h2>
                <article>
                    <p class="Rating">Rating</p>
                    {/* <img src='LittleLemonLogo.jpg' alt='img'/> */}
                    <p class="Name">Name</p>
                    <p class="Review">Review</p>
                </article>
                <article>
                    <p class="Rating">Rating</p>
                    {/* <img src='LittleLemonLogo.jpg' alt='img'/> */}
                    <p class="Name">Name</p>
                    <p class="Review">Review</p>
                </article>
                <article>
                    <p class="Rating">Rating</p>
                    {/* <img src='LittleLemonLogo.jpg' alt='img'/> */}
                    <p class="Name">Name</p>
                    <p class="Review">Review</p>
                </article>
                <article>
                    <p class="Rating">Rating</p>
                    {/* <img src='LittleLemonLogo.jpg' alt='img'/> */}
                    <p class="Name">Name</p>
                    <p class="Review">Review</p>
                </article>
            </section>
            <section id="about" class="greenstyle">
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                {/* <img src={restaurantFood} alt='img'/>
                <img src={restaurantFood} alt='img'/> */}
            </section>
        </main>
    );
  }

  export default Main;