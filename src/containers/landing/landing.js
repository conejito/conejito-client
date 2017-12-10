import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'

import './landing.css';

import Button from '../../components/button/button';
import Logo from '../../components/logo/logo';
import Carousel from '../../components/carousel/carousel';

const Landing = (props) => (
  <div className='landing'>
    <Logo variant='small' />
    <Carousel 
      settings={{
        speed: 400
      }} 
      slides={[
        { conejito: "bag", title: "abc", text: "abc" },
        { conejito: "eat", title: "Nie wiesz gdzie zjeść?", text: "Po prostu spytaj! Zastanawiałeś się gdzie jest najbliższa kawiarnia, albo do jakiej pizzerii udać się dzisiaj z rodziną? Teraz możesz w łatwy sposób poznać odpowiedź" } ,
        { conejito: "popcorn", title: "Szukasz rozrywki na wieczór?", text: "Kino, galeria sztuki, a może spa? Wybierz co chcesz i spytaj Conejito, a on przedstawi Ci możliwości, z nim na pewno coś znajdziesz :)" } 
      ]} />
    <Button onClick={props.goToChat} text="Przejdź do aplikacji" />
    {/* <h1>Premiera już wkrótce...</h1> */}
    <p className='cookie-info'>Nasza strona wykorzystuje mechanizm cookies.</p>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToChat: () => dispatch(push('/chat'))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing))
