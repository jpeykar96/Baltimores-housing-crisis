export default function modifyVacancy(OGData){
  OGData = OGData.data;
  let dataRet = [
    {
      key: "Vacancies",
      values: [
      ]
    }
  ];
  for(var y = 0; y < OGData.length; y++){
    var inList = false;
    for (var x = 0; x < dataRet[0].values.length; x++){
      if(dataRet[0].values[x].label === OGData[y][13]){
        ++dataRet[0].values[x].value;
        inList = true;
      }
    }
    if(!inList){
      dataRet[0].values.push({label: OGData[y][13], value: 1});
    }
  }
  var otherVal = 0;
  for (var x = 0; x < dataRet[0].values.length; x++){
    if(dataRet[0].values[x].value < 150){
      otherVal += dataRet[0].values[x].value;
      dataRet[0].values.splice(x, 1);
      x--;
    }
  }
  dataRet[0].values.push({label: "Other", value: otherVal});
  return dataRet;
};
