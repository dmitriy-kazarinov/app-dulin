/**
 * Created by Dima on 01.06.2015.
 */
appDulin.factory('invoiceService',['$http',
    function($http){
        return {
            get: function(callback){
                $http.get('json/invoice.json').success(function(data) {
                    callback(data);
                });
            },
            'postAgent': function(data){
               return $http.post('json/invoice.json',data);
            }
        };

    }
]);