var streamers;
var container;
var alt = false;

$(document).ready(function()
{
    init();
});

function init() {
  container = $('#streamers');

  for (let streamer of streamers) {
    add(streamer);
  }
  /*
  $.ajax({
    url: 'file:///data/streamers.json',
    dataType: 'json',
    success: function(json) {
      for (let streamer of json) {
        add(streamer);
      }
    }
  });
  */
}

function add(streamer) {
  let row = $('<div/>')
    .addClass('row')
    .appendTo(container)
  ;

  let col1 = $('<div/>')
    .addClass('col-md-4')
    .css({
      textAlign: 'center'
    })
    .appendTo(row)
  ;

  if (alt) {
    col1
      .addClass('order-md-12')
    ;
  }

  let link = $('<a/>')
    .attr('href', streamer.avatar.href)
    .attr('target', '_blank')
    .appendTo(col1)
  ;

  let img = $('<img>')
    .attr('src', streamer.avatar.image.src)
    .attr('alt', 'Me')
    .attr('width', '90%')
    .addClass('rounded-circle')
    .appendTo(link)
  ;

  let col2 = $('<div/>')
    .addClass('col-md-8')
    .appendTo(row)
  ;

  if (alt) {
    col2
      .addClass('order-md-1')
      .css({
        textAlign: 'right'
      })
    ;
  }

  let h3 = $('<h3/>')
    .text(streamer.name)
    .appendTo(col2)
  ;

  let p = $('<p/>')
    .text(streamer.description)
    .appendTo(col2)
  ;

  let p2 = $('<p/>')
    .appendTo(col2)
  ;

  let keys = Object.keys(streamer.social);

  for (let key of keys) {
    let social = streamer.social[key];
    let a = $('<a/>')
      .attr('href', social.url)
      .attr('target', '_blank')
      .appendTo(p2)
    ;
    let img = $('<img>')
      .attr('src', social.image.src)
      .attr('alt', social.image.alt)
      .addClass('social-icon')
      .appendTo(a)
    ;
  }

  alt = !alt;
}
