'use strict';

let animalsArr = [];
let templateId = '#animals-template';
let templateId2 = '#animals-template2';
const ajaxSettings = {
  method: 'get',
  dataType: 'json'
}

Animals.readJson = () => {
  $.ajax('data/page-1.json', ajaxSettings)
    .then(data => {
      data.forEach(item => {
        let Animal = new Animals(item);
        $('main').append(Animal.render())
      })
      $('#photo-template').hide()
    }).then(fillSelect).then(filterImage).then(filterForm)
}

Animals.readJson2 = () => {
  $.ajax('data/page-2.json', ajaxSettings)
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
}//this isnt getting the keyword values in newOption
function fillSelect() {
  for (let i = 0; i < animalsArr.length; i++) {
    let newOption = $('#default1').clone();
    console.log(newOption);
    newOption.text(animalsArr[i].keyword);
    newOption.attr('value', animalsArr[i].keyword);
    console.log(newOption)

    $('#list1').append(newOption);
  }
}

function filterImage() {
  $('select').on('change', function () {
    let keyword = $('select').val();
    console.log(keyword);
    $('section').hide();
    $(`.${keyword}`).show();
  })
}

function fillSelect2() {
  for (let i = 0; i < animalsArr.length; i++) {
    let newOption = $('#default2').clone();
    console.log(newOption);
    newOption.text(animalsArr[i].keyword);
    newOption.attr('value', animalsArr[i].keyword);
    $('#list2').append(newOption);
  }
}
function filterImage2() {
  $('select').on('change', function () {
    let keyword = $('select').val();
    $('section').hide();
    $(`.${keyword}`).show();
  })
}

function filterForm() {
  $('form').on('change', function () {
    let title = $('input').val();
    console.log(title);
    $('section').hide();
    $(`${title}`).show();
  })
}
$(() => Animals.readJson());
$(() => Animals.readJson2());
