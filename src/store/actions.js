export function changeTest(data) {
    return { type: "SET_TEST", data: data }
}
function kk(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        }, 1000);
    })
}
// 异步发送action

export function setkk(data) {
    return async dispatch => {
        let aa = await kk()
        dispatch(changeTest(data));
    };
}
