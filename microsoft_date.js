date.addEventListener('click', questionnaire)
    function questionnaire() {
        var m=0
        var n=0
        var o=0
        valeur=2
        o++
        u++
                if (valeur==2) {
                    valeur=1
                    butt_ajouter.innerText='+ Ajouter'
                    butt_ajouter.classList.remove('butt_ajouter_clic')
            
                    div_choix.remove(choix)
                    div_text.remove(text)
                    div_evaluation.remove(evaluation)
                    div_date.remove(date)
                
                }

        var ajout_opt=document.createElement('button')
        var block3=document.createElement('div')
            block3.id='block3'+o
        var block3_id=document.getElementById('block3'+o)
            block3.classList.add('block3')
        var block1=document.createElement('div')
            block1.id='block1'+o
        var block1_id=document.getElementById('block1'+o)
            block1.classList.add('block1')
        var block2=document.createElement('div')
            block2.id='block2'+o
        var block2_id=document.getElementById('block2'+o)
            block2.classList.add('block2')
    
        var cont_option=document.createElement('div')
            cont_option.classList.add('cont_option')
            cont_option.id='cont_option'+u
            formu.appendChild(cont_option)
        // alert(cont_option.id)
         var bn=document.getElementById('cont_option'+u)
                block_ephemere.classList.remove('block_ephemere')
                function input(type){
                    var inp=document.createElement("input");
                    
                        j++
                        inp.type=type
                        inp.placeholder="Question N° "+j
                        inp.id = 'id'+i
                        inp.classList.add("question_boite")
                    var block5=document.createElement('button')
                        block5.classList.add('block5')
                        block5.innerHTML="<img src='delete.svg' width='30'>"
                        block5.title='supprimer'
                        block5.id='opt'+n
                    var block5_div=document.createElement('div')
                        block5_div.classList.add('block5_position')
                        block5_div.appendChild(block5)
                    var question_div=document.createElement('div')
                        question_div.appendChild(inp)
                        question_div.appendChild(block5_div)
                        cont_option.appendChild(question_div)

                            inp.addEventListener('click', ajt_delete_add)
                            question_div.addEventListener('mousemove', ajt_delete_add)
                            question_div.addEventListener('mouseout', ajt_delete_remove)
                                function ajt_delete_add(){
                                    block5.classList.add('block5_camouflage')

                                }
                                function ajt_delete_remove(){
                                    block5.classList.remove('block5_camouflage')
                                }
                    
                            block5.addEventListener('click', delete_fun3)
                            function delete_fun3() {
                                block_ephemere.classList.add('block_ephemere')
                                cont_option.remove(document.getElementById('id'+i))
                                block5.remove(document.getElementById('opt'+n))
                    // div.appendChild(inp);
                    // document.getElementById('formu').appendChild(cont_option)
                }
                }
                input('text')
                function option_fun (){
                    m++
                    n++
                    var option=document.createElement('input')
                        option.placeholder='Entrez la date (yyyy-MM-dd) '
                        option.type="text"
                        option.classList.add('interdit')
                        option.classList.add('option_text')
                        option.disabled=true;
                        block2.appendChild(option)
                        block1.appendChild(block2)
                        cont_option.appendChild(block1)
                
                }
                option_fun()
               
                bn.appendChild(block1)

                butt_div.before(cont_option)
                ajout_opt.addEventListener('click', ajout_fun)
                    function ajout_fun(){
                        option_fun()
                        block3.before(block2)
                    }
    }

date.addEventListener('click', camouflage)
    function camouflage() {
        block4.classList.add('camoufler_menu')
}
butt_ajouter.addEventListener('click', camoufler_fun)
    function camoufler_fun(){
        block4.classList.remove('camoufler_menu')
}