'use strict';

let animalsArr = [];


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
    }).then(fillSelect).then(filterImage)
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
  let $AnimalClone = $('<div></div>');
  $AnimalClone.html($('#photo-template').html());
  $AnimalClone.find('h2').text(this.title);
  $AnimalClone.find('img').attr('src', this.image_url);
  $AnimalClone.find('img').attr('alt', this.description);
  $AnimalClone.find('p').text(this.keyword);
  $AnimalClone.find('p').text(this.horns);
  $AnimalClone.removeClass('photo-template');
  $AnimalClone.attr('class', this.keyword);
  $AnimalClone.attr('id', this.title);
  $('main').append($AnimalClone)
}



function fillSelect() {
  console.log(animalsArr)
  
  // animalsArr.forEach(function(object) { 
    for (let i = 0; i < animalsArr.length; i++) {
      console.log(animalsArr);
      console.log(animalsArr[i]);
      let newOption = $('#default1').clone();
      newOption.text(animalsArr[i].title);
      newOption.attr('value', animalsArr[i].title);
      $('#list').append(newOption);
    }
  }
  function filterImage() {
    $('select').on('change', function () {
      let keyword = $(this).val();
      $('section').hide();
      $($`.${keyword}`).show();
    }
    )
  }
  
  
  $(() => Animals.readJson());


//filterimage
// $('select').tmpl(data).each(Animals.readJson (Animal.keyword) {
      //   Animal($(this))
      // }).appendTo('option')
//fillselect
        // let optionBox =$('<option></option>').text(object.keyword).val(object.keyword);

let animalsArr =[];
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
    }).then(fillSelect).then(filterImage)
}


function Animals(Animal) {
    this.image_url = Animal.image_url;
    this.title = Animal.title;
    this.description = Animal.description;
    this.keyword = Animal.keyword;
    this.horns = Animal.horns;
    animalsArr.push(this);
}


Animals.prototype.render = function() {
    let $AnimalClone = $('<div></div>');
    $AnimalClone.html($('#photo.template').html());
    //console.log (Animal);
    $AnimalClone.find('h2').text(this.title);
    $AnimalClone.find('img').attr('src', this.image_url);
    $AnimalClone.find('img').attr('alt', this.description);
    $AnimalClone.find('p').text(this.keyword);
    $AnimalClone.find('p').text(this.horns);
    $AnimalClone.removeClass('#photo-template');
    $AnimalClone.attr('class', this.keyword);
    $AnimalClone.attr('id', this.title);
    $('main').append($AnimalClone)
}

function fillSelect() {
    console.log(animalsArr)
    // animalArr.forEach(function(object) {
        for (let i = 0; i < animalsArr.length; i++) {
            console.log(animalsArr);
            console.log(animalsArr[i]);
            let newOption = $('#default1').clone();
            newOption.attr(animalsArr[i].title);
            $('#list').append(newOption);
        }
}
function filterImage() {
    $('select').on('change', function () {
        let keyword = $(this).val();
        $('section').hide();
        $(`.${keyword}`).show();
    })
}
$(() => Animals.readJson());

//$('select').on('change', function() {
 // var keyword= $(this).val()

//})
