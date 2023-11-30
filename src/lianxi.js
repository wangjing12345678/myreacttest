import React, { useEffect, useState } from "react";
import "./index.css";
import { Provider } from "react-redux";
import { persistor } from "./views/81Redux/index";
import store from "./views/81Redux/index";
import './views/91antd/index.css'


import TestRef from "./views/ref";
import TestState from "./views/state";
import Xuanxiangka from "./views/21选项卡/21选项卡";
import Shuxing from "./views/26属性/26属性";
import Hanshu from "./views/29函数式组件/29函数式组件";
import Shoukong from "./views/31受控非受控";
import Fuzi from "./views/34父子通信";
import Biaodanyu from "./views/37表单域父子通信";
import Fabudingyue from "./views/40发布订阅模式";
import ContextMethods from "./views/41context";
import Chacao from "./views//42插槽";
import Shengmingzhouqi from "./views/43类组件生命周期";
import Youhuahanshu from "./views/43类组件生命周期/优化函数体现";
import Shengmingzhouqianli from "./views/50生命周期案例";
import Xinshengmingzhouqi from "./views/54新生命周期";
import Swiperlianxi from "./views/56swiper";
import UseStateText from "./views/58hooks/useStateText";
import UseEffectTest from "./views/58hooks/useEffect";
import UseCallbackTest from "./views/58hooks/useCallback";
import UseMemoTest from "./views/58hooks/useMemo";
import UseRefTest from "./views/58hooks/useRef";
import UseContextTest from "./views/58hooks/useContext";
import UseReducerTest from "./views/58hooks/useReducer";
import UseReducer2Test from "./views/58hooks/useReducer2";
import UseMyHooks from "./views/58hooks/自定义hooks";
import RouterTest from "./views/68路由/index";
import ReactReduxTest from "./views/87react-redux/index";
import AntdTest from "./views/91antd";
import TestImmutable from "./views/99immutable";
import HightTest from "./views/99immutable/进阶immutable";
import EasyImmutable from "./views/99immutable/简单版本immutable";
import TestImmutableRedux from "./views/102immutable-redux/index";

// 引入持久化
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <div>
      {/* <Xuanxiangka></Xuanxiangka> */}
      {/* <Shuxing></Shuxing> */}
      {/* <Hanshu></Hanshu> */}
      {/* <Shoukong></Shoukong> */}
      {/* <Fuzi></Fuzi> */}
      {/* <Biaodanyu></Biaodanyu> */}
      {/* <Fabudingyue></Fabudingyue> */}
      {/* <ContextMethods></ContextMethods> */}
      {/* <Chacao></Chacao> */}
      {/* <Shengmingzhouqi></Shengmingzhouqi> */}
      {/* <Youhuahanshu></Youhuahanshu> */}
      {/* <Shengmingzhouqianli></Shengmingzhouqianli> */}
      {/* <Xinshengmingzhouqi></Xinshengmingzhouqi> */}
      {/* <Swiperlianxi></Swiperlianxi> */}
      {/* <UseStateText></UseStateText> */}
      {/* <UseEffectTest></UseEffectTest> */}
      {/* <UseCallbackTest></UseCallbackTest> */}
      {/* <UseMemoTest></UseMemoTest> */}
      {/* <UseRefTest></UseRefTest> */}
      {/* <UseContextTest></UseContextTest> */}
      {/* <UseReducerTest></UseReducerTest> */}
      {/* <UseReducer2Test></UseReducer2Test> */}
      {/* <UseMyHooks></UseMyHooks> */}
      {/* <RouterTest></RouterTest> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <ReactReduxTest></ReactReduxTest> */}
          {/* <AntdTest></AntdTest> */}
   
        
        </PersistGate>
      </Provider>
      {/* <TestImmutable></TestImmutable> */}
      {/* <HightTest></HightTest> */}
      {/* <EasyImmutable></EasyImmutable> */}
      <TestImmutableRedux></TestImmutableRedux>
      
    </div>
  );
}

export default App;
