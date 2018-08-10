//时间格式化方法
/*eg: var date=new Date();
var str = formatDate("%Y-%M-%D %H:%I:%S", date);
输出 2018-08-16 10:50:21
*/
var formatDate = (function(){
    var f = function(s,n){
        n =  n || 2;
        s = ""+s;
        for(var i=(n-s.length);i>0;i--){
            s = "0"+s;
        }
        return s;
    };
    var r = {
        //星期几的简写
        '%a' : function(d){return ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'][d.getDay()];},
        //星期几的全称
        '%A' : function(d){return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()]; },
        //月份的简写
        '%b' : function(d){return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()];},
        //月份的全称
        '%B' : function(d){return ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()];},
        //不带时分秒的日期的时间串：2014-03-17
        '%c' : function(d){
                return d.getFullYear()
                    +'-'+f(d.getMonth()+1)
                    +'-'+f(d.getDate());
        },
        //标准的日期的时间串：2014-03-17 15:37:20
        '%C' : function(d){
                return d.getFullYear()
                    +'-'+f(d.getMonth()+1)
                    +'-'+f(d.getDate())
                    +' '+f(d.getHours())
                    +':'+f(d.getMinutes())
                    +':'+f(d.getSeconds());
        },
        //几日，二位数字，若不足二位不补零; 如: "1" 至 "31"
        '%d' : function(d){return d.getDate();},
        //几日，二位数字，若不足二位则前面补零; 如: "01" 至 "31"
        '%D' : function(d){return f(d.getDate());},
        //英文表示的本月第几日
        '%e' : function(d){
            var day = ""+d.getDate();
            switch(day){
                case '1':
                case '21': day+='st';break;
                case '2':
                case '22': day+='nd';break;
                case '3':
                case '23': day+='rd';break;
                default:day+='th';
            }
            return day;
        },
        //毫秒; 0-999
        '%f' : function(d){return d.getMilliseconds()},
        //毫秒; 000-999
        '%F' : function(d){return f(d.getMilliseconds(),3)},
        //12 小时制的小时，不足二位不补零; 如: "1" 至 12"
        '%g' : function(d){var h = d.getHours(); return h>12?h-12:h; },
        //12 小时制的小时; 如: "01" 至 "12"
        '%G' : function(d){var h = d.getHours(); return f(h>12?h-12:h); },
        //24 小时制的小时，不足二位不补零; 如: "0" 至 "23"
        '%h' : function(d){return d.getHours(); },
        //24 小时制的小时; 如: "00" 至 "23"
        '%H' : function(d){return f(d.getHours()); },
        //分钟；如0-59
        '%i' : function(d){return d.getMinutes(); },
        //分钟；如00-59
        '%I' : function(d){return f(d.getMinutes()); },
        //月份，二位数字，若不足二位则不补零; 如: "1" 至 "12"
        '%m' : function(d){return d.getMonth()+1; },
        //月份，二位数字，若不足二位则在前面补零; 如: "01" 至 "12"
        '%M' : function(d){return f(d.getMonth()+1); },
        //获取am或pm
        '%p' : function(d){return d.getHours()<12 ? 'am' : "pm";},
        //获取AM或PM
        '%P' : function(d){return d.getHours()<12 ? 'AM' : "PM";},
        //秒; 如: "0" 至 "59"
        '%s' : function(d){return d.getSeconds();},
        //秒; 如: "00" 至 "59"
        '%S' : function(d){return f(d.getSeconds());},
        //中文表示的星期几
        '%u' : function(d){return ['日','一','二','三','四','五','六'][d.getDay()];},
        //年份的后两位数字
        '%y' : function(d){return (""+d.getFullYear()).substr(-2);},
        //四位数的年份
        '%Y' : function(d){return d.getFullYear();},
        //百分号
        '%%' : function(d){return '%'}
    };
    return function(format, d){
        return format.replace(/\%./g, function(m){
            return r[m] ? r[m](d) : m;
        });
    };
})();


var date = new Date();

var str = formatDate("%Y年%M月%D日 %H:%I:%S", date);