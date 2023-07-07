window.onload = function() {

    $.ajax({
        type: 'GET',
        url: "http:localhost:8080/api/select_latest",
        contentType: "application/json;cherset=utf-8",
        dataType: "json",
        success: function(data) {
            $('.touristList').empty()
                //取出后端传过来的list值
            var chargeRuleLogs = data.data
                //对list值进行便利
            $.each(chargeRuleLogs, function(index, n) {

                var child = "<tr>" + "<td>" + chargeRuleLogs[index].month + "</td>" +
                    "<td>" + chargeRuleLogs[index].ver + "</td>" + "</tr>"

                //将信息追加
                $(".touristList").append(child)
            })
        }
    });
}