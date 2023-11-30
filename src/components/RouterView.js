import routes from "../routes";
import PropTypes from "prop-types";
import Layoutooo from "../views/layout/index";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
  json,
} from "react-router-dom";
// 属性传参props
function RouterView(props) {
  return (
    <Routes>
      {props.routeAll.map((routeItem, index) => {
        return (
          <Route
            path={routeItem.route}
            element={
              routeItem.name == "Layout" ? (
                <Layoutooo aaa={{ id: 1 }}></Layoutooo>
              ) : (
                routeItem.component
              )
            }
            key={routeItem.key}
          >
            {routeItem.children
              ? routeItem.children.map((routeItem2) => {
                  return (
                    <Route
                      path={routeItem2.route}
                      element={routeItem2.component}
                      key={routeItem2.key}
                    ></Route>
                  );
                })
              : ""}
          </Route>
        );
      })}
      {/* <Route path="/layout" element={<Layoutooo />}>
                  <Route path="erji" element={<Erji />}></Route>
                </Route> */}
      {/* {getRoutes(routes)} */}
      {/* <Route path="*" element={<Navigate to="/layout" />} /> */}
    </Routes>
  );
}
// 属性类型检查
Layoutooo.propTypes = {
  aaa: PropTypes.object,
};
// const arr = [1,2,3,3]
// const uuu = arr.find((x) => {
//   return x == 3
// })
// console.log(uuu)
// const arr = [
//   { id: 3, name: "ppp" },
//   { id: 3, name: "222" },
// ];
// const uuu = arr.find((x) => {
//   return x.id == 3;
// });

// function jjj() {
//   console.log("llll", this);
// }
// let gg = new jjj();

// class AS {
//   constructor() {
//     console.log(this)
//   }
//   jj = () => {
//     console.log('lll',this);
//   };
//   kkk(params) {
//     console.log(this);
//   }
// }
// let op = new AS();
// op.jj();
// op.kkk();
// console.log(op)

// const lll = () => {
//   console.log("llll2", this);
// };
// lll();
// console.log(uuu);

export default RouterView;