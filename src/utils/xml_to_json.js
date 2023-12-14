import {get_day_of_week,get_month_name} from './time'

export const xml_to_json_1 = xml => {
  let jsonObj = {};

  if (xml.nodeType == 1) {
    for (let i = 0; i < xml.attributes.length; i++) {
      let attribute = xml.attributes[i];
      if ((xml.nodeName === 'time') && (attribute.name === 'from')  ) {
        
        let dateTimeParts = attribute.value.split('T');
        

        jsonObj['date'] = {
          "date": dateTimeParts[0],
          "day": dateTimeParts[0].split("-")[2],
          "month": dateTimeParts[0].split("-")[1],
          "monthName": get_month_name(dateTimeParts[0].split("-")[1] - 1),
          "year": dateTimeParts[0].split("-")[0],
          "dayOfWeek": get_day_of_week(dateTimeParts[0] ),
          "time": dateTimeParts[1].slice(0, -3)
        }


      } else {
        jsonObj[attribute.name] = attribute.value;
      }
    }
  }

  if (xml.hasChildNodes()) {
    for (let j = 0; j < xml.childNodes.length; j++) {
      let childNode = xml.childNodes[j];
      let childObj = xml_to_json_1(childNode);

      if (jsonObj[childNode.nodeName] == "symbol" ) {
        jsonObj[childNode.nodeName] = childObj.number
      }

      if (jsonObj[childNode.nodeName]) {
        if (jsonObj[childNode.nodeName] instanceof Array) {
          jsonObj[childNode.nodeName].push(childObj);
        } else {
          jsonObj[childNode.nodeName] = [jsonObj[childNode.nodeName], childObj];
        }
      } else {
        jsonObj[childNode.nodeName] = childObj;
      }
    }
  }

  return jsonObj;
}


export const xml_to_json_2 = (xml)=>{
  const result = {};

  for (const node of xml.children) {
    if (node.children.length > 0) {
      result[node.tagName] = xml_to_json_2(node);
    } else {
      result[node.tagName] = node.textContent;
    }

    // Agregar atributos si existen
    if (node.attributes.length > 0) {
      result[node.tagName] = {
        ...result[node.tagName],
        attributes: {},
      };

      for (const attribute of node.attributes) {
        result[node.tagName].attributes[attribute.name] = attribute.value;
      }
    }
  }

  return result;
}
