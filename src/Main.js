import React from 'react';

//pictures
import restaurantFood from "./restauranfood.jpg";
import greekSalad from "./greek salad.jpg";
import bruchetta from "./Bruchetta.jpg";
import lemonDessert from "./lemon dessert.jpg";
import restaurant from "./restaurant.jpg";
import chef from "./restaurant chef B.jpg";
import user from "./user.jpg"

function Main() {
    return (
        <main>
            <section id="intro" class="greenstyle">
                <div class="text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Reserve a Table</button>
                </div>
                <img src={restaurantFood} alt='restaurant' class="round"/>
            </section>
            <section id="specials">
                <div id="tittle">
                    <h2>Specials</h2>
                    <button>Online Menu</button>
                </div>
                <div class="items">
                    <article class="dish">
                    <img src={greekSalad} alt='salad'/>
                        <div class="itemprice">
                            <h6>Greek Salad</h6>
                            <p class="price">$12.99</p>
                        </div>
                        <p class="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <button class="order">Order a delivery</button>
                    </article>
                    <article class="dish">
                        <img src={bruchetta} alt='bruchetta'/>
                        <div class="itemprice">
                            <h6>Bruchetta</h6>
                            <p class="price">$5.99</p>
                        </div>
                        <p class="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <button class="order">Order a delivery</button>
                    </article>
                    <article class="dish">
                        <img src={lemonDessert} alt='dessert'/>
                        <div class="itemprice">
                            <h6>Lemon Dessert</h6>
                            <p class="price">$5.00</p>
                        </div>
                        <p class="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <button class="order">Order a delivery</button>
                    </article>
                </div>
            </section>
            <section id="testimonials">
                <div class="title">
                    <h2>Testimonials</h2>
                </div>
                <div class="items">
                    <article class="review">
                        <p class="Rating">5/5</p>
                        <div class="user">
                            <img src={user} alt='user'/>
                            <p class="Name">John</p>
                        </div>
                        <p class="description">This is their Review</p>
                    </article>
                    <article class="review">
                        <p class="Rating">5/5</p>
                        <div class="user">
                            <img src={user} alt='user'/>
                            <p class="Name">Maria</p>
                        </div>
                        <p class="description">This is their Review</p>
                    </article>
                    <article class="review">
                        <p class="Rating">5/5</p>
                        <div class="user">
                            <img src={user} alt='user'/>
                            <p class="Name">Marc</p>
                        </div>
                        <p class="description">This is their Review</p>
                    </article>
                    <article class="review">
                        <p class="Rating">5/5</p>
                        <div class="user">
                            <img src={user} alt='user'/>
                            <p class="Name">Lenny</p>
                        </div>
                        <p class="description">This is their Review</p>
                    </article>
                </div>
            </section>
            <section id="about" class="greenstyle">
                <div class="text">
                    <h3>Little Lemon</h3>
                    <h4>Chicago</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </div>
                <div class="pictures">
                    <img src={restaurant} alt='restaurant'/>
                    <img src={chef} alt='chef'/>
                </div>
            </section>
        </main>
    );
  }

  export default Main;