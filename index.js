var Highlight = require('highlight-syntax')
var mount = require('choo/mount')
var html = require('choo/html')
var log = require('choo-log')
var css = require('sheetify')
var choo = require('choo')

css('highlight-syntax-pastel')
css('tachyons')

var highlight = Highlight([ require('highlight-syntax/js') ])
var prefix = css`
  :host { background-color: rgb(255, 195, 228) }
`

function code (str) {
  return html`
   <pre class="center lh-copy tl measure-wide-l mt0-ns db bg-dark-gray pa4 mv0 f3 overflow-auto"><code>${
     toHtml(highlight(str.trim(), { lang: 'js' }))
   }</code></pre>
  `
}

var slides = [
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-subheadline-ns bold sans-serif mb4">
        Meditation and mindfulness: a guide to success
      </h1>
      <h2 class="f2 mt0 bold">
        <em>A seminar by Y. Wuyts</em>
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-subheadline-ns bold sans-serif mb4">
        just kidding
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-headline-ns bold sans-serif mb4">
        Go! Go! Nanoframeworks!
      </h1>
      <h2 class="f2 mt0 bold">
        <em>@yoshuawuyts</em>
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-headline-ns bold sans-serif mb4">
        (loud applause)
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-subheadline f-headline-ns bold sans-serif mb4">
        HELLO MY NAME IS YOSH
      </h1>
      <h2 class="f2 mt0 bold">
        (hi yosh)
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f-5 bold ttu">
        Today's seminar:
      </h2>
      <ul class="list f1 lh-copy">
        <li class="underline">
          ___Analyzing the patient__
        </li>
        <li class="underline">
          _________Anatomy class_.
        </li>
        <li class="underline">
          Building a Franken Framework__
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f-subheadline bold">
        So what's a framework anyway?
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <p class="f2 bold">
        Yosh's framework definition:
      </p>
      <h2 class="f-subheadline bold">
        Frameworks are a giant ball of libraries, glue code & opinions
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 bold ttu">
        Modern frameworks contain
      </h2>
      <ul class="list f1 lh-copy">
        <li class="underline">
          Render-to-HTML language
        </li>
        <li class="underline">
          Batch rendering
        </li>
        <li class="underline">
          Data flow management
        </li>
        <li class="underline">
          ________Routing________
        </li>
        <li class="underline">
          Component lifecycle events
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        Act I: Render-to-HTML language
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Low Level DOM API
      </h2>
${code(`
var el = document.createElement('section')
el.setAttribute('class', 'my cool classnames')

var child = document.createElement('div')
child.textContent = 'hello world'

document.body.appendChild(el)
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Template String HTML
      </h2>
${code(`
var html = require('bel')
var el = html\`
  <section class="my cool classnames">
    <div>hello world</div>
  </section>
\`
document.body.appendChild(el)
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        Act II: Batch Rendering
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Problem: updating DOM elements is expensive
      </h2>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1">
        RequestAnimationFrame (RAF)
      </h2>
${code(`
function rafLoop () {
  window.RequestAnimationFrame(function () {
    /* update the DOM right here */
    rafLoop() // yay recursion
  })
}
rafLoop()
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Nanoraf
      </h2>
${code(`
var nanoraf = require('nanoraf')

var render = nanoraf(function () {
  /* update the DOM right here */
})

render()
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Updating the DOM
      </h2>
${code(`
function toggleClass (elementState) {
  var parent = document.querySelector('#js-my-element')
  var child = parent.childNodes[0]

  if (elementState.isOff)
    child.setAttribute('class', 'on')
  } else {
    child.setAttribute('class', 'off')
  }
}
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Updating the DOM <br> functional rendering
      </h2>
${code(`
function toggleClass (state) {
  var _class = state.isOff ? 'on' : 'off'
  return html\`
    <section>
      <div class=\${_class}</div>
    </section>
  \`
}
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Updating the DOM <br> Diffing views
      </h2>
${code(`
var morph = require('nanomorph')
var html = require('bel')

var tree = html\`<div>hello people</div>\`
tree = morph(html\`<div>nanananana-na-no</div>\`, tree)
tree = morph(html\`<div>tiny tin bottle</div>\`, tree)
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        Act III: Data Flow
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        *crickets*
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Batched async events
      </h2>
${code(`
var nanotick = require('nanotick')
var tick = nanotick()
var callFunction = tick(function () {
  // everything in here is now async, asap
})
callFunction()
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        Act IV: Routing
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 bold ttu">
        Requirements:
      </h2>
      <ul class="list f1 lh-copy">
        <li class="underline">
          Render views____
        </li>
        <li class="underline">
          ____History API
        </li>
        <li class="underline">
          URL destructuring
        </li>
        <li class="underline">
          Param_____ support
        </li>
        <li class="underline">
          Route caching
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Sheet-router
      </h2>
${code(`
var sheetRouter = require('sheet-router')
var router = sheetRouter([
  ['/:username', [
    ['/orgs', orgView]
  ]],
  ['/404', notFoundView]
])
router('/hughsk/orgs')
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        Act V: Component lifecycle
      </h1>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 bold ttu">
        Events make the DOM go round
      </h2>
      <ul class="list f2 lh-copy">
        <li class="underline">
          Has a user interacted with an element?
        </li>
        <li class="underline">
          Is an element mounted on the DOM?
        </li>
        <li class="underline">
          Is an element unmounted from the DOM?
        </li>
        <li class="underline">
          Does the browser have time to render?
        </li>
        <li class="underline">
          Do we need to re-render or cache?
        </li>
        <li class="underline">
          Is my element currently visible?
        </li>
      </ul>
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Handling interaction
      </h2>
${code(`
var html = require('bel')

html\`
  <button onclick=\${handleClick}>
  </button>
\`
function handleClick (e) {
  console.log('clicked by', e.target)
}
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Is an element mounted?
      </h2>
${code(`
var onload = require('on-load')

var el = html\`<div>hey</div>\`
onload(el, loaded, unloaded)

function loaded () {
  console.log('element loaded')
}

function unloaded () {
  console.log("and we're gone")
}
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Is an element in view?
      </h2>
${code(`
var onintersect = require('on-intersect')

var el = html\`<div>hey</div>\`
onintersect(el, entered, exited)

function entered () {
  console.log('element in view')
}

function exited () {
  console.log("and we're gone")
}
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h2 class="f1 ttu">
        Does the browser have spare time?
      </h2>
${code(`
var polite = require('polite-element')
html\`
  <section>
    \${polite(renderBasic, renderFancy)}
  </section>
\`

function renderBasic () {
  return html\`<div> waitingggg</div> \`
}
function renderFancy () {
  return html\`<div>annnnd we're here!</div> \`
}
`)}
    </main>
  `,
  html`
    <main class="mw7">
      <h1 class="f-5 ttu">
        [ hacking time ]
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
      <h2 class="f4 underline">
        https://github.com/yoshuawuyts/go-go-nanoframeworks-talk
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

function toHtml (str) {
  var el = html`<div></div>`
  el.innerHTML = str
  return el.childNodes[0]
}
