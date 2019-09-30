import Route from '@ember/routing/route';
//import { inject } from '@ember'

export default Route.extend({
    postal_code: null,
    federal_sudject: '',
    city: '',
    street: '',
    house: null,
    building: null,
    flat: null,
    address: '',
    actions: {
        place() {
            alert(`${this.city}`);
            //this.set('address', '');
            //this.set('city', '');
            //this.$.get('http://localhost:51847/api/values');
            //this.$.post("http://localhost:51847/api/values", "Ember");
            //this.set(address, this.$.get('http://localhost:51847/api/values/0'));
            /*this.$.ajax({
                method: "GET",
                url: "/api/values",
                //data: { string : "ajax was here"},
                //dataType: "application/json; charset=utf-8"
            })
            .done(function() {
                alert( "success" );
              })
            .fail(function() {
                alert( "error" );
              })
            .always(function() {
                alert( "complete" );
              });*/
            return false;
        }
      }
});
