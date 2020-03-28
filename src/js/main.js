var scroll= 0,
    topCTA = $('#topCTA').offset().top;

    console.log(scroll + " | " + topCTA);

$(window).scroll(() => {
  scroll = $(window).scrollTop();

  if (scroll > topCTA) {
    $('#fixedBar').show();
  } else {
    $('#fixedBar').hide();
  }
});
