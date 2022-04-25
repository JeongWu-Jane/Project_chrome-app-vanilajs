const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const secondes = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${secondes}`;

  //   clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
//2초마다 실행하고싶음
//ex)주식시장 확인

// setInterval(sayHello, 5000);
//두개 arugment:function, ms
//5000ms -> 5sec
getClock(); //1초안기다리고 새로고침하자마자 실행
setInterval(getClock, 1000);
//얼마나 기다릴지 ms
