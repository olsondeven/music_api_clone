angular.module('noServerProject').service('mainService', function($http, $q, $state) {

  // this.getTest = function(){
  //   $http({
  //     method: 'GET',
  //     url: ' '
  //   });
  // };

  //Get currentUser-------------------------------------------------------------------------------------------------------------------------//
  this.getCurrentUser = function(){
      srvGetUser();
      return JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('currentUser'))));
  };
  //End get currentUser --------------------------------------------------------------------------------------------------------------------//
  //logout----------------------------------------------------------------------------------------------------------------------------------//
  this.logout = function(){
    localStorage['currentUser'] = null;
  };
  //end logout------------------------------------------------------------------------------------------------------------------------------//

    //login/create--------------------------------------------------------------------------------------------------------------------------//
    this.createUser = function(n, p) {
        if (!localStorage.getItem(n)) {
            var obj = new UserObj(n,p);
            // console.log('service JSON set', obj);
            localStorage.setItem(n, JSON.stringify(obj));
            swal('Account Created');
            $state.go('login');
        } else {
            swal('This user already exists\n Please sign in \^\_\^');
            $state.go('login');
        }
    };
    //login/set
    this.userLogin = function(n, p) {
      // console.log('service login');
      if (!localStorage.getItem(n)) {
        swal('Not a user\n Please create an account');
        $state.go('createAcct');
      }else{
        localStorage.setItem("currentUser", JSON.stringify(n));

      swal('Welcome '+n);
      $state.go('search');
    }
    };
    //-----------------------get search request to API----------------------------------------------------------------------------//
    var pageCount = 20;
    this.search = function(str, type) {
        return $http({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit='+pageCount+'&type=' + type + '&market=US',
        }).then(function(response) {
            if (response.status === 200) {
                console.log('Srv Search',response.data);
                return response;
            } else {
                console.log(response.statusText);
            }
        });
    };

    this.setPage = function(currentUrl){
      if(currentUrl === null){
        return console.log('stop page request');
      }
      return $http({
        method: 'GET',
        url: currentUrl,
      }).then(function(response){
        if(response.status === 200){
          console.log('Srv setPage',response.data);
          return response;
        } else {
          console.log('SRV setPage',response.statusText);
        }
      });
    };
    //-----------------------end search request to API -------------------------------------------------------------------------//
    //Save favorites----------------------------------------------------------------------------------------------------------------//
    this.saveInfo = function(obj) {
      console.log('saveInfo srv', localStorage.getItem('currentUser'));
        if (!localStorage.getItem('currentUser')) {
          alert('Please login to like');
          //in sweet alert us a button that shows login button, this is direct them to the login view
        }else{
          if (obj.type === 'artist') {
              serviceUser.favArtists.push(obj);
          }
          if (obj.type === 'album') {
              serviceUser.favAlbums.push(obj);
          }
          if (obj.type === 'track') {
              serviceUser.favTracks.push(obj);
          }
        }
    };
    //End Save favorites----------------------------------------------------------------------------------------------------------------//
    //get arrayUser for favorites-------------------------------------------------------------------------------------------------------//
    // this.getFav = function(){
    //   console.log('getFav srv',serviceUser);
    //   return serviceUser;
    // };
    //END get arrayUser for favorites-------------------------------------------------------------------------------------------------------//
    //----------------------OAuth----------------------------------------------------------------------------------------------//
    var clientId = '38c308974fcd460b85c85c3b2d2b0448';
    var clientSecret = '36a4a906507a4d00960c6743f12d76ed';
    //----------------------end OAuth---------------------------------------------------------------------------------------------//
    function UserObj(n, p) {
      this.userName = n,
      this.userPassword = p,
      this.artists = [],
      this.albums = [],
      this.tracks = []
    }
    function srvGetUser () {
      srvcUser = JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('currentUser'))));
    }

}); //closing
