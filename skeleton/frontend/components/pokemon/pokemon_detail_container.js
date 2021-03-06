import { connect } from 'react-redux';
import PokemonDetail  from './pokemon_detail';
import { selectSinglePokemon } from '../../reducer/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = ({ pokemonDetail }) => ({
  pokemonDetail: pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => (
    dispatch(requestSinglePokemon(id))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
