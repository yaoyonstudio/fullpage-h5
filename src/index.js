import $ from 'jquery'
import fullpage from 'fullpage'

import app from './js/common'
import Ajax from './libs/Ajax'
import { log } from './libs/Helper'

log(app)

app.extends = {
  name: 'ken'
}

$(document).ready(function () {
  Ajax(app.apiUrl, 'GET', {}, (res) => {
    console.log('res: ', res)
  })

  new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling:true,
    scrollHorizontally: true,
    afterLoad: function(origin, destination, direction){
      console.log('origin:', origin)
      console.log('destination:', destination)
      console.log('direction:', direction)
    }
  })

  // let box1 = document.getElementById('box1')
  // let box2 = document.getElementById('box2')

  // box1.innerHTML = '<img src="' + require('./assets/img/icon.png') + '" alt="" />'
  // box2.innerHTML = '<img src="' + require('./assets/img/2.jpg') + '" alt="" />'

  // $('h1').css('color', '#d33')
})