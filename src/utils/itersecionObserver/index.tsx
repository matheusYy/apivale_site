type useObserverInit = {
 rootElement: Element,
 isIntersecting?: boolean,

}

const options: IntersectionObserverInit = {
 root: null,
 rootMargin: '',
 threshold: 1,
}

const observer = new IntersectionObserver((inter) => {
 inter.map((e) => {
  e.isIntersecting ? console.log('sim') : console.log('nao')
 })
}, options)

export const useObserver = (values: useObserverInit) => {
 const { rootElement } = values;
 observer.observe(rootElement)

 console.log(rootElement)
}

