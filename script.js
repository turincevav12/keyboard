window.onload = () => {
    var key = document.getElementById('keyboard')

    var language = {
        "en": [97, 122],
        "rus": [1072, 1103]
    }
    document.getElementById('del').onclick = () => {
        var window = document.getElementById('window').innerText.split("")
        var win = window.splice(window.length - 1, 1)
        document.getElementById('window').innerText = ""
        document.getElementById('window').innerText = window.join('')   
    }
    document.getElementById('space').onclick = () => { 
        var window = document.getElementById('window').innerText
        document.getElementById('window').innerText = window + String.fromCharCode(32)
    }

    document.getElementById('lang').onchange = () =>{
        key.innerHTML = ''
        var lang = document.getElementById('lang')
        var lang = lang.value

        for(var i = language[lang][0]; i!= language[lang][1]+1; i++){
            var button = document.createElement('div')
            button.id = i
            button.onclick = function(e){
                window.index = (e.target.id)
                click()
            }
            button.className = "langButton"
            button.innerText = String.fromCharCode(i)
            key.appendChild(button)
        }
        var click = () => {        
            var window = document.getElementById('window')
            window.innerText = window.innerText + String.fromCharCode(index)
        }
    }

    

}
//alert(String.fromCharCode(1072))
alert(" ".charCodeAt('0'))