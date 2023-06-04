import React from 'react'
import { Link } from "react-router-dom";
import Marquee from 'react-fast-marquee';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
      {/* Section pour un welcome avec image en background et un effet de vitre noir */}
      <div className='untree-hero-container'>
        <div className=' untree-subcontainer'>
          <div className='row align-items-center'>
            <div className='text-white text-center position-absolute top-50 start-50 translate-middle'>
              <h1 className='welcome-text '> {/* fw-bold fs-4 fs-xl-5 */}
                Participez à la croissance des startups locaux et internationaux !
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Fin Section pour un welcome avec image en background et un effet de vitre noir*/}

      {/* Section Information */}
      <section class="information">
        <div class="container">
          <div class="row info-1">
            {/* <!-- Text info--> */}
            <div class="col-md-6">
              <div class="text-information">
                <h5>Genere des revenus et impressionne ton entourage de ton patriotisme </h5>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img src="images/clipart1.svg" alt="img-1" class="w-100 " />
            </div>
          </div>
          <div class="row info-2">
            {/* <!-- Image --> */}
            <div class="col-md-6">
              <img src="images/clipart2.svg" alt="img-2" class="w-100 " />
            </div>
            {/* <!-- Text info--> */}
            <div class="col-md-6">
              <div class="text-information">
                <h5>Investissement meme a faible budget mais la qualite reste la meme </h5>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section Projets de l'annee | Top 3 projets*/}
      <section class="information p-3 m-0 border-0 bd-example m-0 border-0">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card product-card">

              <h3 class="card-title">
                <span className="right-gap">
                  <img src="images/ejara.png"
                    alt="Image produit 1"
                    width="70"
                    height="70" />
                </span>
                Ejara
              </h3>
              <div class="card-body">
                <p>Description 3-4 lignes d'Ejara</p>
              </div>
              <div class="card-footer">
                <div class="stars">
                  {/* <!-- Composant React Star avec une valeur aléatoire entre 3.8 et 5 --> */}
                </div>
                <a href="#">Voir Plus</a>
              </div>
            </div>
          </div>
          <div class=" col-sm-12 col-md-6 col-lg-4">
            <div class=" card product-card ">

              <h3 class="card-title">
                <span className="right-gap">
                  <img src="images/maviance.jpeg"
                    alt="Image produit 2"
                    width="70"
                    height="70" />
                </span>
                Maviance
              </h3>
              <div class="card-body">
                <p>Description 3-4 lignes de Maviance</p>
              </div>
              <div class="card-footer">
                <div class="stars">
                  {/* <!-- Composant React Star avec une valeur aléatoire entre 3.8 et 5 --> */}
                </div>
                <a href="#">Voir Plus</a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card product-card">

              <h3 class="card-title">
                <span className="right-gap">
                  <img src="images/image_google.png"
                    alt="Image produit 3"
                    width="70"
                    height="70" />
                </span>
                Google
              </h3>
              <div class="card-body">
                <p>Description 3-4 lignes de Google</p>
              </div>
              <div class="card-footer">
                <div class="stars">
                  {/* <!-- Composant React Star avec une valeur aléatoire entre 3.8 et 5 --> */}
                </div>
                <a href="#">Voir Plus</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section defilement brand | Partenaires */}
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className=' center align-center-items'>
              <h1>Il nous font Confiance</h1>
            </div>
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-label='myNkwa brnd'>
                    <g transform="translate(241.982 94.476)">
                      <path d="M-68.426-93.964A107.641,107.641,0,0,1-171.333-1.705,93.052,93.052,0,0,1-78.28-94.476,96.964,96.964,0,0,1-68.426-93.964Z" fill="#2fb28f"></path>
                      <path d="M-174.986-2.564c0,.281,0,.578-.017.859a67.088,67.088,0,0,1-66.979-63.639c1.356-.082,2.712-.132,4.084-.132A62.911,62.911,0,0,1-174.986-2.564Z" fill="#2fb28f">
                      </path>
                    </g>
                  </svg>
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-09.png" alt="Mboa Digital brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-10.png" alt="Cotco brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-11.png" alt="CBC BANK brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-12.png" alt="5NKAP brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-13.jpg" alt="Broli brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-14.png" alt="Waspito brand" style={{ backgroundColor: "limegreen" }} />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-15.png" alt="Digital Square brand" style={{ backgroundColor: "#0076a4" }} />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      {/* Section creer un compte | Profils*/}
      <section class="information mx-auto">
        <div className="items text-center">
          <div class="row align-items-center">
            <div class="col-md-4 bottom-gap-md">
              <img src="images/icons-1.svg" alt="Description de l'image" />
              <div class="desc">
                <h3>Projet/Startup</h3>
                <p>Créer un compte pour startup</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-arrow-right"></i> Bouton</a>
              </div>
            </div>
            <div class="col-md-4 bottom-gap-md">
              <img src="images/icons-1.svg" alt="Description de l'image" />
              <div class="desc">
                <h3>Investisseur</h3>
                <p>Créer un compte</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-arrow-right"></i> Bouton</a>
              </div>
            </div>
            <div class="col-md-4 bottom-gap-md">
              <img src="images/icons-1.svg" alt="Description de l'image" />
              <div class="desc">
                <h3>Banque</h3>
                <p>Créer un compte en tant que Banque</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-arrow-right"></i> Bouton</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume 3 columns svg //Archivee mtn
      <section class="setup">
        <div class="items text-center">
          <div class="row">
            <div class="col-md-4">
              <div class="icons">
                <Link to='/'>
                  <img src="images/icons-1.svg" alt="icons" />
                </Link>
              </div>
              <div class="desc">
                <h5>Create accounts</h5>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icons">
                <Link to='/'>
                  <img src="images/icons-2.svg" alt="icons" />
                </Link>
              </div>
              <div class="desc">
                <h5>Faites des profits patriotiques </h5>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
              </div>

            </div>
            <div class="col-md-4">
              <div class="icons">
                <Link to='/'>
                  <img src="images/icons-3.svg" alt="icons" />
                </Link>
              </div>
              <div class="desc">
                <h5>Faites connaitre votre startup de tous</h5>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
              </div>

            </div>
          </div>
        </div>
      </section> */}


      {/* Warning Section */}
      <section className='setup'>
        <div className='items text-center'>
          <div class="container">
            <div class="text-header text-center">
              <h3>Rejoignez les meilleurs investisseurs et soutenez des projets originaux avec nous.</h3> {/*Rejoignez les meilleurs investisseurs et soutenez des projets originaux avec nous.*/}
              <p>
                L'investissement participatif présente un risque important de perte partielle ou totale du capital ainsi qu'un risque d'illiquidité. <br />
                Un crédit vous engage et doit être remboursé. N'empruntez pas au-delà de votre capacité de remboursement.
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  );

}

export default Home
