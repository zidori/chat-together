let inputTxt = '';//전역변수 선언


/*입력방식 함수 구현*/
function inputChat(event){
  inputTxt = event.value;
  // console.log(inputTxt);
  //console.log(window.event.keyCode)
  if( window.event.keyCode == 13 ){
    // console.log('enter key  입력 : '+inputTxt)
    if(event.value != '' ){//입력창이 비어있지않을 실행
      chattingFunc(event,0);
      clearText(event,0);
    }
  }
}

/*보내기 버튼으로 실행*/
function sendTxt(event){
  if(event.previousElementSibling.value != ''){//입력창이 비어있지않을때 실행
    chattingFunc(event,1);
    clearText(event,1);
  }
}

/*텍스트를 삭제하는 함수 구현*/
function clearText(v,i){
  t = "";
  if( i == 1 ){// 보내기버튼으로 작동
    v.previousElementSibling.value = '';
  }else{//enter 버튼으로 작동
    v.value = '';
  }
}

/*chatting*/
function chattingFunc(e,i){
  // console.log(e.previousElementSibling.value)
  //previousElementSibling : 선택자의 앞에 있는 형제요소를 선택할때 사용
  //nextElementSibling : 선택자의 뒤에 있는 형제요소를 선택할때 사용
  //e.classList.add('hi')
  if( i == 1 ){
    inputTxt = e.previousElementSibling.value;
  }

  let thisClassName = e.getAttribute('class');//사용 확인을 위한 변수
  let elem = document.querySelectorAll('.chat_box');// 채팅창을 분류하기위한 변수
  // console.log(thisClassName);
  let elemLeng = elem.length;// 채팅창의 갯수 변수
  // console.log(elemLeng);
  let txt = [];//채팅창 입력값 받기

  // txt[0] = '안녕하세요' // a 채팅창
  // txt[1] = '안녕하세요' // b 상대 채팅창
  // txt[2] = '안녕하세요' // c 상대 채팅창

  let htmlTxt = [];//채팅창 내용 담을 변수

  // htmlTxt[0] = elem[0].innerHTML; // a 채팅창 대화내용 가져오기
  // htmlTxt[1] = elem[1].innerHTML; // b 채팅창 대화내용 가져오기
  // htmlTxt[2] = elem[2].innerHTML; // c 채팅창 대화내용 가져오기

  for( let i = 0; i<elemLeng; i++ ){
    htmlTxt[i] = elem[i].innerHTML;// 기존 채팅창 내용 가져오기
  }
  console.log(htmlTxt[0])
  if( thisClassName == 'user_a' ){
    txt.push('<div class="line char_a right"><div class="txt">'+inputTxt+'</div></div>');
    txt.push('<div class="line char_a"><div class="txt">'+inputTxt+'</div></div>');
    txt.push('<div class="line char_a"><div class="txt">'+inputTxt+'</div></div>');
  }
  else if( thisClassName == 'user_b' ){
    txt.push('<div class="line char_b"><div class="txt">'+inputTxt+'</div></div>');
    txt.push('<div class="line char_b right"><div class="txt">'+inputTxt+'</div></div>');
    txt.push('<div class="line char_b"><div class="txt">'+inputTxt+'</div></div>');
  }else{
    txt.push('<div class="line char_c"><div class="txt">'+inputTxt+'</div></div>');
    txt.push('<div class="line char_c"><div class="txt">'+inputTxt+'</div></div>');
    txt.push('<div class="line char_c right"><div class="txt">'+inputTxt+'</div></div>');
  }
  // console.log(txt[0])


    // htmlTxt[0] += txt[0]//기존 a 채팅창 내용에 입력한 채팅창내용을 추가한다.
    // elem[0].innerHTML = htmlTxt[0];
    // htmlTxt[1] += txt[1]//기존  b 채팅창 내용에 입력한 채팅창내용을 추가한다.
    // elem[1].innerHTML = htmlTxt[1];
    // htmlTxt[2] += txt[2]//기존 c 채팅창 내용에 입력한 채팅창내용을 추가한다.
    // elem[2].innerHTML = htmlTxt[2];


  for(let i = 0; i<elemLeng; i++){
    htmlTxt[i] += txt[i]//기존 채팅창 내용에 입력한 채팅창내용을 추가한다.
    elem[i].innerHTML = htmlTxt[i];
    elem[i].scrollTop = elem[i].scrollHeight - elem[i].offsetHeight;
  }
}
