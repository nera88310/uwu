document.getElementById("boton").innerHTML=`<button class="boton1" id="1" onclick="play(1)"><img id="poto" src="https://i.pinimg.com/736x/0d/93/87/0d938718f3402c2e517f681aa07f8a51.jpg" alt="gato"></button><h6 id="t3">dale_click_arriba</h6><h1 id="t1">putrix</h1><h4 id="t2">estudio</h4>`
        let b = null;
        function play(id){
            b++;
            if (b==1){
                document.getElementById("boton").innerHTML = `<img id="imagen"src="https://i.pinimg.com/originals/d5/e3/03/d5e3035a762efd89d5ec423a35d9d15a.gif" alt="imagenUwU"><h1 id="t">DESPI UWU </h1>`;
                document.getElementById("audio").innerHTML = `<audio src="uwu.mp3" autoplay></audio>`;
                }
            }