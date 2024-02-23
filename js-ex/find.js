//Use reduce to tally the total number of beers that are IPAs and the beers that are Stouts. This one is tricky!

var beers = [
  { name: '512 IPA', type: 'IPA' },
  { name: 'Breakfast Stout', type: 'Stout' },
  { name: 'Pernicious IPA', type: 'IPA' },
  
  var beers = [
  { name: '512 IPA', type: 'IPA' },
  { name: 'Breakfast Stout', type: 'Stout' },
  { name: 'Pernicious IPA', type: 'IPA' },
  { name: '90 Minute IPA', type: 'IPA' },
  { name: 'Obsidian Stout ', type: 'Stout' }
];

var beerStyles = beers.reduce((type, beer) => {
  
})





/* result -

{
  IPA: 3,
  Stout: 2
}
*/