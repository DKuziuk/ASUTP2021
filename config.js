const config={};
config.iface=require('./conf_iface.js');
// ------------------- описание печей (сущностей) ------------------------
let entities = [];
entities.push({
  id:"SNO-658-11"
	,shortName:"СНО-6.5.8/11" //
  ,fullName: "Печь закалочная СНО-6.5.8/11" //
  ,regs:{
        "3-T":{  // реальный адрес регистра, по которому нужно делать запрос
          title:"T" // отображаемое имя для вывода в описании поля
          ,type:"integer" // тп поля
          ,units: "\u00b0C" //единицы
          ,description:"Текущая температура в печи" // описание
        }
      }//regs
});

entities.push({
  id:"SSHCM-8.15-10"
	,shortName:"СШЦМ-8.15/10" //
  ,fullName: "Печь цементационная СШЦМ-8.15/10" //
  ,regs:{
        "1-T":{
          title:"T1" // имя для вывода в описании поля
          ,type:"integer"
          ,units: "\u00b0C"
          ,description:"Текущая температура в зоне №1"
        }
        ,"2-T":{
          title:"T2" // имя для вывода в описании поля
          ,units: "\u00b0C"
          ,type:"integer"
          ,description:"Текущая температура в зоне №2"
        }
      }//regs
});
config.entities=entities;

// таблица сопоставления адреса устройства и типа (массив где индекс - адрес устройства, а значение - имя файла драйвера)
config.devices=[
    "all" //0
   ,"TRP08" //1
   ,"TRP08" //2
   ,"TRP08" //3
 ];
 // список используемых алиасов с указанием физического имени регистра
// (т.е. адрес ModBus + сигнатура в драйвере устройства, например 7SQ1 => 5-DIO1 )
var tags= new Map();
for (var i = 1; i <= 3; i++) {
  tags.set("sT"+i,i+"-T");
};
config.tags=tags;

// настройки логгера
config.logger={
   path:"/logs"
  ,period:30 // период между записями 30 секунд
};

module.exports=config;

if (! module.parent) {
  console.dir(config,{depth:4});
  console.dir(new Buffer.from([15,10,8]),{depth:4});
  //util.inspect(config)
}
