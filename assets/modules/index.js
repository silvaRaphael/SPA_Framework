import { render } from "./hooks.js";
import ComponentsStyle from "./ComponentsStyle.js";

window.getElement = el => document.querySelector(el)

const ItemsArray = [];

// CONTAINERS
export function View({ className, id, child, children, crossAxis, style, hover, animated }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'div'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (child) {
    render(child, element)
  } else if (children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.view = ''

  if (crossAxis) element.dataset.column = ''

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function Container({ className, id, child, children, crossAxis, style, hover, animated }) {


  ItemsArray.push(ItemsArray.length)

  let elemType = 'div'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (child) {
    render(child, element)
  } else if (children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.container = ''

  if (crossAxis) element.dataset.column = ''

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function Grid({ className, id, child, children, crossAxis, style, hover, rows, columns, gap, rowGap, columnGap, animated }) {


  ItemsArray.push(ItemsArray.length)

  let elemType = 'div'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (child) {
    render(child, element)
  } else if (children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.grid = ''

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object' ||
    rows ||
    columns ||
    gap ||
    rowGap ||
    columnGap) {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (gap) {
      Style({
        selector: `.${identifier}`,
        gap: gap ? gap.toString() : '0'
      })
    }

    if (rowGap) {
      Style({
        selector: `.${identifier}`,
        rowGap: rowGap ? rowGap.toString() : '0'
      })
    }

    if (columnGap) {
      Style({
        selector: `.${identifier}`,
        columnGap: columnGap ? columnGap.toString() : '0'
      })
    }

    if (rows) {
      if(typeof rows == 'object') {
        Style({
          selector: `.${identifier}`,
          gridTemplateRows: rows.join(' '),
        })
      } else {
        Style({
          selector: `.${identifier}`,
          gridTemplateRows: `repeat( ${rows}, 1fr )`,
        })
      }
    }

    if (columns) {
      if(typeof columns == 'object') {
        Style({
          selector: `.${identifier}`,
          gridTemplateColumns: columns.join(' '),
        })
      } else {
        Style({
          selector: `.${identifier}`,
          gridTemplateColumns: `repeat( ${columns}, 1fr )`,
        })
      }
    }

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function Center({ className, id, child, children, style, hover, animated }) {


  ItemsArray.push(ItemsArray.length)

  let elemType = 'div'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (child) render(child, element)

  element.dataset.center = ''

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function Row({ className, id, child, children, crossAxis, style, hover, animated }) {


  ItemsArray.push(ItemsArray.length)

  let elemType = 'div'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (child) {
    render(child, element)
  } else if (children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.row = ''

  if (crossAxis) element.dataset.column = ''

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function Column({ className, id, child, children, crossAxis, style, hover, animated }) {


  ItemsArray.push(ItemsArray.length)

  let elemType = 'div'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (child) {
    render(child, element)
  } else if (children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.column = ''

  if (crossAxis) element.dataset.row = ''

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function Expanded({ className, id, child, children, crossAxis, style, hover, animated }) {


  ItemsArray.push(ItemsArray.length)

  let elemType = 'div'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (child) {
    render(child, element)
  } else if (children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  element.dataset.expanded = ''

  if (crossAxis) element.dataset.row = ''

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}
// CONTAINERS


// TEXT
export function Text({ type, className, id, child, style, hover, animated }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'p'

  if (type && typeof (type) == 'string') elemType = type

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (child) element.innerHTML = child

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}
// TEXT

// INPUT / BUTTON / LINK / CLICK / LIST / ICONTEXT
export function Statefull({ key, child }) {

  window[key.name] = key

  if (key) child.dataset.statefull = key.name

  return child
}

export function Select({ className, id, children, style, hover, name, value, animated }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'select'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (name && typeof (name) == 'string') element.name = name

  if (value && typeof (value) == 'string') element.value = value

  if (children) {
    children.forEach(item => {
      render(item, element)
    })
  }

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function Option({ child, selected, style, value }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'option'

  let element = document.createElement(elemType)

  if (selected) element.selected = selected

  if (value && typeof (value) == 'string') element.value = value

  if (child) render(child, element)

  return element
}

export function TextInput({ type, className, id, style, hover, rows, name, value, placeholder, checked, animated }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'input'

  if (type && typeof type == 'string' && type.toLowerCase() == 'textarea') elemType = 'textarea'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (type == 'textarea') if (rows) element.rows = rows

  if (type == 'checkbox') element.checked = checked

  if (type && typeof type == 'string' && type.toLowerCase() !== 'textarea') element.type = type

  if (name && typeof (name) == 'string') element.name = name

  if (value && typeof (value) == 'string') element.value = value

  if (placeholder && typeof (placeholder) == 'string') element.placeholder = placeholder

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function GestureDetector({ child, animated, ...events }) {

  let parameters = Object.entries(events)

  parameters = parameters.map(param => {
    if (param[0] != "child" && param[0] != "children") {
      param[0] = param[0].slice(2, param[0].length).toLowerCase()
      return param
    }
  })

  parameters.forEach(event => {
    if (event) {
      child.addEventListener(event[0], e => event[1](e))
    }
  })

  child.dataset.pointer = ''

  return child
}

export function Button({ className, id, child, style, hover, animated }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'button'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (child) render(child, element)

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function Link({ className, id, to, target, child, children, preventDefault, style, hover, animated }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'a'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (to && typeof (to) == 'string') element.href = to

  if (target && typeof (target) == 'string') element.target = target

  if (child) {
    render(child, element)
  } else if (children) {
    children.forEach(item => {
      render(item, element)
    });
  }

  if (preventDefault) element.onclick = (e) => { e.preventDefault() }

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function List({ title, children, align, size, titleStyle, style, animated }) {

  return (
    Column({
      style: {
        width: size ? size : '100%',
        alignItems: align ? align : 'flex-start',
        ...style
      },
      children: [
        title ? Text({
          type: 'span',
          style: titleStyle ? titleStyle : '',
          child: title
        }) : '',
        Column({
          style: {
            alignItems: align ? align : 'flex-start',
            margin: '.5rem 0 1rem'
          },
          children: children ? children : ''
        })
      ]
    })
  )
}

export function IconText({ icon, iconStyle, text, textStyle, align, spacing, style, hover, animated }) {

  spacing = typeof spacing == 'number' ? `${spacing}px` : spacing

  return (
    Row({
      style: {
        margin: '0 .25rem 0',
        alignItems: align ? align : 'flex-start',
        transition: '.2s',
        ...style
      },
      hover: hover ? hover : '',
      children: [
        typeof icon == 'string' ?
          Image({
            source: icon,
            style: {
              width: '.8rem',
              marginRight: spacing ? spacing : '8px',
              ...iconStyle
            },
          }) :
          Center({
            style: { marginRight: spacing ? spacing : '8px', },
            child: icon
          }),
        typeof text == 'object' ? text :
          Text({
            child: text,
            style: textStyle ? textStyle : ''
          })
      ]
    })
  )
}
// INPUT / BUTTON / LINK / CLICK / LIST / ICONTEXT


// SEPARATOR
export function Separator({ width, height }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'span'

  let element = document.createElement(elemType)

  if (width) element.style.width = width
  if (height) element.style.height = width

  return element
}

export function Line({ width, separator, height, color, animated }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'hr'

  let element = document.createElement(elemType)

  let identifier = `${elemType}${ItemsArray.length}`

  element.classList.add(identifier)

  Style({
    selector: `.${identifier}`,
    borderWidth: '0',
    width: `calc(${width ? width : '100%'} - ${separator ? separator : '0'})`,
    height: height ? height : '1px',
    margin: `${separator ? separator : '0'} 0`,
    backgroundColor: color ? color : '#1b1b1b',
  })

  return element
}
// SEPARATOR


// SLIDER / IMAGE / ICON / LOADING
export function Slider({ width, height, border, background, prevStyle, nextStyle, itemsToShow, timing, transition, items, autoplay, showArrows }) {

  autoplay = autoplay == undefined ? true : autoplay
  showArrows = showArrows == undefined ? true : showArrows
  timing = timing == undefined ? 2000 : timing
  transition = transition == undefined ? 500 : transition
  transition = timing <= 500 && transition >= 500 ? timing / 2 : transition
  itemsToShow = itemsToShow == undefined ? 1 : itemsToShow
  itemsToShow = itemsToShow > items.length ? items.length : itemsToShow

  ItemsArray.push(ItemsArray.length)
  const identifier = `slider${ItemsArray.length}`

  const slideWidthFull = width?.toString() || "600";
  const slideHeightFull = height?.toString() || "400";

  let isPaused = false;
  let slideWidth = 0;
  let slideHeight = 0;
  let slideTypeMetricWidth = "px";
  let slideTypeMetricHeight = "px";
  let slideItemSelected = 1;
  let slidePosition = 0;

  if (!isNaN(Number(slideWidthFull))) {
    slideWidth = Number(slideWidthFull);
    slideTypeMetricWidth = "px";
  } else {
    if (slideWidthFull.slice(-1) == "%") {
      slideWidth = slideWidthFull.slice(0, -1)
      slideTypeMetricWidth = slideWidthFull.slice(-1)
    } else {
      slideWidth = slideWidthFull.slice(0, -2)
      slideTypeMetricWidth = slideWidthFull.slice(-2)
    }
  }
  if (!isNaN(Number(slideHeightFull))) {
    slideHeight = Number(slideHeightFull);
    slideTypeMetricHeight = "px";
  } else {
    if (slideHeightFull.slice(-1) == "%") {
      slideHeight = slideHeightFull.slice(0, -1)
      slideTypeMetricHeight = slideHeightFull.slice(-1)
    } else {
      slideHeight = slideHeightFull.slice(0, -2)
      slideTypeMetricHeight = slideHeightFull.slice(-2)
    }
  }

  if (autoplay) {
    const sliderLoop = setInterval(() => {
      const slider = document.querySelector(`#${identifier}`)
      if (!slider) {
        clearInterval(sliderLoop)
        return
      }
      if (!isPaused) {
        if (slideItemSelected != items.length + 1 - itemsToShow) {
          slidePosition = slideItemSelected * slideWidth / itemsToShow;
          slider.firstChild.style.marginLeft = "-" + slidePosition + slideTypeMetricWidth
          slideItemSelected++;
        } else {
          slider.firstChild.style.marginLeft = "0px"
          slideItemSelected = 1;
        }
      }
    }, timing * slideItemSelected)
  }

  function next() {
    const slider = document.querySelector(`#${identifier}`)
    if (slideItemSelected != items.length + 1 - itemsToShow) {
      slidePosition = slideItemSelected * slideWidth / itemsToShow;
      slider.firstChild.style.marginLeft = "-" + slidePosition + slideTypeMetricWidth
      slideItemSelected++;
    } else {
      slider.firstChild.style.marginLeft = "0px"
      slideItemSelected = 1;
    }
    isPaused = true
    setTimeout(() => {
      isPaused = false
    }, timing);
  }

  function prev() {
    const slider = document.querySelector(`#${identifier}`)
    if (slideItemSelected != 1) {
      slideItemSelected--;
      slidePosition = (slideItemSelected - 1) * slideWidth / itemsToShow;
      slider.firstChild.style.marginLeft = "-" + slidePosition + slideTypeMetricWidth
    } else {
      slideItemSelected = items.length + 1 - itemsToShow;
      slidePosition = (slideItemSelected - 1) * slideWidth / itemsToShow;
      slider.firstChild.style.marginLeft = "-" + slidePosition + slideTypeMetricWidth
    }
    isPaused = true
    setTimeout(() => {
      isPaused = false
    }, timing);
  }

  return (
    Row({
      style: {
        position: "relative",
      },
      children: [
        View({
          id: identifier,
          style: {
            width: slideWidth + slideTypeMetricWidth,
            height: slideHeight + slideTypeMetricHeight,
            overflow: "hidden",
            justifyContent: "start",
            background: background || "white",
          },
          child: Row({
            style: {
              transition: transition / 1000 + "s"
            },
            children: [
              ...items.map(item => {
                return Center({
                  style: {
                    width: slideWidth / itemsToShow + slideTypeMetricWidth,
                    height: slideHeight / itemsToShow + slideTypeMetricHeight,
                    overflow: "hidden",
                  },
                  child: item
                })
              })
            ]
          })
        }),
        showArrows ? GestureDetector({
          onclick: () => next(),
          child: Center({
            style: {
              zIndex: "2",
              position: "absolute",
              top: "0",
              right: "0",
              height: "100%",
              padding: "10px",
              ...nextStyle,
            },
            child: Icon({
              name: "fas fa-chevron-right",
              size: "24px",
              color: nextStyle?.color
            })
          })
        }) : "",
        showArrows ? GestureDetector({
          onclick: () => prev(),
          child: Center({
            style: {
              zIndex: "2",
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              padding: "10px",
              ...prevStyle,
            },
            child: Icon({
              name: "fas fa-chevron-left",
              size: "24px",
              color: prevStyle?.color
            })
          })
        }) : "",
      ]
    })
  )
}

export function Video({ className, id, source, autoplay, muted, loop, type, style, hover, animated }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'video'

  let element = document.createElement(elemType)
  let sourceElement = document.createElement('source')

  render(sourceElement, element)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (source && typeof (source) == 'string') sourceElement.src = source
  
  if (autoplay) element.autoplay = autoplay

  if (muted) element.muted = muted
  
  if (loop) element.loop = loop

  if (type && typeof (type) == 'string') sourceElement.type = type

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function Image({ className, id, alt, source, sizeMode, size, style, hover, animated }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'img'

  let element = document.createElement(elemType)

  if (className && typeof (className) == 'string') element.className = className

  if (id && typeof (id) == 'string') element.id = id

  if (alt && typeof (alt) == 'string') element.alt = alt

  if (source && typeof (source) == 'string') element.src = source

  if (sizeMode && typeof (sizeMode) == 'string') element.style.objectFit = sizeMode

  if (size && typeof (size) == 'object') {
    if (typeof (size[0]) == 'number') {
      element.width = size[0]
    } else {
      element.style.width = size[0]
    }
    if (typeof (size[1]) == 'number') {
      element.height = size[1]
    } else {
      element.style.height = size[1]
    }
  }

  if (style && typeof style == 'object' ||
    hover && typeof hover == 'object' ||
    animated && typeof animated == 'object') {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    if (style && typeof style == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(style)

      newStyle.unshift(["selector", `.${identifier}`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (hover && typeof hover == 'object') {

      let styleParams = {}
      let newStyle = Object.entries(hover)

      newStyle.unshift(["selector", `.${identifier}:hover`])

      newStyle.map(item => styleParams[item[0]] = item[1])

      Style(styleParams)
    }

    if (animated && typeof animated == 'object') {

      let animatedParams = {}
      let animation = Object.entries(animated)

      animation.unshift(["selector", `${identifier}`])

      animation.map(item => animatedParams[item[0]] = item[1])

      Animated(animatedParams)
    }
  }

  return element
}

export function Icon({ name, color, size, zIndex, opacity }) {

  ItemsArray.push(ItemsArray.length)

  let elemType = 'i'

  let element = document.createElement(elemType)

  element.className = name?.split(' ').length == 1 ? 'fas ' : ''

  if (name && typeof (name) == 'string') element.className += name

  if (color && typeof color == 'string' || size || zIndex || opacity) {

    let identifier = `${elemType}${ItemsArray.length}`

    element.classList.add(identifier)

    let styleParams = { selector: `.${identifier}` }

    if (color) styleParams.color = color

    if (size) styleParams.fontSize = typeof (size) == 'number' ? `${size}px` : size

    if (zIndex) styleParams.zIndex = zIndex.toString()

    if (opacity) styleParams.opacity = `${opacity}`

    Style(styleParams)
  }

  return element
}

export function Loading({ size, color }) {

  if (size && typeof size != "number") size = null

  return Center({
    animated: {
      type: "transform",
      time: 1.5,
      values: ["rotate(0)", "rotate(360deg)"],
      count: "infinite",
      transition: "linear"
    },
    child: Icon({
      name: "fas fa-spinner",
      color: color || "#444",
      size: size || 40,
    })
  })
}
// SLIDER / IMAGE / ICON / LOADING


// STYLE / ANIMATED
export function Style({ fonts, ...params }) {

  let rules = [Object.entries(params)]

  const elementStyle = document.querySelector("#style")

  let styleSheet = elementStyle.sheet

  if (fonts && fonts.length > 0) {
    fonts.forEach(font => {
      styleSheet.insertRule(font)
    })
  }

  if (params) {
    rules.forEach(rule => {
      if (rule.length > 1) {

        let j = 1
        let selector = rule[0][1]
        let propStr = ''

        if (Array.isArray(rule[1][0])) {
          rule = rule[1]
          j = 0
        }

        rule.forEach((prop, index) => {

          if (prop[1]) {
            let important = false
            let newProp = prop[1]

            if (index != 0) {

              prop[0] = prop[0].split(/(?=[A-Z])/).join("-").toLowerCase()

              let firstL = prop[1].charAt(0)
              let lastL = prop[1].charAt(prop[1].length - 1)

              if (firstL === "{" && lastL === "}") {
                prop[1] = prop[1].split('')
                prop[1].shift()
                prop[1].pop()
                newProp = prop[1].join('')
                important = true
              }
            }

            if (prop[0] != 'selector') {

              propStr += prop[0] + ': ' + newProp + (important ? ' !important' : '') + ';\n'
            }
          }
        })

        styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length)
      }
    })
  }
}

export function Animated({ selector, type, time, values, count, transition, direction, onload }) {

  onload = onload == undefined ? true : onload

  if (onload) {

    let framePoints = [];

    if (values.length == 1) {
      framePoints.push('to')
    } else {
      for (let i in values) {
        const frameLength = 100 / (values.length - 1)
        framePoints.push(frameLength * i + '%')
      }
    }

    framePoints = framePoints.map((item, index) => {
      return `${item} { ${type}: ${values[index]}; }`
    }).join('\n')

    const elementStyle = document.querySelector("#style")
    const styleSheet = elementStyle.sheet;
    const animation = `@keyframes ${selector}Anim {\n${framePoints}\n}`;

    styleSheet.insertRule(animation, styleSheet.cssRules.length);

    Style({
      selector: `.${selector}`,
      animationName: `${selector}Anim`,
      animationDuration: `${time || .5}s`,
      animationIterationCount: `${count || 1}`,
      animationDirection: `${direction || 'normal'}`,
      animationTimingFunction: transition || 'linear',
      animationFillMode: 'forwards',
    })

  }

}
// STYLE / ANIMATED
