const remotes = [{
        url: "http://localhost:8000/remoteEntry.js",
        name: 'Center',
    }, {

        url: "http://localhost:8001/remoteEntry.js",
        name: 'AppOne',
    },
    {
        url: "http://localhost:8002/remoteEntry.js",
        name: 'AppTwo',
    }
]

import router from "../router"

import loadKmpModule from "../utils/loadRemote"

let options = {
    remotes,
    router
}

export default async () => {
    await loadKmpModule(options);
}