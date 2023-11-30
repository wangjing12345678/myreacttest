// 异步的情况
// redux-thunk
// export function getCinemsListAction() {
//   return (dispatch) => {
//     let list = [];
//     setTimeout(() => {
//       list = [1, 3, 5, 6];
//       dispatch({
//         type: "change-list",
//         value: list,
//       });
//     }, 5000);
//   };
// }


//redux-promise
function moniPromise() {
  let list = [];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      list = [1, 3, 5, 6];
      resolve(list);
    });
  });
}

export function getCinemsListAction() {
  return moniPromise().then((res) => {
    return {
      type: "change-list",
      value: res,
    };
  });
}
