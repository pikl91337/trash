
$("#yur")
.change(function(){
    var str = "";
    $( "#yur option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });

    if (str=="Физическое лицо ")
    {
        $("#face" ).val("13");
        $("#ooo").hide();
        $("#taxes").hide();
        $("#taxesMsg").hide();
    }
    else if (str=="Юридическое лицо ")
    {
        $("#face" ).val("17");
        $("#ooo").show();
        $("#taxes").show();
        $("#taxesMsg").show();

        var test1 = 'abc';

        var test = test1.length;
    }
    else
    {
        $("#face" ).val("");
        $("#ooo").hide();
        $("#taxes").hide();
        $("#taxesMsg").hide();
    }

});

$("#inn")
.change(function()
{
    var text = $("#inn").val();

    $(this).css('border', function(){
        if (text.length==10)
        {
            return '1px solid #DCDCDC';
        }
        else if (text.length==0)
        {
            return '1px solid #DCDCDC';
        }

        else if (text.length==12)
        {
            return '1px solid #DCDCDC';
            
        }
        else
        {
            $("#inn").val("");
            return '1px solid #f00';
        }
    })

});

$('#taxes')
.change(function() {
    if($(this).is(":checked")) 
    {
        $("#inn").val("Not necessary");
        $("#inn").attr("readonly",true);
    }
    else
    {
        $("#inn").val("");
        $("#inn").attr("readonly",false);
    }

});

$('#summa')
.change(function() {
    var text1 = $("#summa").val();
    $(this).css('border', function(){
        if (isNaN(parseFloat(text1)))
        {
            $("#summa").val("");
            $('#result').val("");
            return '1px solid #f00';
        }
        else
        {
            var nds_val = $('#face').val();
            var result = $('#summa').val()*(nds_val/100);
            $('#result').val(result);
            return '1px solid #DCDCDC';
        }
    

    })


})



