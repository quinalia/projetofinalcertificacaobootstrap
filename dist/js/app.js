function drawChartProjects(){var o=google.visualization.arrayToDataTable([["Task","Projects"],["Uncompited",40],["Compited",40],["Hold",40]]),a={pieHole:.4,width:278,height:278,backgroundColor:"transparent",slices:{0:{color:"#57b0eb"},1:{color:"#fc8f3e"},2:{color:"#293541"}},legend:"none"};new google.visualization.PieChart(document.getElementById("drawChartProjects")).draw(o,a)}function drawChartRunning(){var o=google.visualization.arrayToDataTable([["Airports","Start Date","Days Completed","Days Remaining",{role:"annotation"}],["Airport Rail",5,5,5,""],["Roy Hill",5,5,5,""],["Moolarben",5,5,5,""]]),a={width:278,height:278,legend:{position:"top",maxLines:3},bar:{groupWidth:"75%"},isStacked:!0,backgroundColor:"transparent",colors:["#57b0eb","#fc8f3e","#293541"]};new google.visualization.BarChart(document.getElementById("drawChartRunning")).draw(o,a)}function drawChartInvoice(){var o=google.visualization.arrayToDataTable([["Mês","Days Completed","Days Remaining"],["Junho",1e3,400],["Julho",1170,460],["Agosto",660,1120]]),a={curveType:"function",legend:{position:"top"},width:278,height:278,backgroundColor:"transparent",colors:["#57b0eb","#fc8f3e"]};new google.visualization.LineChart(document.getElementById("drawChartInvoice")).draw(o,a)}$(function(){$("html, body").on("click",function(o){o.target==document.documentElement&&$("html, body").removeClass("open-sidebar")}),$(".js-open-sidebar").on("click",function(){$("html").addClass("open-sidebar")})}),google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(drawChartProjects),google.charts.setOnLoadCallback(drawChartRunning),google.charts.setOnLoadCallback(drawChartInvoice);var a=0;$(window).scroll(function(){var o=$(".item").offset().top-window.innerHeight;0===a&&$(window).scrollTop()>o&&($(".count").each(function(){var o=$(this),a=o.attr("data-count");$({countNum:o.text()}).animate({countNum:a},{duration:5e3,easing:"swing",step:function(){o.text(Math.floor(this.countNum))},complete:function(){o.text(this.countNum)}})}),a=1)}),$(window).resize(function(){drawChartProjects(),drawChartRunning(),drawChartInvoice()});