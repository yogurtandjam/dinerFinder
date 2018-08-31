const fs = require('fs');
const restaurantList = require('./src/resources/dataset/restaurants_list.json');

const csvToJson = file => {
  const jsonData = [];
  const rawData = fs.readFileSync(__dirname + file, 'utf8').split('\n');
  const headers = rawData[0].split(';');
  const nonHeaders = rawData.slice(1);
  nonHeaders.forEach(data => {
    const rowToJson = {};
    const row = data.split(';');
    row.forEach((dataPoint, i) => {
      const currentHeader = headers[i];
      if (currentHeader == 'stars_count') rowToJson[currentHeader] = Number(dataPoint)
      else rowToJson[currentHeader] = dataPoint;
    })
    jsonData.push(rowToJson);
  })
  return jsonData;
}

const merge = (arr1, arr2) => {
  const jsonData = [];
  arr1.forEach(json1 => {
    let connect = {};
    arr2.forEach(json2 => {
      if (json1.objectID == json2.objectID) {
        connect = json2;
        return;
      }
    })
    let row = Object.assign(json1, connect);
    jsonData.push(row)
  })
  return JSON.stringify(jsonData);
}

const write = mergedData => {
  fs.appendFileSync('./mergedData.json', mergedData)
}

const json1 = csvToJson('/src/resources/dataset/restaurants_info.csv');
const mergedData = merge(json1, restaurantList);
write(mergedData);