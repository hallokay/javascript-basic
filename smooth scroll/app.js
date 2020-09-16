
function smoothscroll(target, duration){
    var target = document.querySelector(target),
        targetPosition = target.getBoundingClientRect().top,
        //엘리먼트의 크기와 위치 알고싶을때 뷰포트의 위치
        startPosition = window.pageYOffset,
        //스크롤 양
        distance = targetPosition - startPosition;
        startTime = null;
        // console.log(distance);

        function animation(currenTime){
            if(startTime === null) startTime = currenTime;
            let timeElapsed = currenTime - startTime,
                run = ease(timeElapsed,startPosition,distance,duration);
            window.scroll(0, run);
             if(timeElapsed < duration) requestAnimationFrame(animation);
            };
        
         function ease (t, b, c, d) {
            t /= d;
            return c*t*t + b;
        };
            
        requestAnimationFrame(animation);
//requestAnimationFrame(반복할 함수)--자바스크립트에서 애니메이션을 구현하는 방법
};



const section1 = document.querySelector('.section1');

section1.addEventListener('click', function(){
    smoothscroll('.section2', 1000);
});


const section2 = document.querySelector('.section2');

section2.addEventListener('click', function(){
    smoothscroll('.section1', 1000);
});

