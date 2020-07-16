import Hilo from 'hilojs'

export default function () {

  return Hilo.Class.create({
    Mixes: Hilo.EventMixin,
    queue: null,
    bg: null,
    submitButton: null,
    rightModel: null,
    leftBg: null,
    rightBg: null,

    async load () {
      const resources = [
        { id: 'bg', src: require('~/static/bg.png') },
        { id: 'submit', src: require('~/static/submit.png') },
        { id: 'rightModel', src: require('~/static/answer.png') },
        // { id: 'leftBg', src: require('~/static/left_bg.png') },
        // { id: 'rightBg', src: require('~/static/right_bg.png') },
      ]
      this.queue = new Hilo.LoadQueue()
      this.queue.add(resources)
      this.queue.on('load', this.onProcess.bind(this))
      return await new Promise((resolve, reject) => {
        this.queue.on('complete', (e) => {
          this.onComplete(e)
          resolve(this)
        })
        this.queue.on('error', (e) => {
          this.onError(e)
          reject(e)
        })
        this.queue.start()
      })
    },
    onProcess (e) {
      this.fire('load', e)
    },
    onError (e) {
      this.fire('error', e)
    },
    onComplete (e) {
      this.bg = this.queue.get('bg').content
      this.submitButton = this.queue.get('submit').content
      this.rightModel = this.queue.get('rightModel').content
      // this.leftBg = this.queue.get('leftBg').content
      // this.rightBg = this.queue.get("rightBg").content

      this.queue.off('complete')
      this.fire('complete')
    },
  })
}
