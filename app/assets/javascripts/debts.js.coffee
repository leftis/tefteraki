jQuery ->

  $('#debt_published_at, #dose_paid_at').datepicker
    "format": "dd-mm-yyyy"
    "weekStart": 1
    "autoclose": true

  #if ($('#debt_paid').attr('value') > 0) && ($('#debt_paid').attr('value') != "")
   # $('#debt_paid').attr('disabled', 'true')

  if ($('#debt_published_at').attr('value') != undefined) && ($('#debt_published_at').attr('value') != "")
    $('#debt_published_at').attr('disabled', 'true')
