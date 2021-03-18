/* eslint-disable no-console */

//import { register } from 'register-service-worker';
import store from '@/store'

const notifyUserAboutUpdate = (registration: any) => {
  const event =  {data: {type: 'SKIP_WAITING'}}
  registration.postMessage(event)
  store.dispatch('SHOW_SNACKBAR', true)
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

// if (process.env.NODE_ENV === 'production') {
//   register(`${process.env.BASE_URL}service-worker.js`, {
//     ready() {
//       console.log(
//         'App is being served from cache by a service worker.\n'
//         + 'For more details, visit https://goo.gl/AFskqB',
//       );
//     },
//     registered() {
//       console.log('Service worker has been registered.');
//     },
//     cached() {
//       console.log('Content has been cached for offline use.');
//     },
//     updatefound() {
//       console.log('New content is downloading.');
//       store.dispatch('SHOW_SNACKBAR', true)
//     },
//     updated() {
//       console.log('New content is available; please refresh.');
//       store.dispatch('SHOW_SNACKBAR', true)
//     },
//     offline() {
//       console.log('No internet connection found. App is running in offline mode.');
//     },
//     error(error) {
//       console.error('Error during service worker registration:', error);
//     },
//   });
// }

