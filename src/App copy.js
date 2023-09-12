import logo from "./logo.svg";
import React, {useEffect} from 'react';
import "./App.css";
import store from "./store/index";
import { connect, Provider } from "react-redux";
import { changeTest,setkk } from './store/actions'
// import Un from './views/button'
import { Button } from 'antd';
// import 'antd/dist/reset.css';

class NotesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testState: '自己的state'
    }
  }
  
  render() {
    const {activateLasers} = this.props;
    return (
      <div>
        <div>{this.props.aa}</div>
        <div onClick={activateLasers}>点击</div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    aa: state.testChange
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    activateLasers: (...args) =>{
      dispatch(setkk('0000')).then(() => {
        console.log(ownProps)
        console.log(args)
        // this.setState('testState',0)
        // console.log(this.getState('testState'))
      })
    }  
  }
};

// function activateLasers(){
//   console.log('lll')

// }

const NodeListCon = connect(mapStateToProps, mapDispatchToProps)(NotesList)

function App() {
  useEffect(() => {
    // 监听state的变化
    let unsubscribe  = store.subscribe(() => {
      console.log('监听中..',store.getState())
    })
    return () => {
      // 取消监听
      unsubscribe();
    }
  },[])
  return (
    <Provider store={store}>
      <div className="App">
        {store.getState().testChange}
      </div>
      <NodeListCon jjj={12}></NodeListCon>
      <Button type="primary">Button</Button>
    </Provider>
  );
}

export default App;
