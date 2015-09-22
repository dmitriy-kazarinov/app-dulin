/**
 * Created by Dima on 01.06.2015.
 */
appDulin.controller('invoiceCtrl',['$scope','invoiceService',
    function($scope,invoiceService){
        $scope.invoiceAll={
            services: []
        };
        invoiceService.get(function(data){
            $scope.invoiceAll = data;
        });
        $scope.agentInfo = {};
        //$scope.dateNow = Date.now();
        $scope.agentInfo.date = new Date();

        $scope.addItem = function(service) {
            $scope.invoiceAll.services.push(service);
            $scope.servicInfo = {};
        };


        $scope.totalPrice = function(){

            var total = 0,
                servicesCount = $scope.invoiceAll.services;
            for(var count = 0;count < servicesCount.length; count++){
                total += servicesCount[count].price*servicesCount[count].quantity;
            }
            return total;
        };

        $scope.removeService = function(service){
            $scope.invoiceAll.services.splice(service,1);
            $scope.service = {};
        };

        $scope.clearService = function(){
            $scope.service = {};
        };

        $scope.sendForm = function(obj1,obj2){
            //invoiceService.postAgent(obj);
            //console.log(obj1);
            //console.log(obj2);
            var mod = {
                "one": obj1,
                "two": obj2
            }
            invoiceService.postAgent(mod).success(
                function(){
                    //href to...
                }
            );
        };

        //$scope.states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

    }
]);