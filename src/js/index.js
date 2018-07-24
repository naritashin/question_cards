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
  const target = e.currentTarget

  if ($('.nav-list').hasClass('completed') | target.parentNode.className.indexOf('answered') === -1) {
    return false
  } else {
    $('.current').removeClass('current')
    target.parentNode.classList.add('current')

    $(`[data-card="${target.dataset.number}"]`)
      .removeClass('answered')
    $(`[data-card="${target.dataset.number}"]`)
      .prevAll('.card-wrap').addClass('answered')
  }
})

$('button').on('click', e => {
  const target = e.currentTarget
  const answer = target.dataset.answer
  const $current = $('.current')
  const $parent = $(`#${target.offsetParent.id}`)

  $parent.find('.selected').removeClass('selected')
  target.classList.add('selected')

  $current
    .removeClass('current')
    .addClass('answered')


  if ($current.index(this) === 4) {
    $('.nav-list').addClass('completed')
  } else {
    $(`[data-number="${$parent.nextAll('.card-wrap').not('.answered').data('card')}"]`)
      .parent()
      .addClass('current')
  }

  target.offsetParent.classList.add('answered')
})
