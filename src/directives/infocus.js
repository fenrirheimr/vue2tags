export default {
  isLiteral: true,
  inserted: (el, binding) => {
    let f = () => {
      let rect = el.getBoundingClientRect()
      const number = 5
      let inView = (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.top >= 0 &&
        rect.bottom <= el.parentElement.getBoundingClientRect().height + number
        // rect.bottom >= 0
        // rect.bottom <= (window.innerHeight + number || document.documentElement.clientHeight + number)
      )

      console.log('!!!!!!!', el.parentElement.getBoundingClientRect().height)
      if (inView) {
        el.classList.add(binding.value)
        window.removeEventListener('scroll', f)
      } else {
        el.classList.remove(binding.value)
        window.addEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
    f()
  }
}
