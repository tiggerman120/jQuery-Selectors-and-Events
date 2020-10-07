'use strict';

Animals.readJson = () => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  }

  $.ajax('data/page-1.json', ajaxSettings)
  .then(data => {
    data.forEach(item => {
      let Animal = new Animals(item);
      console.log(Animal);
      Animal.render();
    })
  })
}

function Animals(Animal) {
  this.image_url = Animal.image_url;
  this.title = Animal.title;
  this.description = Animal.description;
  this.keyword = Animal.keyword;
  this.horns = Animal.horns;
}

Animals.prototype.render = function() {
 let $AnimalClone = $('<div></div>');
 $AnimalClone.html($('#photo-template').html());
 $AnimalClone.find('h2').text(this.title);
 $AnimalClone.find('img').attr('src', this.image_url);
 $AnimalClone.find('img').attr('alt', this.description);
 $AnimalClone.find('p').text(this.keyword);
 $AnimalClone.find('p').text(this.horns);
 $AnimalClone.removeClass('photo-template');
 $AnimalClone.attr('class', this.title);
 $('main').append($AnimalClone)
}

$(() => Animals.readJson());