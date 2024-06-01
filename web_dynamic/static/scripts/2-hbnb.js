$(document).ready(function () {
  const checkedAmenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedAmenities[$(this).data('id')];
    }
    const lst = Object.values(checkedAmenities);
    if (lst.length > 0) {
      $('div.amenities > h4').text(Object.values(checkedAmenities).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/status/',
      dataType: 'json'
    }).done(function (data) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      }
    });
  });
});
