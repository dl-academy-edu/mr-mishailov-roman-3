//filter js


//get Data from form

const SERVER_URL = 'https://academy.directlinedev.com';

(function (){
    const form = document.querySelector('.form_js');
    const reset = document.querySelector('.reset_js');
    const result = document.querySelector('.result_js');
    const links = document.querySelectorAll('.link_js');
   

    getTags();
    
    let fullData = getParamsFromURL();
    fullData.page = 0;
    showData(fullData, result);

    setValueToForm(form, fullData);

    form.addEventListener('submit', function(event) {
    event.preventDefault();
    const page = fullData.page;
    fullData = getFormData(form);
    fullData.page = page ;
    setParamsToURL(fullData);

    showData(fullData, result);
    
   

    //Button Reset parametrs
    // reset.addEventListener('click', function (){
    //     params = {};
    //     setParamsToURL(params)
    //     setValueToForm(form,params);
    // })

    });
    for (let i = 0; i< links.length; i++) {
        link = links[i];
        link.addEventListener('click', function(event){
            event.preventDefault();
            fullData.page = i;
            showData(fullData,result);
            setParamsToURL(fullData);
        });
    }
})();

function setParamsToURL(params) {

    let url = new URL ('http://asd.asd');
    const keysArray = Object.keys(params);
    for (let key of keysArray) {
        if (typeof params [key] === 'object'){
            const arr = params[key];
            for (let i of arr) {
                url.searchParams.append(key, i);
            }
    }   else {
        url.searchParams.append(key, params[key]);
    }
    history.replaceState ({}, document.title, url.search);
    }
}

function setValueToForm (form, data) {
    let inputs = form.querySelectorAll ('input');
    for (let input of inputs) {
        switch (input.type) {
            case 'radio':
            if(data[input.name]===input.value) {
                input.checked = true;
            }
            break;
            case 'checkbox':
            if(data[input.name] && data[input.name].includes(input.value)) {
                input.checked = true;
            }

            break;
            default:
                if (data[input.name])
                input.value = data[input.name];
            break;
        }
    }
    let textareas = form.querySelectorAll('textarea');
        for (let textarea of textareas) {
            if (data[textarea.name])
            textarea.value=data[textarea.name];
        }
    return data;
}

function getParamsFromURL () {
    const searchParams = new URL(window.location).searchParams;
    let params = {};
    if (searchParams.has('colorsTags')) {
        params.colorsTags = searchParams.getAll('colorsTags');
    }
    if (searchParams.has('views')) {
        params.views = searchParams.get('views');
    }
    if (searchParams.has('comments')) {
        params.comments = searchParams.getAll('comments');
    }
    if (searchParams.has('HowShow')) {
        params.HowShow = searchParams.get('HowShow');
    }
    if (searchParams.has('sorted')) {
        params.sorted = searchParams.get('sorted');
    }
    if (searchParams.has('search')) {
        params.search = searchParams.get('search');
    }
    if (searchParams.has('page')) {
        params.page = searchParams.get('page');
    }
    return params;

}

function showData (data,result) {
    result.innerHTML = JSON.stringify(data, null, 2);
}


function getTags() {
    let xhr = new XMLHttpRequest();
    const box = document.querySelector('.tagBox_js');
    xhr.open('GET', `${SERVER_URL}/api/tags`);
    xhr.send();
    xhr.onload = function() {
        const response = JSON.parse(xhr.response);
        if (response.success) {
            box.innerHTML = '';
            for (let tag of response.data){
                box.innerHTML += tagsCreater(tag);
                
            }
           

        } else {
            console.error(response._message);
        }

        
    };
    xhr.onerror = function() {
        console.error('Error. Try again.');
    };
};

//color checkbox 


function tagsCreater (tag) {
    return `
    <label class="colorCheckbox">
        <input class="colorCheckbox__tag hidden" type="checkbox" name="colorsTags${tag.id}" value="${tag.id}">
        <span class="colorCheckbox__checkbox" style = "border-color: ${tag.color}">
        <svg class="checkSVG" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6.75L5.91301 12.77C6.20128 13.2135 6.85836 13.1893 7.11327 12.7259L13.425 1.25" stroke="${tag.color}" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        </span>
    </label>`
};



            




