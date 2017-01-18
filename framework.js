var sheetRouter = require('sheet-router')
var nanomorph = require('nanomorph')
var nanoraf = require('nanoraf')
var html = require('bel')

function framework () {
  var _router = null

  return {
    html: html,
    start: start,
    router: router
  }

  function router (args) {
    _router = sheetRouter(args)
  }

  function start (state) {
    var tree = _router(window.location.pathname, state, change)

    var render = nanoraf(function (state) {
      var newTree = _router(window.location.pathname, state, change)
      return nanomorph(newTree, tree)
    })

    return tree

    function change (newState) {
      render(newState, {})
    }
  }
}

var f = framework()
f.router(['/', mainView])
var el = f.start({ count: 0 })
document.body.appendChild(el)

function mainView (params, state, change) {
  return f.html`
    <h1 onclick=${onlick}>
      Count is: ${state.count}
    </h1>
  `

  function onlick () {
    change({ count: state.count += 1 })
  }
}
