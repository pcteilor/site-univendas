

function card(id, link, img, titulo, descricao){
    // ID - Elemento onde será printado o card
    // link - Link a ser direcionado
    // img - refencia da imagem usada (ex. "assets/img/imagem.jpg")
    // titulo - Titulo do card
    // descrição - descrição do card

    /*    <div class="col-md-2 card-v-pad">
            <a target="_blank" href="">
                <div class="cardcustom card-bg-azul">
                    <img src="assets/img/card-m-conceitos.png" alt="Avatar" class="img-responsive card-img">
                    <div class="text-center card-text-pad">
                    <h4 class="card-title"><b>Titulo</b></h4>
                    <p><small style="color:#ffffff73;">descrição</small></p>
                    </div>
                </div>
            </a>
        </div>
        **/
}

let id = 'demo';
let link = 'http://www.google.com.br';
let img = 'card-m-conceits.png';
let titulo = 'Titulo teste';
let descricao = 'Esta é uma descrição teste';

let card = document.getElementById(id).innerHTML("<div class='col-md-2 card-v-pad'> <a target='_blank' href='" + link + "'>");


