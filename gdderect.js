
$( document ).ready(function() {
  $('form').on('submit', function (e) {
    e.preventDefault();
     var yourlink = $('input[type="text"]').val();
     var link = yourlink.trim();
     
    if (link.indexOf('drive.google.com') == -1 || link.indexOf('file') == -1) {
     $('.results').show().text('Sorry, this only works on the public sharing link of Google Drive files');
      return false;
    }

     var pattern = /[0-9]/;
     var place = link.search(pattern);
     var urlkey = link.substr(place);
     var finalkey = urlkey.split('/')[0];
     $('.results').show().text('https://drive.google.com/uc?export=download&id=' + finalkey);
  });
});
