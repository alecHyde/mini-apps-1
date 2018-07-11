
$(document).ready();

// jquerry to grab the form element
// on(trigger, callback)
$('#submission').on('submit', (e) => {
  e.preventDefault();
  dataInput = $('.myData').val()
  console.log('working to here');
  // make ajax request once submit button is clicked
  $.ajax({
    type: "POST",
    url: 'http://127.0.0.1:3000/',
    // expecting an object, so wrap in an object, and pass data as a key
    data: dataInput,
    success: console.log('successfully submitted'),
    // datatype: 'JSON'
    contentType: 'application/JSON'

  });
  // $.post('/add', )
});

