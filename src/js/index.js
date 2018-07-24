import $ from 'jquery'

import 'css/app'
import Card from 'components/organisms/Card'
import ConfirmAnswered from 'components/organisms/ConfirmAnswered'
import Navigation from 'components/organisms/Navigation'

import questions from '../service/questions'
import model from '../model/question'

const $dispLock = $('.disp-lock')
const $main = $('main')

const answers = model.dianosis.dianosisAnswers

const displayLocked = () => {
  $dispLock.show()

  setTimeout(() => {
    $dispLock.hide()
  }, 1000)
}

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

$('nav').on('click', 'div', e => {
  displayLocked()

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
  displayLocked()

  const target = e.currentTarget
  const answer = target.dataset.answer
  const $current = $('.current')
  const $parent = $(`#${target.offsetParent.id}`)

  answers[$parent.data('card') - 1].answer = answer

  $parent.find('.selected').removeClass('selected')
  target.classList.add('selected')

  $current
    .removeClass('current')
    .addClass('answered')


  if ($current.index(this) === 4) {
    $('.nav-list').addClass('completed')

    $('#confirm').append(
      ConfirmAnswered({
        answers,
        questions
      })
    )

    $main.append(
      `<div style="position: fixed; top: 30px; left: 0; width: 100%">${JSON.stringify(model)}</div>`
    )

  } else {
    $(`[data-number="${$parent.nextAll('.card-wrap').not('.answered').data('card')}"]`)
      .parent()
      .addClass('current')
  }

  target.offsetParent.classList.add('answered')
})
