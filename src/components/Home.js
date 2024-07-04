import React from 'react'

export const Home = () => {
  return (
    <>
      
      <title>travel planner</title>
<header class="header" data-header>

  <div class="overlay" data-overlay></div>

  <div class="header-top">
    <div class="container">

      <a href="tel:+01123456790" class="helpline-box">

        <div class="icon-box">

        </div>

        <div class="wrapper">
          <p class="helpline-title">For Further Inquires :</p>

          <p class="helpline-number">+01 (123) 5467 90</p>
        </div>

      </a>

      <a href="#" class="logo">
        Logo
      </a>

      <div class="header-btn-group">

        <button class="search-btn" aria-label="Search">

        </button>

        <button class="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>

        </button>

      </div>

    </div>
  </div>

  <div class="header-bottom">
    <div class="container">

      <ul class="social-list">

        <li>
          <a href="#" class="social-link">

          </a>
        </li>

        <li>
          <a href="#" class="social-link">

          </a>
        </li>

        <li>
          <a href="#" class="social-link">

          </a>
        </li>

      </ul>

      <nav class="navbar" data-navbar>

        <div class="navbar-top">

          <a href="#" class="logo">
            <img decoding="async" src="assets/images/logo-blue.svg" alt="Tourly logo"/>
          </a>

          <button class="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>

          </button>

        </div>

        <ul class="navbar-list">

          <li>
            <a href="#home" class="navbar-link" data-nav-link>home</a>
          </li>

          <li>
            <a href="#" class="navbar-link" data-nav-link>about us</a>
          </li>

          <li>
            <a href="#destination" class="navbar-link" data-nav-link>destination</a>
          </li>

          <li>
            <a href="#package" class="navbar-link" data-nav-link>packages</a>
          </li>

          <li>
            <a href="#gallery" class="navbar-link" data-nav-link>gallery</a>
          </li>

          <li>
            <a href="#contact" class="navbar-link" data-nav-link>contact us</a>
          </li>

        </ul>

      </nav>

      <button class="btn btn-primary">Book Now</button>

    </div>
  </div>

</header>





<main>
  <article>

    

    <section class="hero" id="home">
      <div class="container">

        <h2 class="h1 hero-title">Journey to explore world</h2>

        <p class="hero-text">
          Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos
          voluptatibus habitant?
          Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
        </p>

        <div class="btn-group">
          <button class="btn btn-primary">Learn more</button>

          <button class="btn btn-secondary">Book now</button>
        </div>

      </div>
    </section>





    

    <section class="tour-search">
      <div class="container">



          <div class="input-wrapper">
            <label for="destination" class="input-label">Search Destination*</label>


          </div>

          <div class="input-wrapper">
            <label for="people" class="input-label">Pax Number*</label>


          </div>

          <div class="input-wrapper">
            <label for="checkin" class="input-label">Checkin Date**</label>


          </div>

          <div class="input-wrapper">
            <label for="checkout" class="input-label">Checkout Date*</label>


          </div>

          <button type="submit" class="btn btn-secondary">Inquire now</button>



      </div>
    </section>





    

    <section class="popular" id="destination">
      <div class="container">

        <p class="section-subtitle">Uncover place</p>

        <h2 class="h2 section-title">Popular destination</h2>

        <p class="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
          Sit ornare
          mollitia tenetur, aptent.
        </p>

        <ul class="popular-list">

          <li>
            <div class="popular-card">

              <figure class="card-img">
                <img decoding="async" src="https://i.timesnowhindi.com/stories/Taj_Mahal.png" alt="San miguel, italy" loading="lazy"/>
              </figure>

              <div class="card-content">

                <div class="card-rating">





                </div>

                <p class="card-subtitle">
                  <a href="#">Taj_Mahal</a>
                </p>

                <h3 class="h3 card-title">
                  <a href="#">Agra</a>
                </h3>

                <p class="card-text">
                  
                </p>

              </div>

            </div>
          </li>

          <li>
            <div class="popular-card">

              <figure class="card-img">
                <img decoding="async" src="https://static.toiimg.com/photo/105088670.cms" alt="Burj khalifa, dubai" loading="lazy"/>
              </figure>

              <div class="card-content">

                <div class="card-rating">





                </div>

                <p class="card-subtitle">
                  <a href="#">Pik-city</a>
                </p>

                <h3 class="h3 card-title">
                  <a href="#">jaipur</a>
                </h3>

                <p class="card-text">
                  
                </p>

              </div>

            </div>
          </li>

          <li>
            <div class="popular-card">

              <figure class="card-img">
                <img decoding="async" src="https://top.his-usa.com/destination-japan/up_img/article/fs_1483980698_0.jpg" alt="Kyoto temple, japan" loading="lazy"/>
              </figure>

              <div class="card-content">

                <div class="card-rating">





                </div>

                <p class="card-subtitle">
                  <a href="#">Japan</a>
                </p>

                <h3 class="h3 card-title">
                  <a href="#">Kyoto temple</a>
                </h3>

                <p class="card-text">
                  
                </p>

              </div>

            </div>
          </li>

        </ul>

        <button class="btn btn-primary">More destintion</button>

      </div>
    </section>





    

    <section class="package" id="package">
      <div class="container">

        <p class="section-subtitle">Popular Packeges</p>

        <h2 class="h2 section-title">Checkout Our Packeges</h2>

        <p class="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
          Sit ornare
          mollitia tenetur, aptent.
        </p>

        <ul class="package-list">

          <li>
            <div class="package-card">

              <figure class="card-banner">
                <img decoding="async" src="https://www.bproperty.com/blog/wp-content/uploads/enviable-beach-locations-maldives-ingimage.jpg" alt="Experience The Great Holiday On Beach" loading="lazy"/>
              </figure>

              <div class="card-content">

                <h3 class="h3 card-title">Experience The Great Holiday On Beach</h3>

                <p class="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                  cras, aspernatur.
                </p>

                <ul class="card-meta-list">

                  <li class="card-meta-item">
                    <div class="meta-box">


                      <p class="text">7D/6N</p>
                    </div>
                  </li>

                  <li class="card-meta-item">
                    <div class="meta-box">


                      <p class="text">pax: 10</p>
                    </div>
                  </li>

                  <li class="card-meta-item">
                    <div class="meta-box">


                      <p class="text">Malaysia</p>
                    </div>
                  </li>

                </ul>

              </div>

              <div class="card-price">

                <div class="wrapper">

                  <p class="reviews">(25 reviews)</p>

                  <div class="card-rating">





                  </div>

                </div>

                <p class="price">
                  $750
                  <span>/ per person</span>
                </p>

                <button class="btn btn-secondary">Book Now</button>

              </div>

            </div>
          </li>

          <li>
            <div class="package-card">

              <figure class="card-banner">
                <img decoding="async" src="https://mytravelswitch.com/wp-content/uploads/2024/02/rayyu-maldives-xPsFXsbXJRg-unsplash-1-scaled.jpg" alt="Summer Holiday To The Oxolotan River" loading="lazy"/>
              </figure>

              <div class="card-content">

                <h3 class="h3 card-title">Summer Holiday To The Oxolotan River</h3>

                <p class="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                  cras, aspernatur.
                </p>

                <ul class="card-meta-list">

                  <li class="card-meta-item">
                    <div class="meta-box">


                      <p class="text">7D/6N</p>
                    </div>
                  </li>

                  <li class="card-meta-item">
                    <div class="meta-box">


                      <p class="text">pax: 10</p>
                    </div>
                  </li>

                  <li class="card-meta-item">
                    <div class="meta-box">


                      <p class="text">Malaysia</p>
                    </div>
                  </li>

                </ul>

              </div>

              <div class="card-price">

                <div class="wrapper">

                  <p class="reviews">(20 reviews)</p>

                  <div class="card-rating">





                  </div>

                </div>

                <p class="price">
                  $520
                  <span>/ per person</span>
                </p>

                <button class="btn btn-secondary">Book Now</button>

              </div>

            </div>
          </li>

          <li>
            <div class="package-card">

              <figure class="card-banner">
                <img decoding="async" src="https://www.moon.com/wp-content/uploads/2020/03/Santorini.png?w=640" alt="Santorini Island's Weekend Vacation" loading="lazy"/>
              </figure>

              <div class="card-content">

                <h3 class="h3 card-title">Santorini Island's Weekend Vacation</h3>

                <p class="card-text">
                  Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque,
                  cras, aspernatur.
                </p>

                <ul class="card-meta-list">

                  <li class="card-meta-item">
                    <div class="meta-box">


                      <p class="text">7D/6N</p>
                    </div>
                  </li>

                  <li class="card-meta-item">
                    <div class="meta-box">


                      <p class="text">pax: 10</p>
                    </div>
                  </li>

                  <li class="card-meta-item">
                    <div class="meta-box">


                      <p class="text">Malaysia</p>
                    </div>
                  </li>

                </ul>

              </div>

              <div class="card-price">

                <div class="wrapper">

                  <p class="reviews">(40 reviews)</p>

                  <div class="card-rating">





                  </div>

                </div>

                <p class="price">
                  $660
                  <span>/ per person</span>
                </p>

                <button class="btn btn-secondary">Book Now</button>

              </div>

            </div>
          </li>

        </ul>

        <button class="btn btn-primary">View All Packages</button>

      </div>
    </section>





    

    <section class="gallery" id="gallery">
      <div class="container">

        <p class="section-subtitle">Photo Gallery</p>

        <h2 class="h2 section-title">Photo's From Travellers</h2>

        <p class="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
          Sit ornare
          mollitia tenetur, aptent.
        </p>

        <ul class="gallery-list">

          <li class="gallery-item">
            <figure class="gallery-image">
              <img decoding="async" src="https://etimg.etb2bimg.com/thumb/msid-102797545,imgsize-83808,width-1200,height=765,overlay-ettravel/tourism/experiential/travel-insights-from-skyscanner-indian-travellers-embrace-budget-friendly-explorations-immersive-journeys.jpg" alt="Gallery image"/>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <img decoding="async" src="https://www.ezeeabsolute.com/blog/wp-content/uploads/2020/12/solo-traveller.png" alt="Gallery image"/>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <img decoding="async" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201508/traveller-story-img_647_082115070943.jpg?VersionId=UCaMpUTQdqYUx2F2L872Ysnqlr0HPLBX" alt="Gallery image"/>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <img decoding="async" src="https://www.shutterstock.com/image-photo/three-male-tourists-casual-wear-260nw-1477672220.jpg" alt="Gallery image"/>
            </figure>
          </li>

          <li class="gallery-item">
            <figure class="gallery-image">
              <img decoding="async" src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/1502695199185-1525369190.jpg" alt="Gallery image"/>
            </figure>
          </li>

        </ul>

      </div>
    </section>





    

    <section class="cta" id="contact">
      <div class="container">

        <div class="cta-content">
          <p class="section-subtitle">Call To Action</p>

          <h2 class="h2 section-title">Ready For Unforgatable Travel. Remember Us!</h2>

          <p class="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque
            laudantium. Sit ornare
            mollitia tenetur, aptent.
          </p>
        </div>

        <button class="btn btn-secondary">Contact Us !</button>

      </div>
    </section>

  </article>
</main>







<footer class="footer">

  <div class="footer-top">
    <div class="container">

      <div class="footer-brand">

        <p class="footer-text">
          Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia
          at
          perferendis, pretium, aenean aut ultrices.
        </p>

      </div>

      <div class="footer-contact">

        <h4 class="contact-title">Contact Us</h4>

        <p class="contact-text">
          Feel free to contact and reach us !!
        </p>

        <ul>

          <li class="contact-item">


            <a href="tel:+01123456790" class="contact-link">+01 (123) 9867 90</a>
          </li>

          <li class="contact-item">


            <a href="mailto:info.tourly.com" class="contact-link">info.tourly.com</a>
          </li>

          <li class="contact-item">


            <address>3146 Koontz, California</address>
          </li>

        </ul>

      </div>

      <div class="footer-form">

        <p class="form-text">
          Subscribe our newsletter for more update &amp; news !!
        </p>




          <button type="submit" class="btn btn-secondary">Subscribe</button>


      </div>

    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">

      <p class="copyright">
        &copy; 2024 <a href="">Developergtm</a>. All rights reserved
      </p>

      <ul class="footer-bottom-list">

        <li>
          <a href="#" class="footer-bottom-link">Privacy Policy</a>
        </li>

        <li>
          <a href="#" class="footer-bottom-link">Term &amp; Condition</a>
        </li>

        <li>
          <a href="#" class="footer-bottom-link">FAQ</a>
        </li>

      </ul>

    </div>
  </div>

</footer>







<a href="#top" class="go-top" data-go-top>

</a>








  

      
  

    </>
  );
};


