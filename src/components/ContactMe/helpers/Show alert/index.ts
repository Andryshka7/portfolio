interface Alert {
    content: {
        name: string
        text: string
    }
    type: 'success' | 'error'
}

const successConfig = {
    bgColor: ['from-[#00ff0040]', 'bg-gradient-to-r', 'to-transparent'],
    nameColor: ['text-green-600', 'dark:text-green-500'],
    disableIcon: '#alert-icons > :nth-child(2)'
}

const errorConfig = {
    bgColor: ['from-[#ff000040]', 'bg-gradient-to-r', 'to-transparent'],
    nameColor: ['text-red-500', 'dark:text-red-500'],
    disableIcon: '#alert-icons > :nth-child(1)'
}

const showAlert = ({ content, type }: Alert) => {
    const config = type === 'success' ? successConfig : errorConfig

    const alert = document.getElementById('alert')!
    const background = document.getElementById('alert-background')!

    const name = document.getElementById('alert-name')!
    const text = document.getElementById('alert-text')!

    const uselessIcon = document.querySelector(config.disableIcon)!

    uselessIcon.classList.add('hidden')

    background.classList.add(...config.bgColor)
    name.classList.add(...config.nameColor)

    name.innerHTML = content.name
    text.innerHTML = content.text

    alert.classList.remove('translate-x-10', 'opacity-0')

    setTimeout(() => {
        alert.classList.add('translate-x-10', 'opacity-0')
        setTimeout(() => {
            uselessIcon.classList.remove('hidden')

            background.classList.remove(...config.bgColor)
            name.classList.remove(...config.nameColor)

            name.innerHTML = ''
            text.innerHTML = ''
        }, 200)
    }, 2000)
}

export default showAlert
