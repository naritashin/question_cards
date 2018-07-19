import $ from 'jquery'
import { parse } from 'url'
import 'css/app'
import Card from 'components/organisms/Card'
import Navigation from 'components/organisms/Navigation'

const urlHash = () => {
  return parse(location.href).hash
}

console.log(urlHash())

$('header').append(Navigation({ className: 'current' }))
$('main').append(Card({ className: '' }))
