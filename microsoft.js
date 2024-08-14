// var sect=document.getElementById('section')
var butt_ajouter=document.createElement('button')
//  butt_ajouter.innerHTML="onclick ='formulaire()'"
//  console.log(butt_ajouter)
    var butt_div= document.createElement('div')
    butt_div.classList.add('menu')

butt_ajouter.id='ajouter'
console.log(butt_ajouter)
butt_ajouter.innerText='+ Ajouter'
butt_div.appendChild(butt_ajouter)
document.getElementById('formu').appendChild(butt_div)
// var ajout=document.createElement('input')
// ajout.type='radio'
// document.getElementById('formu').appendChild(ajout);

var table=document.createElement('table')

var ligne=document.createElement('tr')
var colonne1=document.createElement('td')
var colonne2=document.createElement('td')
var colonne3=document.createElement('td')
var colonne4=document.createElement('td')

var choix=document.createElement('button')
    // choix.type=('radio')
    choix.classList.add('choix')
    choix.innerText='Choix'

    var value=1

butt_ajouter.addEventListener('click', formulaire)
function formulaire() {
    if (value==1) {
        value=2
        // table.border='1'
        // colonne1.innerText='Choix'
        colonne1.appendChild(choix)
        colonne2.innerText='Text'
        colonne3.innerText='Evaluation'
        colonne4.innerText='Date '
        
        ligne.appendChild(colonne1)
        ligne.appendChild(colonne2)
        ligne.appendChild(colonne3)
        ligne.appendChild(colonne4)
        
        table.appendChild(ligne)
        butt_div.appendChild(table)}else{
            value=1
        colonne1.remove(choix)
        colonne2.innerText='Text'
        colonne3.innerText='Evaluation'
        colonne4.innerText='Date '
        
        ligne.remove(colonne1)
        ligne.remove(colonne2)
        ligne.remove(colonne3)
        ligne.remove(colonne4)
        }
    }
var j=0
    var i=0
    function option_fun (){
        i++
        var option_div=document.createElement('div')
        option_div.classList.add('option_div')
        var option=document.createElement('input')
        option.placeholder='Option '+i
        option.type="text"
        option.classList.add('option')
        option_div.appendChild(option)
        cont_option.appendChild(option_div)
    }
    
    
    
    function input(type){
        var inp=document.createElement("input");
        // var portion=document.createDocumentFragment()
        // var div= document.createElement('div')
        // var i = 0
        j++
        inp.type=type
    inp.placeholder="Question N° "+j
    inp.id = 'id'+i
    inp.classList.add("question_boite")
    // div.appendChild(inp);
    cont_option.appendChild(inp)
    // document.getElementById('formu').appendChild(cont_option)
}
var ajout_opt=document.createElement('button')
function ajout_option(){
ajout_opt.innerText='+ ajouter une option'
ajout_opt.classList.add('ajout_opt')
cont_option.appendChild(ajout_opt)}

choix.addEventListener('click', questionnaire)
function questionnaire() {
    // alert(1)
    
    var cont_option=document.createElement('div')
    cont_option.id='cont_option'
    document.getElementById('formu').appendChild(cont_option)
    input('text')
option_fun()
option_fun()

ajout_option()

}
choix.addEventListener('click', camouflage)
function camouflage() {
    table.classList.add('camoufler_menu')
}

butt_ajouter.addEventListener('click', hum)
function hum(){
    table.classList.remove('camoufler_menu')
    // formulaire()
}
ajout_opt.addEventListener('click', option_fun)
// choix.addEventListener('click', questionnaire)
 var n2=document.getElementById('cont_option');
console.log(n2)
// alert(n2)

// function option_fun_décl(){
// //     var copie=document.getElementById('input').cloneNode(true)
// //    cont_option.appendChild(copie)
// option_fun()
// }

