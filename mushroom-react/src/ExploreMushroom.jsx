import React from 'react'

function ExploreMushroom() {
    return (
        <>
            <section
                class="text-and-img text-and-img--with-links section section--pad-top-none section--pad-bottom-normal animated"
                data-animation="pop-on">
                <div class="text-and-img__container container">
                    <div class="row text-and-img__row">
                        <div class="col-12 col-lg-6 order-lg-2">
                            <div class="text-and-img__img circle-image animated__item">
                                <img src="https://www.mushroomcouncil.com/wp-content/uploads/2022/07/08_growing-varieities-pdf_0298-600x600.jpg"
                                    alt="" height="600" width="600"
                                    srcset="https://www.mushroomcouncil.com/wp-content/uploads/2022/07/08_growing-varieities-pdf_0298-600x600.jpg 600w, https://www.mushroomcouncil.com/wp-content/uploads/2022/07/08_growing-varieities-pdf_0298-150x150.jpg 150w, https://www.mushroomcouncil.com/wp-content/uploads/2022/07/08_growing-varieities-pdf_0298-1200x1200.jpg 1200w"
                                    loading="lazy" />
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 order-lg-1">
                            <div class="text-and-img__content offset-content pr-lg-0">
                                <h2 class="text-and-img__heading font-serif color-red display-2">Explore Mushrooms</h2>

                                <p class="subhead subhead--lined color-red">Mushroom 101</p>

                                <p class="fs-500">Mushrooms are nature’s hidden treasure: always in season and grown
                                    year-round.</p>

                                <div class="text-and-img__button">
                                    <a href="https://www.mushroomcouncil.com/mushroom-101/"
                                        class="btn btn-primary d-block d-sm-inline-block">
                                        Learn More </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row text-and-img__links-row">
                        <div class="col-12">
                            <div class="text-and-img__links">
                                <h3 class="text-and-img__links-heading subhead subhead--sm text-center text-lg-left">
                                    More To Mushroom</h3>

                                <div class="text-and-img__links-list">
                                    <div class="text-and-img__links-item mb-3 mb-md-8">
                                        <a href="https://www.mushroomcouncil.com/mushroom-101/how-mushrooms-grow/"
                                            class="tile-link">
                                            <div class="tile-link__media">
                                                <div class="tile-link__img bg-img bg-img--xs"
                                                    style={{ backgroundImage: "url(https://www.mushroomcouncil.com/wp-content/uploads/2022/07/how-to-prepare-mushrooms-94279846-960x540.jpg)" }}
                                                    role="img" aria-label=""
                                                >
                                                </div>


                                            </div>
                                            <div class="tile-link__content">
                                                <span class="tile-link__title">How to Grow Mushrooms</span>
                                                <span class="tile-link__arrow icn-long-arrow-right"
                                                    aria-hidden="true"></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="text-and-img__links-item mb-3 mb-md-8">
                                        <a href="https://www.mushroomcouncil.com/mushroom-101/how-to-videos/"
                                            class="tile-link">
                                            <div class="tile-link__media">
                                                <div class="tile-link__img bg-img bg-img--xs"
                                                    style={{ backgroundImage: "url(https://www.mushroomcouncil.com/wp-content/uploads/2022/07/how-to-prepare-mushrooms-94279846-960x540.jpg)" }}
                                                    role="img" aria-label=""
                                                >
                                                </div>


                                            </div>
                                            <div class="tile-link__content">
                                                <span class="tile-link__title">Preparing Mushrooms</span>
                                                <span class="tile-link__arrow icn-long-arrow-right"
                                                    aria-hidden="true"></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreMushroom