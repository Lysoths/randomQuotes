const box = document.querySelector(".box");
const box2 = document.querySelector(".box2");
const button = document.querySelector("button");

const quotes = [
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "So many books, so little time.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough .", 
  
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you tell the truth, you don't have to remember anything.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "We accept the love we think we deserve.",
    "Without music, life would be a mistake."
]

const quotesTr = [
"Kendin ol; diğer herkes zaten alınmış.",
"İki şey sonsuzdur: evren ve insanın aptallığı; ve ben evrenden emin değilim.",
"Çok kitap az zaman.",
"Uyuyamadığınızda aşık olduğunuzu bilirsiniz çünkü gerçekler sonunda hayallerinizden daha iyidir.",
"Sadece bir kez yaşarsın, ama doğru yaparsan, bir kez yeterlidir.",

"Hayat hakkında öğrendiğim her şeyi üç kelimeyle özetleyebilirim: hayat devam ediyor.",
"Doğruyu söylersen, hiçbir şey hatırlamana gerek kalmaz.",
"Yaşamak dünyadaki en nadir şeydir. Çoğu insan var, hepsi bu.",
"Layık olduğumuzu sandığımız sevgiyi kabul ediyoruz.",
"Müzik olmadan, hayat bir hata olurdu."]

button.addEventListener("click", ()=> {
    randomNumber=Math.ceil(Math.random()*10);
    
    box.innerHTML  = quotes[randomNumber-1];
    box2.innerHTML = quotesTr[randomNumber-1];
   
})