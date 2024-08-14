evaluation.addEventListener('click', evaluation_fun)
function evaluation_fun() {
    var m=0
        var n=0
        var o=0
    o++
    var ajout_opt=document.createElement('button')
    var block3=document.createElement('div')
        // block3.id='block3'
    // var block3_id=document.getElementById('block3'+o)
        block3.classList.add('block3')

// var option_div=document.createElement('div')
    var block1=document.createElement('div')
        // block1.id='block1'+o
    // var block1_id=document.getElementById('block1'+o)
        block1.classList.add('block1')
    var block2=document.createElement('div')
        block2.classList.add('block2')
        // block2.id='block2'+o
        
    // var block2_id=document.getElementById('block2'+o)

    u++
    var cont_option=document.createElement('div')
    cont_option.classList.add('cont_option')
    // cont_option.id='cont_option'+u
    formu.appendChild(cont_option)
    // alert(cont_option.id)
    //  var bn=document.getElementById('cont_option'+u)
            block_ephemere.classList.remove('block_ephemere')
            function input(type){
                var inp=document.createElement("input");
            
                j++
                inp.type=type
                inp.placeholder="Question N° "+j
                // inp.id = 'id_question'+o
                inp.classList.add("question_boite")
                var block5=document.createElement('button')
                block5.classList.add('block5')
                block5.innerHTML='Delete'
                // block5.id='opt'+f
                cont_option.appendChild(block5)
                cont_option.appendChild(inp)
                block5.addEventListener('click', delete_fun3)
                function delete_fun3() {
                    block_ephemere.classList.add('block_ephemere')
                    cont_option.remove(inp)
                    block5.remove(block5)
                // div.appendChild(inp);
                // document.getElementById('formu').appendChild(cont_option)
            }
        }
        input('text')
        butt_div.before(cont_option)

                function select() {
                    var select=document.createElement('select')
                    select.id='list'
                    var select_id=document.getElementById('list')
                var p3=document.createElement('p')
                p3.innerHTML='Niveaux :'
                p3.classList.add('p3')
                block2.appendChild(p3)
                var block10=document.createElement('div')
                block10.classList.add('block10')
                block10.appendChild(p3)
                    // p3.addEventListener('click', option_declanche)
                    // function option_declanche(){
                for (let i = 2; i <= 10; i++) {
                    var option=document.createElement('option')
                    //  option.value=value
                    option.innerHTML=i
                    option.id='op_id'+i
                    option.value=i
                    option.classList.add('drop-down')
                    select_id.appendChild(option)
                    block10.appendChild(select)      
                        // console.log(option.id)
                        // option.addEventListener('click', onclick_fun)
                        onclick_fun()
                    // }
                }
                function onclick_fun(){
                    console.log(select_id.value)}
                    
                    block2.appendChild(block10)
                    block1.appendChild(block2)
                    cont_option.appendChild(block1)
                    
                }
                boucle_etoile(5)
                var n=0
                function boucle_etoile(n){
                    for (let i = 1; i <= n; i++){
                        
                        etoile()
                        
                    }
                }
                function etoile(){
                        var etoile=document.createElement('div')
                        etoile.id=('etoile_div')
                        etoile.classList.add('etoile')
                        etoile.innerHTML='⭐'
                        block2.appendChild(etoile)
                        block1.appendChild(block2)
                        cont_option.appendChild(block1)
                        // console.log(etoile)
                }
                
                // 
            
                
                // 🌟

                select()

          

        butt_div.before(cont_option)
      
    }
    
    
    
evaluation.addEventListener('click', camouflage)
function camouflage() {
block4.classList.add('camoufler_menu')
}

butt_ajouter.addEventListener('click', camoufler_fun)
function camoufler_fun(){
block4.classList.remove('camoufler_menu')
}