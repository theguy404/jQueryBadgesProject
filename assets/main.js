$(document).ready(function() {
    $.ajax({
        url: 'https://www.codeschool.com/users/theguy404.json',
        dataType: 'jsonp',
        success: function(response) {
        // handle response
        console.log(response.courses.completed);
        var courses = response.courses.completed;
        var jsoninfo = $.map(courses, function(course, i) {
            var divide = $('<div class="course"></div>');
            $('<h3>'+course.title+'</h3>').appendTo(divide);
            $('<img src="'+course.badge+'">').appendTo(divide);
            $('<a href="'+course.url+'" class="btn btn-primary">See Course</a>').appendTo(divide);
            return divide;
            });
        $('#badges').html(jsoninfo);
        },
        timeout: 3000,
        error: function(request, errorType, errorMessage) {
            alert('Error: '+errorType+' with message: '+ errorMessage);
        }
    });
});
