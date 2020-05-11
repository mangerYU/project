var dates=require('../../../utils/util copy.js');//数据文件
  
Page({
 data:{
  datetime:[
    {
     dat:1589244432
    },
    {
     dat:1589417772
    },
    {
     dat:675875754
    }
   ] 
 },
 
 onShow(a){
    let that=this;
    let len=that.data.datetime.length;//时间数据长度
   console.log(len);
    function nowTime() {
     // console.log(a)
     for (var i = 0; i < len; i++) {
      var intDiff = that.data.datetime[i].dat;//获取数据中的时间戳
       console.log(intDiff)
      var day=0, hour=0, minute=0, second=0;    
      if(intDiff > 0){//转换时间
       day = Math.floor(intDiff / (60 * 60 * 24));
       hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
       minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
       second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    //  day = parseInt(intDiff / (1000 * 60 * 60 * 24));
    //  hour= parseInt((intDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //  minute = parseInt((intDiff % (1000 * 60 * 60)) / (1000 * 60));
    //  second = parseInt((intDiff % (1000 * 60)) / 1000);
       if(hour <=9) hour = '0' + hour;
       if (minute <= 9) minute = '0' + minute;
       if (second <= 9) second = '0' + second;
       that.data.datetime[i].dat--;
       var str=day+'天'+hour+':'+minute+':'+ second  
        console.log(i,str)  
      }else{
       var str = "已结束！";
       clearInterval(timer); 
      }
      // console.log(str);
      that.data.datetime[i].difftime = str;//在数据中添加difftime参数名，把时间放进去
     }
     that.setData({
     "wearList.datetime": that.data.datetime
     })
    }
    nowTime();
    var timer = setInterval(nowTime, 1000);
    
   }

})