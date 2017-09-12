angular.module('myApp', ['dataGrid', 'pagination', 'ngMaterial']).config(function($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  }).filter('keyboardShortcut', function($window) {
    return function(str) {
      if (!str) return;
      var keys = str.split('-');
      var isOSX = /Mac OS X/.test($window.navigator.userAgent);

      var seperator = (!isOSX || keys.length > 2) ? '+' : '';

      var abbreviations = {
        M: isOSX ? '⌘' : 'Ctrl',
        A: isOSX ? 'Option' : 'Alt',
        S: 'Shift'
      };

      return keys.map(function(key, index) {
        var last = index == keys.length - 1;
        return last ? key : abbreviations[key];
      }).join(seperator);
    };
  }).controller('myAppController', ['$rootScope','$scope','myAppFactory', function ($rootScope,$scope, myAppFactory) {


        $scope.gridOptions = {
            data: [],
            urlSync: false
        };
       /* myAppFactory.getData().then(function (responseData) {
            $scope.gridOptions.data = responseData.data;
        })*/
	 $scope.gridOptions.data = [{"total":{"currencyIso":"USD","priceType":"BUY","value":6100,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 0"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Valid","code":"Divya Anil Ranjit Shyam 0","placed":1417402800000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1100,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 1"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 1","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1125,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 2"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 2","placed":1398135600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1025,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 3"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 3","placed":1398135600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1080,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 4"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 4","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1050,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 5"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 5","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1080,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 6"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 6","placed":1397790000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1135,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 7"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 7","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":975,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 8"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 8","placed":1398135600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":150,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 9"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 9","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":975,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 10"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 10","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1067.85,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 11"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 11","placed":1400727600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1067.85,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 12"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 12","placed":1401073200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":980,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 13"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 13","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1091.9,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 14"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 14","placed":1404788400000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1067.85,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 15"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 15","placed":1400727600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1100,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 16"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 16","placed":1397790000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1092.85,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 17"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 17","placed":1401073200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1125,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 18"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 18","placed":1397790000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":975,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 19"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 19","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":950,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 20"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 20","placed":1398135600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1025,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 21"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 21","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":75,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 22"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Complete","code":"Divya Anil Ranjit Shyam 22","placed":1394766000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1122.85,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 23"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 23","placed":1400727600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":975,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 24"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 24","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":50,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 25"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 25","placed":1396580400000},{"total":{"currencyIso":"USD","priceType":"BUY","value":0,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 26"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 26","placed":1395975600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1075,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 27"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 27","placed":1397790000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1100,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 28"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 28","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1315.45,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 29"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 29","placed":1401073200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1050,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 30"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 30","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1136.9,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 31"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 31","placed":1397790000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1005,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 32"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 32","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1050,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 33"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 33","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":975,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 34"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 34","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1073.8,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 35"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 35","placed":1400727600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1067.85,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 36"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 36","placed":1400727600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1035,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 37"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 37","placed":1398135600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":0,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 38"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 38","placed":1395975600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1125,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 39"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 39","placed":1397790000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1179.75,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 40"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 40","placed":1400727600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1067.85,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 41"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 41","placed":1401073200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":950,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 42"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 42","placed":1398135600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":950,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 43"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 43","placed":1398049200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1050,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 44"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 44","placed":1398135600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1030,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 45"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 45","placed":1398135600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1475,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 46"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 46","placed":1398135600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":975,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 47"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 47","placed":1398135600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1067.85,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 48"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 48","placed":1400727600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1067.85,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 49"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 49","placed":1401073200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1067.85,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 50"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 50","placed":1400727600000},{"total":{"currencyIso":"USD","priceType":"BUY","value":5.95,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 51"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Complete","code":"Divya Anil Ranjit Shyam 51","placed":1410145200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":59.5,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 52"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Complete","code":"Divya Anil Ranjit Shyam 52","placed":1410145200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1125,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 53"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Complete","code":"Divya Anil Ranjit Shyam 53","placed":1392260400000},{"total":{"currencyIso":"USD","priceType":"BUY","value":50,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 54"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Complete","code":"Divya Anil Ranjit Shyam 54","placed":1392260400000},{"total":{"currencyIso":"USD","priceType":"BUY","value":0,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 55"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 55","placed":1392606000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":61.9,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 56"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Valid","code":"Divya Anil Ranjit Shyam 56","placed":1392260400000},{"total":{"currencyIso":"USD","priceType":"BUY","value":3125,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 57"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 57","placed":1391569200000},{"total":{"currencyIso":"USD","priceType":"BUY","value":130.95,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 58"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 58","placed":1392174000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":0,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 59"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 59","placed":1392606000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":0,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 60"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 60","placed":1392606000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":0,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 61"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Complete","code":"Divya Anil Ranjit Shyam 61","placed":1392692400000},{"total":{"currencyIso":"USD","priceType":"BUY","value":0,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 62"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 62","placed":1392606000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":20,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 63"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 63","placed":1392606000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":50,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 64"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Complete","code":"Divya Anil Ranjit Shyam 64","placed":1392692400000},{"total":{"currencyIso":"USD","priceType":"BUY","value":75,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 65"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Complete","code":"Divya Anil Ranjit Shyam 65","placed":1392692400000},{"total":{"currencyIso":"USD","priceType":"BUY","value":50,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 66"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 66","placed":1393470000000},{"total":{"currencyIso":"USD","priceType":"BUY","value":1541.09,"maxQuantity":null,"minQuantity":null,"formattedValue":"Divya Ranjit Anil Shyam 67"},"guid":null,"managers":null,"purchaseOrderNumber":null,"status":null,"b2bPermissionResults":null,"statusDisplay":"Hold","code":"Divya Anil Ranjit Shyam 67","placed":1384484400000}];
	 
	   $scope.isChecked = function() {
    return $scope.selected.length === $scope.gridOptions.data.length;
  };

  $scope.toggleAll = function() {
    if ($scope.selected.length === $scope.gridOptions.data.length) {
      $scope.selected = [];
    } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
      $scope.selected = $scope.gridOptions.data.slice(0);
    }
  };
   $rootScope.$on('$viewContentLoaded', function() {
    $timeout(function() {
        componentHandler.upgradeAllRegistered();
    },0);
}); 
	$scope.DemoCtrl =  function($mdDialog){
    this.settings = {
      printLayout: true,
      showRuler: true,
      showSpellingSuggestions: true,
      presentationMode: 'edit'
    };
	}
    $scope.sampleAction = function(name, ev) {
      $mdDialog.show($mdDialog.alert()
        .title(name)
        .textContent('You triggered the "' + name + '" action')
        .ok('Great')
        .targetEvent(ev)
      );
    };
  
	}])
    .factory('myAppFactory', function ($http) {
        return {
            getData: function () {
                return $http({
                    method: 'GET',
                    url: 'https://angular-data-grid.github.io/demo/data.json'
                });
            }
        }
    }).directive('onFileChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.onFileChange);

      element.bind('change', function() {
        scope.$apply(function() {
          var files = element[0].files;
          if (files) {
            onChangeHandler(files);
          }
        });
      });

    }
  };
});
	
	angular.module('tabsDemoDynamicHeight', ['ngMaterial']);