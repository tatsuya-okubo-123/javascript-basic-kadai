const clickBtn=document.getElementById('btn');
const childText=document.getElementById('text');

clickBtn.addEventListener('click',()=>{
  setTimeout(()=>{
    childText.textContent='ボタンをクリックしました';
  },2000)
}
);

