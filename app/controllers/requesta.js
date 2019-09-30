import Controller from '@ember/controller';
//import { inject } from '@ember/service'

export default Controller.extend({
        //ajax: inject.service(),
        actions: {
          sendRequest() {
            this.$.ajax({
              method: "GET",
              url: "http://localhost:51847/api/values",
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
            });
          }
        }
      });
