
// jquerry to grab the form element
// on(trigger, callback)
$(form).on('submit', (e) => {
  e.preventDefault();
  // make ajax request once submit button is clicked
  $.ajax({
    type: "POST",
    url: 'http://127.0.0.1:3000/',
    data: ,
    success: console.log('successfully submitted'),
  });
  $.post('http://127.0.0.1:3000/', )
});

