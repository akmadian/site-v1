const colors = ['yellow', 'orange', 'red', 'magenta'];
const color = colors[Math.floor(Math.random() * colors.length)]

document.querySelectorAll("label, h1, a, path, sup").forEach(
    function(el) {
        // if has nohover class applied, color class application
        // will override it, so reapply nohover after color is applied
        const hasNoAnimFlag = el.classList.contains('nohover')
        if (hasNoAnimFlag) { el.classList = [] }

        el.classList.add(color)
        if (hasNoAnimFlag) {
            el.classList.add('nohover')
        }
    }
)