import $ from 'jquery'

import 'css/app'
import Card from 'components/organisms/Card'
import Navigation from 'components/organisms/Navigation'

import questions from '../service/questions'

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

  $('.current').removeClass('current')
  target.parentNode.classList.add('current')
})

$('button').on('click', e => {
  const target = e.currentTarget
  const answer = target.dataset.answer

  $('.selected').removeClass('selected')
  target.classList.add('selected')

  target.offsetParent.classList.add('answered')
})
