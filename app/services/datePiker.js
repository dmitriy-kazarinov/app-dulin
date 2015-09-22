/**
 * Created by Dima on 01.06.2015.
 */
appDulin.config(function($datepickerProvider) {
        angular.extend($datepickerProvider.defaults, {
            dateFormat: 'dd.MM.yyyy',
            startWeek: 1
        });
    });
