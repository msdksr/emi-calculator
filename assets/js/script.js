
function computeLoan(){
    amount = 0;
    downpayment = 0;
    interest = 0;
    duration = 0;

    //get the values from the user
    amount = $("#amount").val();
    downpayment = $("#downpayment").val();
    interest = $("#rate").val();
    duration = $("#duration").val();

    interestAmount = (amount * interest) / 100;

    console.log(interestAmount);

    amountWithInterest = parseInt(amount) + parseInt(interestAmount);

    downpaymentAmount = (amountWithInterest * downpayment) / 100;

    restAmount = parseInt(amountWithInterest) - parseInt(downpaymentAmount);

    monthlyAmount = restAmount / (parseInt(duration) - parseInt(1));

    var stringss = '';
    for ($i = 1; $i <= duration; $i++){
        if($i ==1 ){
            stringss += "<li><p><span>Installment 1: </span>" +downpaymentAmount+ "</p></li>";
        }
        else{
            stringss += "<li><p><span>Installment " +$i+ ": </span>" +monthlyAmount+ "</p></li>";
        }
    }

    $(".emi-ul").html(stringss);



//    Chart graph


    var chart = AmCharts.makeChart( "chartdiv", {
        "type": "pie",
        "theme": "light",
        "dataProvider": [ {
            "Title": "Principle Amount Of Loan",
            "value": amount
        }, {
            "Title": "Total Interest Amount",
            "value": interestAmount
        } ],
        "valueField": "value",
        "titleField": "Title",
        "outlineAlpha": 0.4,
        "depth3D": 15,
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "angle": 30,
        "export": {
            "enabled": false
        }
    } );



}



