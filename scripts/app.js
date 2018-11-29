'use strict';

let allUniqueHorns = [];


function UniqueHorns(dataObj) {
  this.title = dataObj.title;
  this.image_url = dataObj.image_url;
  this.description = dataObj.description;
  this.keyword = dataObj.keyword;
  this.horns = dataObj.horns;
}

uniqueHorns.prototype.toHtml = function() {
  const $hornTemplate = $('horn-animals-template').html();
  const $source = Handlebars.compile($hornTemplate);
  return $source(this);
}

uniqueHornDataSet.forEach(function(uniqueHornsObject){
  uniqueHorns.push(new uniqueHorns(uniqueHornsObject))
});

let page = 'scripts/page-1.json';

uniqueHorns.forEach(title => {
  $('#horn-animals-template').append(title.toHtml())

})





Horns.readJson = () => {
  $.get('/../DATA/page-2.json', 'json')
    .then(data => {
      data.forEach(obj => {
        AllUniqueHorns.push(new UniqueHorns(obj));
       });
     })
    .then(UniqueHorns.loadHorns)
 }

 Horns.loadHorns = () => {
   let hornOptions = $('#keywords');
  for (let i = 0; i < allUniqueHorns.length; i++) {
     hornOptions.append(`<option>${allUniqueHorns[i].keyword}</option>`);
   }
  }

  $(() => UniqueHorns.readJson());