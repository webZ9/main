var qaList = [
  { question: "كم رقم مكتب الدكتور محمد", answer: "s295 رقم مكتب الدكتور محمد هو" },
  { question: "احتاج ايميل الدكتور ضياء", answer: "d.uliyan@liveuohedu.onmicrosoft.com" },
  { question: "ما هي فكرة المشروع نهاية مقرر المادة", answer: "هو مشروع بسيط يعتمد على فهمك للمقرر واثبات معلوماتك" },
  { question: "احتاج ايميل الدكتور ضياء", answer: "d.uliyan@liveuohedu.onmicrosoft.com" },
  { question: "ماهو التدريب التعاوني وما فكرته", answer: "هو عبارة عن تطيبق كل ما درسته في احدى الشركات المختصه في مجالك و يجعلك تمارس الحياة الوظيفيه و تتيح لك الفرصه بأختيار الشركه المناسبه لك" },
  { question: "متى تأسست جامعة حائل", answer: "في تاريخ 7 يونيو 2005" },
  { question: "متى فتح واغلاق مكتبة الكليه", answer: "تفتح الساعه ٨ صباحًا وتغلق الساعه ٢ مساءً" },
  { question: "ماهي خطوات الاستعلام عن نتائج الاختبارات", answer: "البنر - السجل الاكاديمي - كشف الدرجات" },
  { question: "كيف يمكن معالجة الفشل واستحضار عوامل النجاح في الحياة الجامعية", answer: "<li>اطلع دوماً على آخر المستجدات .</li><li>حضر دائماً قبل ذهابك لقاعة الدراسة .</li><li>تعرف على أساتذتك .</li><li>رتب أولوياتك، واحضر الحفلات .</li><li>استمر بالتطور .</li><li>قرر أي تخصص تريد والتزم به .</li><li>لا تتردد في طلب المساعدة .</li>" },
  { question: "من هو عميد كلية علوم وهندسة الحاسب الالي", answer: "د/ احمد الصعب التميمي" },
  { question: "كم عدد ساعات تخصص علوم الحاسب", answer: "132 ساعة" },
  { question: "ماذا يحتاج الطالب الجامعي", answer: "القراءة من أهم المهارات التي يحتاجها الطالب خلال فترة الجامعة وبعدها، فالقراءة تزيد من خبرتك الثقافية والحياتية والمجتمعية وتجعلك شخص مثقفاً فاهماً واعياً لما يدور حولك في كافة المجالات وعلى رأسها مجال عملك وبجانبها المجالات الأخرى مما يجعلك تستطيع التحاور والتشاور مع الأشخاص الأخرين." },
  { question: "ماذا يدرس الطالب في السنة التحضيرية", answer: "في أي من مسارين أم الطبي الصحي يشمل كليات الطب وطب االسنان و العلوم الطبية التطبيقية أو مسار العلمي الهندسي ويشمل كليات الهندسة ، العلوم ، علوم الحاسب والمعلومات." },
  { question: "هل السنة التحضيرية اجباريه", answer: "تعتبر السنة التحضيرية إجبارية لجميع الطلبة المقبولين والمرشحين في مختلف البرامج" },
  { question: "ما فائدة السنة التحضيرية", answer: "تتيح البرامج التحضيرية للطالب تحسين مهاراته الأكاديمية، وتطويرها في المجال الذي تم اختياره، الأمر الذي يحتاجه للنجاح في التعليم الجامعي، وتتمثل هذه المهارات في الكتابة الأكاديمية، وإدارة الوقت،" },
  { question: "ماهي تخصصات المسار الصحي", answer: "المسار الصحي الموحد للكليات الصحية : الطب، طب الأسنان، الصيدلة والعلوم الطبية التطبيقية في تخصصاتها (علوم المختبرات الإكلينيكية، العلاج التنفسي، العلاج الوظيفي، تقنية القلب (القسطرة القلبية)، علوم الأشعة، الخدمات الطبية الطارئة، تقنية التخدير)." },
  { question: "ماهي خطوات الاستعلام عن نتائج الاختبارات", answer: "البنر - السجل الاكاديمي - كشف الدرجات" },
];



document.getElementById("send-button").addEventListener("click", function() {
  var inputMessage = document.getElementById("input-message");
  var chatLog = document.getElementById("chat-log");

  var userQuestion = document.createElement("p");
  userQuestion.innerHTML = "<span class='user-message'>أنت:</span><br><br><span class='u-message'> " + inputMessage.value+"</span><hr>";
  chatLog.appendChild(userQuestion);

  var answer = getAnswer(inputMessage.value);
  var botAnswer = document.createElement("p");
  botAnswer.innerHTML = "<span class='bot-message'>البوت:</span><br><br> " +"<span class='answer'>" +answer+"</span><hr>";
  chatLog.appendChild(botAnswer);

  inputMessage.value = "";
});

document.getElementById("clear-button").addEventListener("click", function() {
  var chatLog = document.getElementById("chat-log");
  chatLog.innerHTML = "";
});

function getAnswer(question) {
  for (var i = 0; i < qaList.length; i++) {
      if (question === qaList[i].question) {
          return qaList[i].answer;
      }
  }
  
  return "عذرًا، لا يمكنني العثور على الإجابة المناسبة في الوقت الحالي.";
}
