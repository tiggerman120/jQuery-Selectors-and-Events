'use strict';

let animalsArr = [];
let templateId = '#animals-template';
let templateId2 = '#animals-template2';
Animals.readJson = () => {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  }

  $.ajax('data/page-1.json', ajaxSettings)
    .then(data => {
      data.forEach(item => {
        let Animal = new Animals(item);
        $('main').append(Animal.render())
      })
      $('#photo-template').hide()
    }).then(fillSelect).then(filterImage)
}

Animals.readJson2 = () => {
  const ajaxSettings2 = {
    method: 'get',
    dataType: 'json'
  }
  $.ajax('data/page-2.json', ajaxSettings2)
    .then(data => {
      data.forEach(item => {
        let Animal = new Animals(item);
        $('main').append(Animal.render2())
      })
      $('#photo-template2').hide()
    }).then(fillSelect2).then(filterImage2)
}

function Animals(Animal) {
  this.image_url = Animal.image_url;
  this.title = Animal.title;
  this.description = Animal.description;
  this.keyword = Animal.keyword;
  this.horns = Animal.horns;
  animalsArr.push(this);
}

Animals.prototype.render = function () {
  let $AnimalClone = $(templateId).html();
  let html = Mustache.render($AnimalClone, this);
  return html
}

Animals.prototype.render2 = function () {
  let $AnimalClone = $(templateId2).html();
  let html = Mustache.render($AnimalClone, this);
  return html
}
function fillSelect() {
  for (let i = 0; i < animalsArr.length; i++) {
    let newOption = $(templateId).clone();
    newOption.text(animalsArr[i].title);
    newOption.attr('value', animalsArr[i].keyword);
    $('#list').append(newOption);
  }
}

// $AnimalClone.html($('#photo-template2').html());
// $AnimalClone.find('h2').text(this.title);
// $AnimalClone.find('img').attr('src', this.image_url);
// $AnimalClone.find('img').attr('alt', this.description);
// $AnimalClone.find('p').text(this.keyword);
// $AnimalClone.find('p').text(this.horns);
// $AnimalClone.removeClass('#photo-template2');
// $AnimalClone.attr('class', this.keyword);
// $AnimalClone.attr('id', this.title);
function filterImage() {
  $('select').on('change', function () {
    let keyword = $('select').val();
    $('div').hide();
    $(`.${keyword}`).show();
  })
}



function fillSelect2() {
  for (let i = 0; i < animalsArr.length; i++) {
    let newOption = $('#default2').clone();
    newOption.text(animalsArr[i].title);
    newOption.attr('value', animalsArr[i].keyword);
    $('#list2').append(newOption);
  }
}
function filterImage2() {
  $('select').on('change', function () {
    let keyword = $('select').val();
    $('div').hide();
    $(`.${keyword}`).show();
  })
}
$(() => Animals.readJson());
$(() => Animals.readJson2());



