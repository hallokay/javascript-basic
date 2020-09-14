
//함수를 만듬 -- 호출되어 있어야 함 언제나 실행
//함수 안에 필요한 것들 모든 섹션 네브의 모든 a 그 불러오가
//섹션의 각각의 섹션에 할일지정   sections.forEach(section => { 섹션할일 }
//섹션할일-- 섹션에 이벤트 리스너/  마우스가 들어갔을때 
//마우스가 들어갔을때  -- 
//들어간 곳의 아이디 값 얻어오기  const id = this.getAttribute('id');
//엑티브 된 곳 정확히 불러오기 const navActive = document.querySelector(`a[href="#${id}"]`);
//



 function nav (){
    const sections = document.querySelectorAll('section'),
        navLink = document.querySelectorAll('nav a');
   
    sections.forEach(section => {
        section.addEventListener('mouseenter', function(){
            const id = this.getAttribute('id'),
            navActive = document.querySelector(`a[href="#${id}"]`);
            console.log(navActive);
            navLink.forEach(link => link.classList.remove('active'));
            navActive.classList.add('active');
           
        });

    });
 };
 nav();