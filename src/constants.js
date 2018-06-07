const ip = 'http://10.31.88.72';
const constants={
    holdingsApiUrl : ip+':8081' + '/v1/api/items',
    configApiUrl : ip + ':8082' + '/v1/api/configs',
    ordersApiUrl : ip + ':8083' + '/v1/api/orders',
    placeOrderUrl : ip + ':8083' + '/v1/api/placeOrder',
}
export default constants;
