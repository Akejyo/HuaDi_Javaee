window.onload = function() {

    $.ajax({
        type: 'GET',
        url: "http:localhost:8080/api/select_latest",
        contentType: "application/json;cherset=utf-8",
        dataType: "json",
        success: function(data) {
            var tmp = data.data
                //对list值进行便利
            $.each(tmp, function(index, n) {
                var child = "<tr>" + "<td>" + tmp[index].name + "<td>" + "<td>" + tmp[index].phoneNum + "<td>" + "<td>" + tmp[index].working + "<td>" + "<td>" + `<input type=\"date\" class=\"timeInput\" value=\"${tmp[index].worktime}\">` + "<button class=\"timeSet\">" + "set" + "<td>" + "</tr>"

                //将信息追加
                $(".touristList").append(child)
            })
        }
    });
}