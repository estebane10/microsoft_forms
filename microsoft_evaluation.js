evaluation.addEventListener('click', evaluation_fun)
    function evaluation_fun() {
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
            block3.classList.add('block3')

        var block1=document.createElement('div')
            // block1.id='block1'+o
        // var block1_id=document.getElementById('block1'+o)
            block1.classList.add('block1')
        var block2=document.createElement('div')
            block2.classList.add('block2')
            // block2.id='block2'+o
            
        // var block2_id=document.getElementById('block2'+o)

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
                butt_div.before(cont_option)
                    var p=1
                    var block11=document.createElement('div')
                    var block12=document.createElement('div')
                    // block12.classList.add('block12')
                    // var block13=document.createElement('div')
                    // block13.classList.add('block13')

                        function select() {
                            p++
                            var select=document.createElement('select')
                            var block10=document.createElement('div')
                            // select.id='list'
                            // var liste=document.getElementById('list')
                                var p3=document.createElement('p')
                                    p3.innerHTML='Niveaux :'
                                    p3.classList.add('p3')
                                    block2.appendChild(p3)
                                    block10.classList.add('block10')
                                    block10.appendChild(p3)
                                var option1=document.createElement('option')
                                    option1.innerHTML='2'
                                    option1.value=2
                                    option1.id='op_id'+p
                                    select.appendChild(option1)
                                var option2=document.createElement('option')
                                    option2.innerHTML='3'
                                    option2.value=3
                                    option2.id='op_id'+p
                                    select.appendChild(option2)
                                var option3=document.createElement('option')
                                    option3.innerHTML='4'
                                    option3.value=4
                                    option3.id='op_id'+p
                                    select.appendChild(option3)
                                var option4=document.createElement('option')
                                    option4.innerHTML='5'
                                    option4.selected='selected'
                                    option4.value=5
                                    option4.id='op_id'+p
                                    select.appendChild(option4)
                                var option5=document.createElement('option')
                                    option5.innerHTML='6'
                                    option5.value=6
                                    option5.id='op_id'+p
                                    select.appendChild(option5)
                                var option6=document.createElement('option')
                                    option6.innerHTML='7'
                                    option6.value=7
                                    option6.id='op_id'+p
                                    select.appendChild(option6)
                                var option7=document.createElement('option')
                                    option7.innerHTML='8'
                                    option7.value=8
                                    option7.id='op_id'+p
                                    select.appendChild(option7)
                                var option8=document.createElement('option')
                                    option8.innerHTML='9'
                                    option8.value=9
                                    option8.id='op_id'+p
                                    select.appendChild(option8)
                                var option9=document.createElement('option')
                                    option9.innerHTML='10'
                                    option9.value=10
                                    option9.id='op_id'+p
                                    select.appendChild(option9)
                            
                                    block10.appendChild(select)
                                    block12.appendChild(block10)
                                    block2.appendChild(block12)
                                    block1.appendChild(block2)
                                    cont_option.appendChild(block1)

                                var u=0
                                select.addEventListener('click', first_action)
                                    function first_action(){
                                        if(u==0){
                                            console.log(select.value)
                                            u=1
                                        }else if(u==1){
                                            u=0
                                            zero()
                                            execution()
                                        }
                                        function zero(){
                                            block11.innerHTML=''
                                        }
                                        function execution(){
                                        // block11.add(block11)
                                            boucle_etoile(select.value)
                                        }
                                    // else if(u==2){
                                        //     boucle_etoile(0)
                                        //     // boucle_etoile(select.value)
                                    //     u=0
                                    // }
                                    }
                                }
                        
                                var n=0
                                    function boucle_etoile(n){
                                        for(let i = 1; i <= n; i++){                        
                                            etoiles()                        
                                        }
                                    }
                                    function etoiles(){
                                        var etoile=document.createElement('div')
                                            etoile.id=('etoile_div')
                                            etoile.classList.add('etoile')
                                            etoile.innerHTML='⭐'
                                            block11.appendChild(etoile)
                                            block2.appendChild(block11)
                                            block1.appendChild(block2)
                                            cont_option.appendChild(block1)
                                            // console.log(etoile)
                                            block12.before(block11)
                                    }
                        // 🌟
                            boucle_etoile(5)
                            select()
                            butt_div.before(cont_option)
            
    }
evaluation.addEventListener('click', camouflage)
    function camouflage(){
        block4.classList.add('camoufler_menu')
    }

butt_ajouter.addEventListener('click', camoufler_fun)
    function camoufler_fun(){
        block4.classList.remove('camoufler_menu')
    }