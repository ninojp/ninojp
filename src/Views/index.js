'use strict';
import jsonDados from '../../public/json/db.json' with { type: 'json' };
import criaElementoHtml from '../Helpers/criaElementoHtml.js';
import dataAtual from '../Helpers/dataAtual.js';

document.getElementById('dataRodape').innerText = dataAtual();

function criaCardAreaTI() {
    jsonDados.areasTI.map(areaTI => {
        const divCardAreaTI = criaElementoHtml('div', { class: 'divCardAreaTI' },
            criaElementoHtml('h3', {}, areaTI.areaNome),
            criaElementoHtml('div', { class: 'divImgSGVAreaTI' },
                criaElementoHtml('img', { class: 'imgSGVAreaTI', src: areaTI.srcImg, alt: areaTI.areaNome })
            )
        );
        console.log(divCardAreaTI);
        document.querySelector('.divContainerAreasTI').appendChild(divCardAreaTI);
        return divCardAreaTI;
    });
};
criaCardAreaTI();
//==========================================================================================================================
