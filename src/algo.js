// once these items are created, i want to store them in a SQL db
// the db will have the unique (primary key) of userID to link them
class item{
    constructor(name, color, size, type, season){
        this.name = name;
        this.color = color;
        this.size = size;
        this.type = type; // type of clothing item
        this.season = season;
    }
}
class wardrbe{
    // could implement a tree that stores clothes in relation to one another
    // this would make sorting through them and finding the optimal clothing item
    // more efficent and reduce time complexity
    hats = new Set();
    tops = new Set();
    bottoms = new Set();
    layers = new Set(); // jackets, sweaters, etc.
    footwear = new Set();

    add(item){
        switch(item.type){
            case item.type ="footwear":
                this.footwear.add(item);
                break;
            case item.type ='layers':
                this.layers.add(item);
                break;
            case item.type ='bottoms':
                this.bottoms.add(item);
                break;
            case item.type ='tops':
                this.tops.add(item);
                break;
            case item.type =='hats':
                this.hats.add(item);
                break;
            default:
                console.log('Invalid Item Type');
                break;
        }
    }
    // add functions for removing items, editing would be the same as removing and adding
    // a new item
}
class weather{
    constructor(temp, windspeed, humidity, season){
        this.temp = temp;
        this.windspeed = windspeed;
        this.humidity = humidity;
        this.season = season;
    }
}
function algo(wardrobe, weather) {
  // Create a copy of the wardrobe to modify
  const modifiedWardrobe = new wardrbe();

  // Iterate over each clothing type and filter by season
  for (const item of wardrobe.footwear) {
    if (item.season !== weather.season) {
      // Add to modified wardrobe only if it's not winter
      modifiedWardrobe.add(item);
    }
  }

  for (const item of wardrobe.layers) {
    if (item.season !== weather.season) {
      // Add to modified wardrobe only if it's not summer
      modifiedWardrobe.add(item);
    }
  }

  for (const item of wardrobe.tops) {
    if (item.season !== weather.season) {
      // Add to modified wardrobe only if it's not summer
      modifiedWardrobe.add(item);
    }
  }

  for (const item of wardrobe.bottoms) {
    if (item.season !== weather.season) {
      // Add to modified wardrobe only if it's not summer
      modifiedWardrobe.add(item);
    }
  }

  for (const item of wardrobe.hats) {
    if (item.season !== weather.season) {
      // Add to modified wardrobe only if it's not summer
      modifiedWardrobe.add(item);
    }
  }

  // Return the modified wardrobe
  return modifiedWardrobe;
}

const wardrobe = new wardrbe();
wardrobe.add(new item('Winter Boots', 'Black', 'L', 'footwear', 'winter'));
wardrobe.add(new item('Sneakers', 'White', 'M', 'footwear', 'summer'));
wardrobe.add(new item('Winter Jacket', 'Blue', 'XL', 'layers', 'winter'));

const currentWeather = new weather(30, 10, 50, 'summer'); // Example weather conditions

console.log(algo(wardrobe, currentWeather));
