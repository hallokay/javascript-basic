
        /*
         * - 변수 지정하기
         * - 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 offset 값을 계산하기
         * - 스크롤과 클릭 이벤트 작성하기
         */

         let btt = document.getElementById('back-to-top'),
            docElem = document.documentElement, 
            //html 문서 자체를 가져옴
            offset,
            scrollPos,
            docHeight;

        // 문서 높이 계산하기
            // docHeight = docElem.scrollHeight;
            docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight );
            
            // scrollPos  = docElem.scrollTop;
            //스크롤 양 

            if(docHeight !== 0){
                offset = docHeight / 4;
            };
            //만약 닥하이트 값이 있으면 옵셋의 값은 닥하이트를 4로 나눈 값

        // 스크롤 이벤트 추가
            window.addEventListener('scroll', function(){
                scrollPos  = docElem.scrollTop;

                btt.className = (scrollPos > offset) ? 'visible' : '';
            });

            //className 은 클래스명이 없으면 넣고 있으면 교체

        // 클릭 이벤트 추가

            btt.addEventListener('click', function(e){
                e.preventDefault();
                //본연의 기능을 막는것
                // docElem.scrollTop = 0;
                scrollToTop();
            });

            function scrollToTop(){
                //변수에 이름지정 setInterval넣어줌
                // setInterval(할일, 시간); 일정시간마다 할일지정
                //0.0015s = 15 시간
                //할일 = function(){실제로 할일}
                //실제로 할일 윈도우 스크롤 양이 0이 아닐때window.scrollBy(0, -55)
                 //0일때  clearInterval(이름); -으로 interval 멈춤


                let scrollInterval = setInterval(function(){
                    (scrollPos !== 0) ? window.scrollBy(0, -55) : clearInterval(scrollInterval); 
                        
                    },15);
               
            };