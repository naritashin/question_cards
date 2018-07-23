import $ from 'jquery'
import { parse } from 'url'
import 'css/app'
import Card from 'components/organisms/Card'
import Navigation from 'components/organisms/Navigation'

import questions from '../service/questions'

const urlHash = href => {
  return parse(href).hash
}

$('header').append(Navigation)

questions.forEach((question, i) => {
  $('main').append(
    Card({
      buttons: question.buttons,
      className: i === 0 ? 'active' : '',
      description: question.description,
      idName: question.idName,
      number: i + 1,
      title: question.title
    })
  )
})

$('a').on('click', e => {
  // return false
  const target = e.target
  const id = urlHash(target.href)

  $('.current').removeClass('current')
  target.parentNode.classList.add('current')

  $('.active').removeClass('active')
  $(id)[0].classList.add('active')
})

$(window).on('load', () => {
  if (urlHash(location.href)) {
    location.href = ''
  }
})
