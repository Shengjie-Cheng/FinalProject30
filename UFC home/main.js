var Select = document.getElementById("question");
Select.onchange = function() { 
    var valOption= this.options[this.SelectedIndex].value;
        if(valOption==""){
            document.getElementById("messagebox").value ="";
        }

        else if(valOption=="What"){
            document.getElementById("messagebox").value ="The UFC (Ultimate Fighting Championship) is the largest mixed martial arts.Click button to read more.";
            
        }

        else if(valOption == "history"){
            document.getElementById("messagebox").value ="November 12, 1993 ufc create.Click button to read more";
        }

        else if(valOption == "rules"){
            document.getElementById("messagebox").value ="Butting with the head.Eye gouging of any kind...Click button to read more";
        }