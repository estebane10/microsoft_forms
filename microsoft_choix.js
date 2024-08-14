var formu=document.getElementById('formu')
    var butt_ajouter=document.createElement('button')
        var butt_div=document.createElement('div')
            butt_div.classList.add('menu')
            
            butt_ajouter.id='ajouter'
            butt_ajouter.innerText='+ Ajouter'
            butt_ajouter.title='ajouter'
            butt_div.appendChild(butt_ajouter)
            formu.appendChild(butt_div)

        var block_ephemere=document.createElement('div')
            block_ephemere.classList.add('block_ephemere')
            formu.appendChild(block_ephemere)
        var block4=document.createElement('div')
        var div_choix=document.createElement('div')
        var div_text=document.createElement('div')
        var div_evaluation=document.createElement('div')
        var div_date=document.createElement('div')

        var choix=document.createElement('a')
            choix.href='#ajouter'
            choix.id='choix'
            choix.classList.add('choix')
            choix.classList.add('td')
            choix.innerText='Choix'

        var text=document.createElement('a')
            text.href='#ajouter'
            text.classList.add('lien')
            text.classList.add('text')
            text.classList.add('td')
            text.innerText='Text'

        var evaluation=document.createElement('a')
            evaluation.href='#ajouter'
            evaluation.classList.add('lien')
            evaluation.classList.add('evaluation')
            evaluation.classList.add('td')
            evaluation.innerText='Evaluation'

        var date=document.createElement('a')
            date.href='#ajouter'
            date.classList.add('lien')
            date.classList.add('date')
            date.classList.add('td')
            date.innerText='Date'

        var valeur=1

            butt_ajouter.addEventListener('click', les_choix)
            function les_choix() {

                if (valeur==1) {
                    butt_ajouter.innerHTML='+'
                    butt_ajouter.classList.add('butt_ajouter_clic')
                    valeur=2
                    // table.border='1'
                    // colonne1.innerText='Choix'
                    div_choix.appendChild(choix)
                    div_text.appendChild(text)
                    div_evaluation.appendChild(evaluation)
                    div_date.appendChild(date)

                    block4.appendChild(div_choix)
                    block4.appendChild(div_text)
                    block4.appendChild(div_evaluation)
                    block4.appendChild(div_date)

                    butt_div.appendChild(block4)
                    block4.classList.add('block4')
                }   else if (valeur==2) {
                        valeur=1
                        butt_ajouter.innerText='+ Ajouter'
                        butt_ajouter.classList.remove('butt_ajouter_clic')

                        div_choix.remove(choix)
                        div_text.remove(text)
                        div_evaluation.remove(evaluation)
                        div_date.remove(date)
                    
                }
            }
        var j=0
        var i=0
        var u=0
            choix.addEventListener('click', questionnaire)
                function questionnaire() {
                    var m=0
                    var n=0
                    var o=0
                    o++
                    u++
                        valeur=2
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
                                            }
                            }
                            input('text')
                            function option_fun (){
                                var cont_ligne_opt=document.createElement('div')
                                    cont_ligne_opt.classList.add('red')
                                    m++
                                    n++
                                // option_div.classList.add('option_div')
                                var option=document.createElement('input')
                                var block5=document.createElement('button')
                                var block5_div=document.createElement('div')
                                    block5_div.classList.add('block5_position')
                                    block5_div.appendChild(block5)
                                var radio=document.createElement('input')
                                    radio.type='radio'
                                    radio.id='rd'
                                    radio.classList.add('radio')
                                    option.placeholder='Option '+m
                                    option.type="text"
                                    option.classList.add('option')
                            
                                    block5.classList.add('block5')
                                    block5.innerHTML="<img src='delete.svg' width='30'>"
                                    option.id='opt'+m
                                    block5.id='opt'+n
                                    block5.title='supprimer'
                                    cont_ligne_opt.appendChild(radio)
                                    cont_ligne_opt.appendChild(option)
                                    cont_ligne_opt.appendChild(block5_div)
                                    block2.appendChild(cont_ligne_opt)
                                    block1.appendChild(block2)
                                    cont_option.appendChild(block1)

                                    option.addEventListener('click', ajt_delete_add)
                                        cont_ligne_opt.addEventListener('mousemove', ajt_delete_add)
                                        cont_ligne_opt.addEventListener('mouseout', ajt_delete_remove)
                                            function ajt_delete_add(){
                                                block5.classList.add('block5_camouflage')

                                            }
                                            function ajt_delete_remove(){
                                                block5.classList.remove('block5_camouflage')
                                            }
                            
                                    block5.addEventListener('click', delete_fun3)
                                    function delete_fun3() {
                                        option.remove(document.getElementById('opt'+m))
                                        block5.remove(document.getElementById('opt'+n))
                                        radio.remove(document.getElementById('rd'))
                                    }
                        }
                        option_fun()
                        option_fun()
                        function ajout_option(){
                            ajout_opt.innerText='+ Ajouter une option'
                            ajout_opt.classList.add('ajout_opt')
                    
                            block3.appendChild(ajout_opt)
                            block1.appendChild(block3)
                        }
                        ajout_option()
                            bn.appendChild(block1)
                            butt_div.before(cont_option)
                            ajout_opt.addEventListener('click', ajout_fun)
                        function ajout_fun(){
                            option_fun()
                            block3.before(block2)
                        }
        //             function point() {
        //                 var points=document.createElement('input')
        //                 points.type='number'
        //                 points.value=0
        //                 // points.placeholder
        //                 cont_option.addEventListener('click', push)
        //                 var title=document.getElementById('title')
        //                  var affiche_point=document.createElement('div')
        //                 function push(){
        //                         affiche_point.classList.add('affiche_point')
        //                         affiche_point.innerHTML='  ('+points.value+' points '+') '
        //                         if (points.value=='') {
        //                             affiche_point.remove(affiche_point)
        //                         }
        //                     }
        // title.appendChild(affiche_point)
        //     cont_option.appendChild(points)
                        
            
        //             }
        //             point()

        // document.addEventListener('click', verification)
        // function verification(){
        //             // choix.id='choix'
        //             //  const element=document.getElementById('cont_option'+u)
        //             //  console.log(element)
        //                 if (!choix.contains(event.target) && !butt_ajouter.contains(event.target)) {
        //                     valeur=2
        //                 }
        //             }
            
                }
        
        
choix.addEventListener('click', camouflage)
    function camouflage() {
    block4.classList.add('camoufler_menu')
}

butt_ajouter.addEventListener('click', camoufler_fun)
function camoufler_fun(){
    block4.classList.remove('camoufler_menu')
}
// -------------------------------------------------------------------------------------------------------------------------------

                text.addEventListener('click', text_fun)
                    function text_fun() {
                        var m=0
                        var n=0
                        var o=0
                        o++
                        u++
                            valeur=2
                                if (valeur==2) {
                                    valeur=1
                                    butt_ajouter.innerText='+ Ajouter'
                                    butt_ajouter.classList.remove('butt_ajouter_clic')
                            
                                    div_choix.remove(choix)
                                    div_text.remove(text)
                                    div_evaluation.remove(evaluation)
                                    div_date.remove(date)
                                
                                }
                        // value=1
                        var ajout_opt=document.createElement('button')
                        var block3=document.createElement('div')
                            block3.id='block3'+o
                        var block3_id=document.getElementById('block3'+o)
                            block3.classList.add('block3')

                    // var option_div=document.createElement('div')
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
                                    // bn.appendChild(block5)
                                    // bn.appendChild(inp)
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
                                            }
                                }
                                input('text')
                                function option_fun (){
                                    m++
                                    n++
                                    var option=document.createElement('input')
                                    
                                    var block5=document.createElement('button')
                                    // var radio=document.createElement('input')
                                    // radio.type='radio'
                                    // radio.id='rd'
                                    // radio.classList.add('radio')
                                        option.placeholder='Entrez votre réponse '
                                        option.type="text"
                                        option.classList.add('interdit')
                                        option.classList.add('option_text')
                                    
                                    // block5.classList.add('block5')
                                    // block5.innerHTML='Delete'
                                    // option.id='opt'+m
                                    // block5.id='opt'+n
                                    // // block2.appendChild(radio)
                                        block2.appendChild(option)
                                        // block2.appendChild(block5)
                                        block1.appendChild(block2)
                                        cont_option.appendChild(block1)
                                    
                                    //     block5.addEventListener('click', delete_fun3)
                                    //     function delete_fun3() {
                                        //         option.remove(document.getElementById('opt'+m))
                                        //         block5.remove(document.getElementById('opt'+n))
                                        //         // radio.remove(document.getElementById('rd'))
                                        // }
                                        option.disabled=true;
                                }
                                option_fun()
                                    // option_fun()
                                function ajout_option(){
                                    ajout_opt.innerText='+ Ajouter une réponse'
                                    ajout_opt.classList.add('ajout_opt')
                                    
                                    block3.appendChild(ajout_opt)
                                    block1.appendChild(block3)
                                }
                                ajout_option()
                                bn.appendChild(block1)
                                
                                butt_div.before(cont_option)
                                var p1=document.createElement('p')
                                    p1.innerHTML='Bonnes réponses :'
                                    p1.classList.add('p1')
                                    block2.appendChild(p1)

                                function reponse_fun() {
                                        var reponse=document.createElement('input')
                                        var ajt_rps=document.createElement('button')
                                        var block6=document.createElement('div')
                                            block6.classList.add('block6')
                                            reponse.type='text'
                                            reponse.placeholder='Ajouter une bonne réponse'
                                            reponse.classList.add('reponse_input')
                                            ajt_rps.innerHTML='ajouter'
                                            ajt_rps.classList.add('ajt_rps')
                                    
                                        var block9=document.createElement('div')
                                            block9.classList.add('block9')

                                            ajt_rps.addEventListener('click', push_rps)
                                                function push_rps(){
                                                    var block7=document.createElement('div')
                                                        block7.classList.add('block7')
                                                    var block8=document.createElement('div')
                                                        block8.classList.add('block8')
                                                    var p2=document.createElement('div')
                                                        p2.classList.add('p2')
                                                        // block6.classList.remove('block6')
                                                        p2.innerHTML=reponse.value
                                                        block8.innerHTML='✔️'
                                                        block7.appendChild(p2)
                                                        block7.appendChild(block8)
                                                        block9.appendChild(block7)
                                                        block6.prepend(block9)

                                                        block8.addEventListener('mouseenter', affiche_delete)
                                                            function affiche_delete() {
                                                                block8.innerHTML='✖️'
                                                                block8.addEventListener('click', delete_reponse)
                                                                    function delete_reponse() {
                                                                        block7.remove(block7)
                                                                    }
                                                            }
                                                        block8.addEventListener('mouseout', affiche_valide)
                                                            function affiche_valide() {
                                                                block8.innerHTML='✔️'
                                                            }
                                                }
                                                    block6.appendChild(reponse)
                                                    block6.appendChild(ajt_rps)
                                                    block2.appendChild(block6)
                                                
                                                function desactive_button(){
                                                    ajt_rps.classList.remove('ajt_rps')
                                                    ajt_rps.classList.add('ajt_desactiver')
                                                    ajt_rps.disabled=true
                                                }
                                    
                                                desactive_button()
                                                    reponse.oninput = function active_button(){
                                                        var reponse_value=reponse.value
                                                            if(reponse_value==='' || reponse_value===' ') {
                                                                desactive_button()
                                                            }else{
                                                                ajt_rps.classList.remove('ajt_desactiver')
                                                                ajt_rps.classList.add('ajt_rps')
                                                                ajt_rps.disabled=false
                                                            }
                                                        // reponse.addEventListener('keyUp', bon)
                                                        // reponse.addEventListener('keyPress', bon)
                                                        // reponse.addEventListener('keyDown', bon)
                                                    // alert(reponse_value)
                                                    }
                                }    
                                ajout_opt.addEventListener('click', ajout_fun)
                                    function ajout_fun(){
                                        reponse_fun()            
                                        block3.before(block2)
                                        ajout_opt.remove(ajout_opt)
                                    }
                    }
text.addEventListener('click', camouflage)
    function camouflage() {
        block4.classList.add('camoufler_menu')
    }

butt_ajouter.addEventListener('click', camoufler_fun)
    function camoufler_fun(){
        block4.classList.remove('camoufler_menu')
    }
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
       
        
