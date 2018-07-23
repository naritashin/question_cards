import $ from 'jquery'

import 'css/app'
import Card from 'components/organisms/Card'
import ConfirmAnswered from 'components/organisms/ConfirmAnswered'
import Navigation from 'components/organisms/Navigation'

import questions from '../service/questions'
import model from '../model/question'

const $main = $('main')

$('header').append(Navigation)

questions.forEach((question, i) => {
  $main.append(
    Card({
      buttons: question.buttons,
      description: question.description,
      idName: question.idName,
      number: i + 1,
      title: question.title
    })
  )
})

$main.append(
  ConfirmAnswered({
    answers: model.dianosis.dianosisAnswers,
    questions
  })
)

$('nav').on('click', 'div', e => {
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

  // $('.current').classList.add('answered')
  target.offsetParent.classList.add('answered')
})
