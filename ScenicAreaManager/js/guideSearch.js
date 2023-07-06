function search() {
    $.ajax({
        type: 'GET',
        url: "http:localhost:8080/api/select_latest",
        contentType: "application/json;cherset=utf-8",
        dataType: "json",
        success: function(data) {

        }
    });
}