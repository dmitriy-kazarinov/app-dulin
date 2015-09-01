/**
 * Created by Dima on 01.06.2015.
 */
appDulin.config(function($typeaheadProvider) {
    angular.extend($typeaheadProvider.defaults, {
        minLength: 1,
        trigger: 'click',
        autoSelect:true
    });
});