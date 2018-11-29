'use strict';

Horns.allHorns = [];
Horns.allKeywords = [];


function Horns(horn) {
  this.title = horn.title;
  this.image_url = horn.image_url;
  this.description = horn.description;
  this.keyword = horn.keyword;
  this.horns = horn.horns;
}

Horns.prototype.toHtml = function() {
  const $hornTemplate = $('horn-template').html();
  const $source = Handlebars.compile($hornTemplate);
  return $source(this);
}

HornsDataSet.forEach(function(HornsObject){
  Horns.push(new Horns(HornsObject))
});

let page = 'scripts/page-1.json';

Horns.forEach(title => {
  $('#horn-template').append(title.toHtml())

})



Horns.readJson = () => {
  $.get('/../DATA/page-1.json', 'json')
    .then(data => {
      data.forEach(obj => {
        Horns.allHorns.push(new Horns(obj));
      });
    })
    .then(Horns.loadHorns)
}

Horns.loadHorns = () => {
  let hornOptions = $('#keywords');
  for (let i = 0; i < Horns.allHorns.length; i++) {
    hornOptions.append(`<option>${Horns.allHorns[i].keyword}</option>`);
  }

  //How to remove duplicates in drop down???

  console.log(Horns.allHorns);
  // Horns.allhorns.forEach(horn => horn.render());
  for (let i = 0; i < Horns.allHorns.length; i++) {
    Horns.allHorns[i].render();
    console.log(i);
  }
}

$(() => Horns.readJson());