import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from './'
import Main from './Main.js';
import Counter from './Counter.js'

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default App
