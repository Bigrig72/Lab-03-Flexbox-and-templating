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
  // let hornOptions = $(`#keywords`);
  // let uniqueKeywords = [];
  // $.each(Horns.allKeywords, function(i, el) {
  //   if($.inArray(el, uniqueKeywords) === -1) uniqueKeywords.push(el);
  //   hornOptions.append(`<option>${uniqueKeywords[i]}</option>`);
  // });

  let hornOptions = $('#keywords');
  for (let i = 0; i < Horns.allHorns.length; i++) {
    if($.inArray(i, Horns.allKeywords) >= 0) {
      continue;
    } else {
      Horns.allKeywords.push(Horns.allHorns[i].keyword);
      hornOptions.append(`<option>${Horns.allHorns[i].keyword}</option>`);
    }
  }
  // let hornOptions = $('#keywords');
  // for (let i = 0; i < Horns.allHorns.length; i++) {
  //   hornOptions.append(`<option>${Horns.allHorns[i].keyword}</option>`);
  // }

  //How to remove duplicates in drop down???

  console.log(Horns.allHorns);
  // Horns.allhorns.forEach(horn => horn.render());
  for (let i = 0; i < Horns.allHorns.length; i++) {
    Horns.allHorns[i].render();
    console.log(i);
  }
}

  $(() => UniqueHorns.readJson());