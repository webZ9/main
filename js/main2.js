$(document).ready(function() {
  $('.open-btn').click(function() {
    $('#loginModal').modal('show');
  });
 

  $('.closeButton').click(function() {
    $('#loginModal').modal('hide');
  });

  $('.java').click(function() {
    $('#you_java iframe').attr('src', 'https://www.youtube.com/embed/d9xdTuvci88');
    $('#you_java').modal('show');
  });
  
  $('.c_plus').click(function() {
    $('#you_c iframe').attr('src', 'https://www.youtube.com/embed/-nUZ1_YbgM4?si=OzNsNpxtdnmRLmb4');
    $('#you_c').modal('show');
  });
  $('.intro_m').click(function() {
    $('#you_intro iframe').attr('src', 'https://www.youtube.com/embed/Xh1vhtdP83A?si=pDIT-SLUCpNH-Ugp');
    $('#you_intro').modal('show');
  });
  $('.logic_m').click(function() {
    $('#you_logic iframe').attr('src', '');
    $('#you_logic').modal('show');
  });
  
  
  
  $('.closeButton').click(function() {
    $('#you_java').modal('hide');
    $('#you_java iframe').attr('src', '');
    $('#you_c').modal('hide');
    $('#you_c iframe').attr('src', '');
    $('#you_intro').modal('hide');
    $('#you_intro iframe').attr('src', '');
    $('#you_logic').modal('hide');
    $('#you_logic iframe').attr('src', '');
  });


  
 
  
  function stopVideo() {
    var iframe = document.getElementById('you');
    var videoUrl = iframe.getAttribute('src');
    iframe.setAttribute('src', '');
    iframe.setAttribute('src', videoUrl);
  }


  $('#loginButton').click(function() {
    var username = $('#username').val();
    var password = $('#password').val();
    var errorMessage = $('#error-message');

    if (username === 'alzeeka' && password === 'java') {
      // إنشاء ملف تعريف الارتباط
      document.cookie = 'username=' + username + '; expires=30; path=/';
      window.location.href = 'java.html';
    } 
    else if (username === 'programming1' && password === 'student')  {
      // إنشاء ملف تعريف الارتباط
      document.cookie = 'username=' + username + '; expires=30; path=/';
      window.location.href = 'c.html';
    }
    else if (username === 'hail2023' && password === 'java') {
      // إنشاء ملف تعريف الارتباط
      document.cookie = 'username=' + username + '; expires=30; path=/';
      window.location.href = 'java_hail.html';
    }

  else if (username === 'hhh' && password === '123') {
  // إنشاء ملف تعريف الارتباط
  document.cookie = 'username=' + username + '; expires=30; path=/';

  var currentTime = new Date();
  var logoutTime = new Date(currentTime.getTime() + 5 * 60 * 1000); // إضافة خمس دقائق للوقت الحالي

  // تأجيل تنفيذ الخروج إلى وقت الخروج المحدد
  setTimeout(function() {
    // حذف ملف تعريف الارتباط
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
    window.location.href = 'login.html';
  }, logoutTime - currentTime); // الفرق بين وقت الخروج والوقت الحالي

  window.location.href = 'java_hail.html';
}





      
    else if (username === 'intro' && password === 'intro002') {
      // إنشاء ملف تعريف الارتباط
      document.cookie = 'username=' + username + '; expires=30; path=/';
      window.location.href = 'intro.html';
    }
    else if (username === 'logic' && password === 'logic02') {
      // إنشاء ملف تعريف الارتباط
      document.cookie = 'username=' + username + '; expires=30; path=/';
      window.location.href = 'logic.html';
    }
    else {
      errorMessage.text('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  });


  

 
  




  
});
