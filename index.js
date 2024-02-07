 //masalalar
 //1) a, b, c raqamlari berilgan. Shu sonlardan foydalanib uch xonali son yasang, qachonki istalgan
 // berilgan raqamlardan biri 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.

 //1chi masala javobi:
 /*const math = (...abc) => {
    for (let i = 0; i < abc.length; i++) {
        if (abc[i] === 0 || abc[i] < 0) {
            console.log(abc[i]);
        }
    }
}

math(0, 1, -1); */

// 2) Berilgan son hafta kunining qaysi kuniga to'g'ri keladi . Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,
//  Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,  Agar hafta kuniga to'g'ri kelmasa 'none' 
//konsolga chiqsin.
 
/*2chi masala javobi:
const daysOfWeek = [1, 2, 3, 4, 5, 6, 7];
const dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("None");
}

console.log(daysOfWeek[dayNumber - 4]);*/

// 3) Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin.  
//Agar bo'linmasa false  konsolga chiqsin. Kabisa yil deb 4 yilda bir marta keladigan yilga aytiladi. 
//Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.

 //3chi masala javobi:
 /*function isLeapYear(year) {
    return new Date(year, 1, 29).getDate() === 29;
}
console.log(isLeapYear(1994));*/

//4) a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling. 
//Agar a soni 2 honali son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling.

 /*4chi masala javobi:
    const num = (a) => {
    if (a <= 9) {
        console.log("1")
    } else if (a <= 99){
       console.log("2")
    } else if (a <= 999){
       console.log("3")
    }
 }
 
 num(76)*/

 //5) a, b, c, d sonlar berilgan. Agar ularning qiymati barchasi musbat   bo'lsa true konsolga chiqaring
 // bo'lmasa false ni konsolga chiqaring.

 //5chi masala javobi:

 /*const num = (a) => {
    return a.length >= 1;
  }
  console.log(num(-16)); */

  // 6) a soni berilgan.  0 dan a gacha bo'lgan sonlar  yig'indisini toping  va yig'indini konsolga chiqaring.
  // a sonini ham hisobga oling.

  // 6chi masala javobi:

  /*function sumFromZeroToA(a) {
    let sum = 0;
    for (let i = 0; i <= a; i++) {
        sum += i;
    }
    return sum;
}
   const a = 18; 
   const result = sumFromZeroToA(a);
   console.log("Sum of numbers from 0 to", a, "is:", result); */

   // 7)a soni berilgan. Shu son mukammal raqam yoki yo'qmi shuni aniqlang. 
  /* Agar mukammal raqam bo'lsa true bo'lmasa false konsolga chiqaring. Mukammal
    raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi. 
    Deylik: a = 6, uning bo'linuvchilari 1,2,3 => 6 = 1 + 2 + 3   demak 6 raqami murakkab raqam hisoblanadi. 
    a = 15, uning bo'linuvchilari 1,3,5, => 1 + 3 + 5 = 8    bo'linuvchilari yig'indisi 8ga teng 15 ga emas. 
    Shuning uchun bu mukammal son emas*/

    // 7chi masala javobi:

   /* function PerfectNum(a) {
        let sum = 0;
        for (let i = 1; i < a; i++) {
            if (a % i === 0) {
                sum += i;
            }
        }
        return sum === a;
    }
    
    const a = 9; 
    const isPerfect = PerfectNum(a);
    console.log(a, "mukammal sonmi?", isPerfect);*/

    //8)n soni berilgan. Shu sonni raqamlarini sonini  konsolga chiqaring. Misol: 123 -> raqamlari soni: 3

    // 8chi masala javobi:
   /* const num = () => {
        let number = "123";
        let digits = number.split("");
        console.log("Raqamlari soni:", digits.length);
    }
    
    num(); */

    // 9) n soni berilgan. Berilgan son palindrome  ekanligini 
    /*aniqlang. Agar bo'lsa true bo'lmasa false chiqaring.
     Masalan: n = 12321  bunda chap tomondan va o'ng  tomondan
      o'qisa ham bir hil bo'lishi kerak. Bu misolni while orqali 
      ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz .*/

      // 9chi masalaning javobi:
    /*  const palindrome = (n) => {
        const str = String(n);
        return str === str.split('').reverse().join('');
    }
      console.log(palindrome(12321)); */

      //10)n  soni berilgan. Shu sonni raqamlarini yig'indisini toping.
     
       /* 10chi masala javobi:
        const solution = (n) => {
        const strNum = String(n);
        let sum = 0;
        for (let i = 0; i < strNum.length; i++) {
            sum += parseInt(strNum[i]);
        }
        return sum;
        }

       console.log(solution(1234)); */
    
    //11) array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring.

    //11chi masala javobi:

    /*const reverseArray = (arr) => {
        const reversedArr = arr.reverse();
        console.log(reversedArr);
    }
    const array = [0,1,2,3,4,5,6,7];
    reverseArray(array);*/

    //12)n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring. Masalan:  n = 4 , 
    //array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.n va array[] berilgan. Shu massivda nechta n soni borligini
    // topib konsolga chiqaring. Masalan:  n = 4 , array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.
    
    //12chi masala javobi:
   /* const solution = (n, anArray) => {
        let count = 0;
        for (let i = 0; i < anArray.length; i++) {
            if (anArray[i] === n) {
                count++;
            }
        }
        console.log("Natija:", count, "ta", n, "bor.");
    }
    const n = 4;
    const anArray = [2, 4, 6, 4];
    solution(n, anArray); */

    //13)a, array[] berilgan. Arrayning xohlagan ikkita  elementlarini  yig'indisi a ga teng bo'lishini aniqlang va 
    //ularni  konsolga chiqaring.
   /* 13chi masala javobi:
    const checkSum = (a, array) => {
        const seen = {}; 
        for (let num of array) {
            const complement = a - num; 
            if (seen[complement]) {
                console.log(num, '+', complement, '=', a);
            }
            seen[num] = true;
        }
    }
    const a = 11;
    const array = [3, 4, 5, 6];
    checkSum(a, array);  */

   //14)Sonlardan iborat massiv berilgan. Shu massivni  elementlarini o'sish tartibida jo'ylashtiring 
   //(sort by increasing (ascending) ) va hosil bo'lgan massivni ni konsolga chiqaring.
   /*  14chi masala javobi:
   const sortAscending = (array) => {
    const sortedArray = array.slice().sort((a, b) => a - b);
    console.log(sortedArray);
    }
   const array = [5, 2, 8, 1, 3];
   sortAscending(array);*/

   //15)Sonlardan iborat massiv berilgan. Shu massivdagi eng katta ikkinchi  elementni toping. Bunda array 
   //elementlari bir biriga teng emas deb oling.
   /* 15chi masala javobi:
   const findSecondLargest = (array) => {
    const sortedArray = array.slice().sort((a, b) => b - a);
    return sortedArray[1];
   }
   const array = [5, 2, 8, 1, 3];
   console.log("Eng katta ikkinchi element:", findSecondLargest(array)); */



    
    

    

    