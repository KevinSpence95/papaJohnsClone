import _ from 'lodash'
import myName from './myname';

function nonReactComponent() {
    const element = document.createElement('div')

    element.innerHTML = _.join([`Hello ${myName('Kevin')}`, 'this is webpack!'], ' ')

    return element;
}

document.body.appendChild(nonReactComponent())
