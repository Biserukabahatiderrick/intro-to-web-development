function changeBackgroundColor(color){
    let section=document.getElementById('coding-journey');
    section. style.backgroundColor=color;
}
document.getElementById('intro').addEventListener('click',()=>changeBackgroundColor("#2CA02C"));
document.getElementById('react').addEventListener('click',()=>changeBackgroundColor("#FF7F0E"));
document.getElementById('backend').addEventListener('click',()=>changeBackgroundColor("#9467BD"));

const year=new Date().getFullYear();
const message=`Website Made With ❤️ From Kigali © ${year}`;
document.getElementById('footer').textContent=message;