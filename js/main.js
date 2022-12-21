
/* Corazon Like */
$('#like').on('click', (function(e) {
    e.preventDefault();
    console.log('like');
    $('#like').addClass('inactivo');
    $('#likeActive').addClass('activo');
    $('#imgPrincipal').addClass('contenido__img-img');
}));

/* Corazon disLike */
$('#likeActive').on('click', (function(e) {
    e.preventDefault();
    console.log('dislike');
    $('#like').removeClass('inactivo');
    $('#likeActive').removeClass('activo');
    $('#imgPrincipal').removeClass('contenido__img-img');
}));