
 let h2 = document.querySelector('h2');
 let h = document.querySelector('.h');
 let m = document.querySelector('.m');
 let s = document.querySelector('.s');
 let beat = new Audio('timer.mp3');

function clock() {
    let hour = document.querySelector('#hour').value;
    let min = document.querySelector('#min').value;
    let sec = document.querySelector('#sec').value;

    // Calculate to Milliseconds
    let user = hour * 60 * 60 * 1000 + min * 60 * 1000 + sec * 1000;

   setInterval(calc =() => {
       if (user <= 0){
        clearInterval(calc);
        h2.innerHTML = "Refresh page to stop Alarm" ;
        beat.play();
        setTimeout(() => {
            beat.pause();
        },10000);
       }

       else {
       let hr = Math.floor(user/(60 * 60 * 1000));
       let mn = Math.floor(user % (60 * 60 * 1000) / (60 * 1000));
       let sc = Math.floor((user % (1000 * 60)) / 1000);
    
       // If less than 10 add 0 to its left side
       hr = hr > 9 ? hr : "0"+hr;
       mn = mn > 9 ? mn : "0"+mn;
       sc = sc > 9 ? sc : "0"+sc;
    
       //display time
    //    h2.innerHTML=` ${hr} : ${mn} : ${sc} `;
    h.innerHTML= hr ;
    m.innerHTML= mn ;
    s.innerHTML= sc ;
       user -= 1000 ;
       }
    
   }, 1000);
    }



let btn = document.querySelector('.submit');
btn.addEventListener('click',clock);