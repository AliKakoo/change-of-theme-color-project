const $ = document

const themeCssVariables = $.querySelector(':root')

const colorBtn = $.querySelectorAll('.btn')

colorBtn.forEach(colorBtn => {
    colorBtn.addEventListener('click', event => {


        let mainThemColor = event.target.dataset.color

        themeCssVariables.style.setProperty('--theme-color', mainThemColor)
       
    })
})