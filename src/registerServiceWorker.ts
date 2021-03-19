/* eslint-disable no-console */
import store from '@/store'

const notifyUserAboutUpdate = (registration: any) => {
  registration.postMessage({action: 'skipWaiting'})
  store.dispatch('notification/SHOW_SNACKBAR', true)
}

const register = (swUrl: string) => {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration: any) => {
      if (registration.waiting) {
        console.log('New content has been available from last session; please refresh the browser')
        notifyUserAboutUpdate(registration.waiting)
        return
      }

      registration.onupdatefound = () => {
        const installingWorker = registration.installing
        installingWorker.onstatechange = () => {
          if (navigator.serviceWorker.controller) {
            console.log('New content is available; please refresh.ss')
            notifyUserAboutUpdate(installingWorker)
          } else {
            console.log('Content is cached for offline use.')
          }
        }
      }
    })
    .catch(error => {
      console.error('Error during service worker registration:', error)
    })
}

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`)
}

