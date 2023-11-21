import './style.css'
import {
  cheeses,
  sellerOptions,
  menuOptions,
  menuImages,
  footerInfo,
  RRSS,
  myRRSS
} from './Utils'

const app$$ = document.querySelector('#app')

const createHeader = () => {
  const header$$ = document.createElement('header')
  const aLogoHeader$$ = document.createElement('a')
  const imgLogoHeader$$ = document.createElement('img')
  aLogoHeader$$.href = 'https://quesoslacabezuela.com/'
  imgLogoHeader$$.src = '/logo cabezuela.png'
  imgLogoHeader$$.className = 'logo'
  aLogoHeader$$.className = 'logo-a'
  aLogoHeader$$.appendChild(imgLogoHeader$$)
  header$$.appendChild(aLogoHeader$$)
  const createMenu = () => {
    const navBar$$ = document.createElement('nav')
    const inputMenu$$ = document.createElement('input')
    inputMenu$$.type = 'checkbox'
    inputMenu$$.id = 'menu'
    const label$$ = document.createElement('label')
    label$$.htmlFor = 'menu'
    const menuImg$$ = document.createElement('img')
    menuImg$$.src = './public/menu-img.png'
    menuImg$$.className = 'menu_img'

    const ul$$ = document.createElement('ul')
    ul$$.className = 'nav-ul'
    menuOptions.forEach((option) => {
      const li$$ = document.createElement('li')
      li$$.className = 'nav-li'
      const a$$ = document.createElement('a')
      a$$.className = 'nav-a'
      a$$.innerText = option.name
      a$$.href = option.href
      li$$.appendChild(a$$)
      ul$$.appendChild(li$$)
    })
    menuImages.forEach((option) => {
      const li$$ = document.createElement('li')
      li$$.className = 'nav-li'
      const a$$ = document.createElement('a')
      a$$.className = 'nav-a'
      a$$.href = option.href
      const img$$ = document.createElement('img')
      img$$.src = option.src
      img$$.className = 'menu_tiny'
      a$$.appendChild(img$$)
      li$$.appendChild(a$$)
      ul$$.appendChild(li$$)
    })

    navBar$$.appendChild(inputMenu$$)
    label$$.appendChild(menuImg$$)
    navBar$$.appendChild(label$$)
    navBar$$.appendChild(ul$$)
    header$$.appendChild(navBar$$)
  }
  createMenu()
  app$$.appendChild(header$$)
}
createHeader()

const createHero = () => {
  const img$$ = document.createElement('img')
  img$$.className = 'hero-img'
  const figure$$ = document.createElement('figure')
  figure$$.className = 'hero-container'
  img$$.src = '/cuajo header.png'
  figure$$.appendChild(img$$)
  app$$.appendChild(figure$$)
}
createHero()

const createFilterTags = () => {
  const aside$$ = document.createElement('aside')
  aside$$.id = 'aside'
  const form$$ = document.createElement('form')
  const h3$$ = document.createElement('h3')
  h3$$.className = 'filter-title'
  const select$$ = document.createElement('select')
  select$$.id = 'select'
  select$$.className = 'select'
  const disabledOption$$ = document.createElement('option')
  disabledOption$$.disabled = true
  disabledOption$$.value = ''
  disabledOption$$.defaultSelected = true
  disabledOption$$.textContent = 'Filtrar por tipo'
  select$$.appendChild(disabledOption$$)
  sellerOptions.forEach((option) => {
    const option$$ = document.createElement('option')
    option$$.textContent = option
    option$$.className = 'option'
    option$$.value = option
    select$$.appendChild(option$$)
  })
  const label$$ = document.createElement('label')
  const input$$ = document.createElement('input')
  input$$.id = 'input'
  input$$.type = 'number'
  input$$.className = 'priceInput'
  input$$.placeholder = 'Filtrar por precio'
  const button$$ = document.createElement('button')
  button$$.id = 'priceFilter'
  button$$.className = 'filterButton'
  button$$.textContent = 'Filtrar'
  button$$.type = 'button'
  const resetButton$$ = document.createElement('button')
  resetButton$$.id = 'resetButton'
  resetButton$$.className = 'resetButton'
  resetButton$$.type = 'reset'
  resetButton$$.id = 'resetButton'
  resetButton$$.textContent = 'Limpiar filtros'
  label$$.appendChild(input$$)
  label$$.appendChild(button$$)

  form$$.appendChild(h3$$)
  form$$.appendChild(select$$)
  form$$.appendChild(label$$)
  form$$.appendChild(resetButton$$)
  aside$$.appendChild(form$$)
  app$$.appendChild(aside$$)
}
createFilterTags()

const shopContainer = document.createElement('section')
const cardsArticle$$ = document.createElement('article')
cardsArticle$$.className = 'CardsContainer'
shopContainer.appendChild(cardsArticle$$)
app$$.appendChild(shopContainer)

const createProducts = (productsToPrint) => {
  cardsArticle$$.innerHTML = ''
  for (let i = 0; i < productsToPrint.length; i++) {
    const card$$ = document.createElement('div')
    card$$.className = 'cardContainer'
    card$$.classList = 'card'
    const img$$ = document.createElement('img')
    img$$.src = productsToPrint[i].imgUrl
    img$$.className = 'cardImage'
    const h3$$ = document.createElement('h3')
    h3$$.className = 'cardTitle'
    h3$$.textContent = productsToPrint[i].name
    const p$$ = document.createElement('p')
    p$$.className = 'cardType'
    p$$.textContent = productsToPrint[i].type
    const h4$$ = document.createElement('h4')
    h4$$.className = 'cardPrice'
    h4$$.textContent = `${productsToPrint[i].price} €`
    card$$.appendChild(img$$)
    card$$.appendChild(h3$$)
    card$$.appendChild(p$$)
    card$$.appendChild(h4$$)
    cardsArticle$$.appendChild(card$$)
  }
  shopContainer.appendChild(cardsArticle$$)
}
createProducts(cheeses)

const createForm = () => {
  const section$$ = document.createElement('section')
  section$$.className = 'formSection'
  const h2$$ = document.createElement('h2')
  h2$$.className = 'formTitle'
  h2$$.textContent = 'Suscríbete a nuestra newsletter'
  const h4$$ = document.createElement('h4')
  h4$$.className = 'formContent'
  h4$$.textContent = 'Recibe nuestras promociones y novedades en tu e-mail'
  const form$$ = document.createElement('form')
  form$$.className = 'finalForm'
  const inputName$$ = document.createElement('input')
  inputName$$.className = 'nameInput'
  inputName$$.type = 'text'
  inputName$$.placeholder = 'Nombre'
  const inputMail$$ = document.createElement('input')
  inputMail$$.className = 'emailInput'
  inputMail$$.placeholder = 'E-mail'
  inputMail$$.type = 'text'
  const button$$ = document.createElement('button')
  button$$.type = 'button'
  button$$.className = 'sendButton'
  button$$.textContent = 'Enviar'

  form$$.appendChild(inputName$$)
  form$$.appendChild(inputMail$$)
  form$$.appendChild(button$$)
  section$$.appendChild(h2$$)
  section$$.appendChild(h4$$)
  section$$.appendChild(form$$)
  app$$.appendChild(section$$)
}
createForm()

const createFooter = () => {
  const footer$$ = document.createElement('footer')
  const divContainer = document.createElement('div')
  divContainer.className = 'divFooterContainer'
  for (const option in footerInfo) {
    const div$$ = document.createElement('div')
    div$$.className = 'footerSection'
    const h3$$ = document.createElement('h3')
    h3$$.className = 'footerTitle'
    h3$$.textContent = option
    const ul$$ = document.createElement('ul')
    footerInfo[option].forEach((element) => {
      const li$$ = document.createElement('li')
      li$$.className = 'footerLi'
      const a$$ = document.createElement('a')
      a$$.textContent = element
      a$$.className = 'footerA'
      li$$.appendChild(a$$)
      ul$$.appendChild(li$$)
    })
    div$$.appendChild(h3$$)
    div$$.appendChild(ul$$)
    divContainer.appendChild(div$$)
    footer$$.appendChild(divContainer)
  }

  const divRRSS$$ = document.createElement('div')
  divRRSS$$.className = 'footerSection'
  const h3RRSS$$ = document.createElement('h3')
  h3RRSS$$.className = 'footerTitle'
  h3RRSS$$.textContent = 'Síguenos'
  const ulRRSS$$ = document.createElement('ul')
  ulRRSS$$.className = 'RRSS'
  RRSS.forEach((element) => {
    const li$$ = document.createElement('li')
    li$$.className = 'footerLi'
    const a$$ = document.createElement('a')
    a$$.className = 'footerA'
    a$$.href = element.linkTo
    a$$.target = '_blank'
    const img$$ = document.createElement('img')
    img$$.className = 'footerImg'
    img$$.src = element.imgUrl
    img$$.alt = 'Icono de Red Social'
    a$$.appendChild(img$$)
    li$$.appendChild(a$$)
    ulRRSS$$.appendChild(li$$)
  })
  const divCR = document.createElement('div')
  const divRRSS = document.createElement('div')
  divRRSS.className = 'myRRSSContainer'
  divCR.className = 'myFooterContainer'
  const copyRight = document.createElement('p')
  copyRight.className = 'myFooterP'
  copyRight.textContent = 'Created by PaulaCR for '
  const linkToRTC = document.createElement('a')
  linkToRTC.className = 'myFooterA'
  linkToRTC.href = 'https://thepower.education/'
  linkToRTC.textContent = 'Rock{theCode}!'
  linkToRTC.target = '_blank'
  const myUlFooter = document.createElement('ul')
  myRRSS.forEach((element) => {
    const li$$ = document.createElement('li')
    li$$.className = 'myFooterLi'
    const a$$ = document.createElement('a')
    a$$.className = 'myFooterA'
    a$$.href = element.linkTo
    a$$.target = '_blank'
    const img$$ = document.createElement('img')
    img$$.className = 'myFooterImg'
    img$$.src = element.imgUrl
    img$$.alt = 'Icono de Red Social'
    a$$.appendChild(img$$)
    li$$.appendChild(a$$)
    myUlFooter.appendChild(li$$)
  })
  divRRSS.appendChild(myUlFooter)
  copyRight.appendChild(linkToRTC)
  divCR.appendChild(copyRight)
  divCR.appendChild(divRRSS)

  divRRSS$$.appendChild(h3RRSS$$)
  divRRSS$$.appendChild(ulRRSS$$)
  divContainer.appendChild(divRRSS$$)
  footer$$.appendChild(divContainer)
  footer$$.appendChild(divCR)
  app$$.appendChild(footer$$)
}
createFooter()

const resetFilters = () => {
  createProducts(cheeses)
  const FormToReset = document.querySelector('form')
  FormToReset.reset()
}

const filterBySelect = (e) => {
  const CopyProducts = [...cheeses]
  let selected = e.target.value
  const CheesesByType = CopyProducts.filter((product) => {
    return product.type === selected
  })
  createProducts(CheesesByType)
}

let inputValue = ''
const input$$ = document.querySelector('#input')
input$$.addEventListener('input', (e) => {
  inputValue = e.target.value
})

const filterByAll = () => {
  const CopyProducts = [...cheeses]
  const selected = document.querySelector('#select')
  const selectedType = selected.value

  if (selectedType !== '') {
    const cheesesByPriceAndType = CopyProducts.filter((product) => {
      return (
        product.price <= parseFloat(inputValue) && product.type === selectedType
      )
    })

    cardsArticle$$.innerHTML = ''
    createProducts(cheesesByPriceAndType)
  } else {
    const cheesesByPrice = CopyProducts.filter((product) => {
      return product.price <= inputValue
    })
    cardsArticle$$.innerHTML = ''
    createProducts(cheesesByPrice)
  }
}

const selectOpt = document.querySelector('#select')
const filterButton = document.querySelector('#priceFilter')
const resetButton = document.querySelector('#resetButton')
selectOpt.addEventListener('change', filterBySelect)
filterButton.addEventListener('click', filterByAll)
resetButton.addEventListener('click', resetFilters)
