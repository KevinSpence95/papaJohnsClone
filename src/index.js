import _ from 'lodash'

function nonReactComponent() {
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    return element;
}

document.body.appendChild(nonReactComponent())
