jQuery ->
  $('#customers').dataTable
    sPaginationType: "full_numbers"
    bJQueryUI: true
    bProcessing: true
    bServerSide: true
    sAjaxSource: $('#customers').data('source')

  $('#customer_identity_created_at').datepicker
    "format": "dd-mm-yyyy"
    "weekStart": 1
    "autoclose": true