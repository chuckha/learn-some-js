// Wait for the page to load before executing any of this javascript
$(document).ready(function () {
  var celsius = $('#celsius');

  $('input').keyup(function () {
    celsius.text(fToC($(this).attr('value')));
  });

});
