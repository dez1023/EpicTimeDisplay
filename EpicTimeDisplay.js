javascript:(function()%7Bif%20(window.EpicTimeDisplay)%20%7Balert(%22EpicTimeDisplay%20already%20active%22)%3B%20throw%20new%20Error()%3B%7D%0Awindow.EpicTimeDisplay%20%3D%20true%3B%0A%0Alet%20toggled%20%3D%20false%0Alet%20downReq%0A%0Aconst%20style%20%3D%20%60%0A%20%20%20%20%3Cstyle%20id%3D%22EpicTimeDisplayCSS%22%3E%0A%20%20%20%20%20%20.ETDElement%20%7Ball%3A%20unset%3B%20background%3A%20rgba(0%2C0%2C0%2C0.5)%3B%20position%3A%20fixed%3B%20z-index%3A%20100%3B%20right%3A%2010px%3B%20bottom%3A%2010px%3B%20padding%3A%205px%2010px%3B%20border-radius%3A%205px%3B%20backdrop-filter%3A%20blur(10px)%3B%20font-family%3A%20Helvetica%2C%20sans-serif%3B%20font-size%3A%2012px%3B%20transition%3A%200.25s%3B%20color%3A%20white%3B%20font-weight%3A%20900%3B%20outline%3A%200%20solid%20rgba(0%2C0%2C0%2C0)%7D%0A%20%20%20%20%20%20.ETDButton%3Ahover%20%7Bbox-shadow%3A%20inset%200%200%200%20100px%20rgba(0%2C0%2C0%2C0.25)%3B%20transform%3A%20scale(1.025)%3B%20outline%3A%201px%20solid%20rgba(255%2C255%2C255%2C0.5)%3B%20cursor%3A%20pointer%3B%7D%0A%20%20%20%20%20%20.ETDButton%3Aactive%20%7Bbox-shadow%3A%20inset%200%200%200%20100px%20rgba(0%2C0%2C0%2C0.75)%3B%20transform%3A%20scale(0.99)%3B%20transition%3A%200s%3B%20cursor%3A%20pointer%3B%7D%0A%20%20%20%20%20%20%23ETDclosebutton%3Ahover%20%7Bbackground%3A%20%23ff6464%7D%0A%20%20%20%20%3C%2Fstyle%3E%60%0Adocument.head.insertAdjacentHTML('beforeend'%2C%20style)%3B%0A%0Alet%20timedisplay%20%3D%20document.createElement(%22div%22)%0Atimedisplay.className%20%3D%20%22ETDElement%22%0Atimedisplay.innerHTML%20%3D%20%22Time%22%0Atimedisplay.style.right%20%3D%20%2240px%22%0Adocument.body.appendChild(timedisplay)%0A%0Alet%20closebutton%20%3D%20document.createElement(%22button%22)%0Aclosebutton.className%20%3D%20%22ETDElement%20ETDButton%22%0Aclosebutton.innerHTML%20%3D%20%22X%22%0Aclosebutton.style.padding%20%3D%20%225px%208px%22%0Aclosebutton.id%20%3D%20%22ETDclosebutton%22%0Adocument.body.appendChild(closebutton)%0A%0Afunction%20updateTime()%20%7B%0A%20%20var%20d%20%3D%20new%20Date()%3B%0A%20%20var%20n%20%3D%20d.toLocaleTimeString(%22en-US%22)%3B%0A%20%20timedisplay.innerHTML%20%3D%20n%0A%20%20window.requestAnimationFrame(updateTime)%0A%7D%0A%0Alet%20animFrame%20%3D%20window.requestAnimationFrame(updateTime)%0A%0Aclosebutton.addEventListener(%22click%22%2C%20function%20()%20%7B%0A%20%20window.EpicTimeDisplay%20%3D%20false%3B%0A%20%20timedisplay.remove()%0A%20%20closebutton.remove()%0A%20%20timedisplay%20%3D%20null%0A%20%20closebutton%20%3D%20null%0A%20%20document.getElementById(%22EpicTimeDisplayCSS%22).remove()%0A%7D)%7D)()%3B
