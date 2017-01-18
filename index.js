var mount = require('choo/mount')
var html = require('choo/html')
var log = require('choo-log')
var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var prefix = css`
  :host { background-color: rgb(255, 195, 228) }
`

var slides = [
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-headline-ns bold sans-serif mb4">
        <span>CH</span>
        <span style="letter-spacing: -0.3em;"> </span>
        <span>O</span>
        <span style="letter-spacing: 0.07em;"> </span>
        <span>O</span>
      </h1>
      <h2 class="f1 code bold ttu">
        boarding the tiny framework 🚂🚃🚃🚃
      </h2>
      <h2 class="f2 mt0 code bold">
        [ @yoshuawuyts ]
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 code bold ttu">
        What are we talking about today?
      </h2>
      <ul class="list f2 lh-copy">
        <li class="underline">
          __Why build a framework?________
        </li>
        <li class="underline">
          ___Lessons learned_.
        </li>
        <li class="underline">
          What are the new things coming up?_
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f-5 code bold ttu">
        Building things is fun!
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">To quote Julia Evans (b0rk)</h3>
      <ol class="list f2 lh-copy">
        <li class="underline">
          1. Ask questions!
        </li>
        <li class="underline mt3">
          2. _____Run into problems other people don't know the answer to
        </li>
        <li class="underline mt3">
          3. Just because other people don't know a thing it doesn't mean you
          can't figure out how to do the thing___________
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: end">
        Syntax time!
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu mb0">
        sup choo
      </h1>
      <pre class="f3 tl mt4 self-start pa4" style="background-color: #fff">
        ${`
var html = require('choo/html')
var choo = require('choo')
var app = choo()
app.router(['/', mainView])
document.body.appendChild(app.start())
function mainView () {
  return html\`
    <h1>hello tokyo</h1>
  \`
}
        `
        }
      </pre>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        choo origin. .story time
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu" style="text-align: right">
        A framework that's...
      </h1>
      <ul class="list f2 lh-copy">
        <li class="underline mt3">
          ,fast to build
        </li>
        <li class="underline mt3">
          ,,performant
        </li>
        <li class="underline mt3">
          ,,,understandable
        </li>
        <li class="underline mt3">
          ,,,,hackable
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        Building frameworks
      </h1>
      <ul class="list f2 lh-copy">
        <li class="underline mt2">
          Always room for things to be added__
        </li>
        <li class="underline mt2">
          Large surface area________
        </li>
        <li class="underline mt2">
          Lots of glue code__
        </li>
        <li class="underline mt2">
          ___ Tradeoffs are hard
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: left">
        frameworks make cool ideas accessible
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: left">
        What if we could do dom diffing without a virtual DOM?
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: left">
        Morphdom!
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: left">
        [ MORPHDOM DEMO ]
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: left">
        What if we could turn our router into a sitemap?
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu mb0">
        sup router
      </h1>
      <pre class="f3 tl mt4 self-start pa4" style="background-color: #fff">
        ${`
var html = require('choo/html')
var choo = require('choo')
var app = choo()
app.router([
  ['/', mainView]
  ['/foo', fooView]
  ['/bin', [
    ['/:bar', binBarView]
  ]]
])
document.body.appendChild(app.start())
}
        `
        }
      </pre>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        , so how does this all perform?
      </h1>
      <h2 class="f1" style="text-align: right">
        batched rendering performance
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f1 ttu underline">
        what are choo's 🆒 ideas
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: right">
        event-based recursive asynchronous data flow
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: justify">
        framework-independent elements
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: justify">
        <input onkeydown=${(e) => e.preventDefault()} placeholder="and DOM diffing">
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu" style="text-align: justify">
        <input onkeydown=${(e) => e.preventDefault()}>
      </h1>
      <h1 class="f-5 ttu" style="text-align: justify">
        yay for dom diffing!
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        where to after [_v4.0_]
      </h1>
      <ul class="list f2 lh-copy">
        <li class="underline mt2">
          ++iterate BANKAI streaming asset compiler
        </li>
        <li class="underline mt2">
          _____build a server framework (merry!)
        </li>
        <li class="underline mt2">
          build out {base,form}-elements______--
        </li>
        <li class="underline mt2">
          ______improve perf
        </li>
        <li class="underline mt2">
          improve models____
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        [ show off bankai && sheetify ? ]
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        [ demo time ]
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        Thanks for listening!
      </h1>
      <h2 class="f2">
        Twitter / yoshuawuyts
      </h2>
      <h2 class="f2">
        GitHub / yoshuawuyts
      </h2>
    </main>
  `
]

var app = choo()
app.use(log())

app.model({
  namespace: 'slides',
  state: {
    slide: (function () {
      var loc = window.location.hash.replace('#', '')
      return (!loc) ? 0 : Number(loc.replace('slide-', ''))
    })(),
    max: slides.length - 1
  },
  reducers: {
    set: function (state, data) {
      return { slide: data }
    }
  },
  effects: {
    left: function (state, data, send, done) {
      var num = state.slide - 1
      var uri = (num <= 0) ? '/' : '#slide-' + num
      if (!(num < 0)) {
        send('slides:set', num, function () {
          send('location:set', uri, done)
        })
      }
    },
    right: function (state, data, send, done) {
      var num = state.slide + 1
      var uri = '#slide-' + num
      if (!(num > state.max)) {
        send('slides:set', num, function () {
          send('location:set', uri, done)
        })
      }
    }
  },
  subscriptions: {
    keydown: (send, done) => {
      document.body.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft' || e.key === 'h') send('slides:left', done)
        if (e.key === 'ArrowRight' || e.key === 'l') send('slides:right', done)
      })
    }
  }
})

app.router(slides.map((slide, i) => {
  var index = (!i) ? '/' : 'slide-' + i
  return [index, wrap(slide)]

  function wrap (slide) {
    return function () {
      // we gotta deep clone nodes or else vdom mutation
      // comes to ruin the party
      return html`
        <body
          style="height: 100vh;"
          class=${prefix + ' flex justify-center items-center tc'}>
          ${slide.cloneNode(true)}
        </body>
      `
    }
  }
}))

mount('body', app.start())
