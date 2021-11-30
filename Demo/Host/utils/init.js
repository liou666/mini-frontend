// import Vue from "vue"
import {
    createDynamicScript,
    loadComponent
} from "./loadRemote"

const remotes = [{
        url: "http://localhost:8002/remoteEntry.js",
        name: 'app2',
        module: "./Body"
    },
    {
        url: "http://localhost:8003/remoteEntry.js",
        name: 'app3',
        module: "./Footer"
    }
]

export default async function getRemoteChunk() {
    let chunks = []
    for (const remote of remotes) {
        await createDynamicScript(remote.url);
        const remoteChunk = await loadComponent(remote.name, remote.module)();
        chunks.push({
            name: remote.name,
            chunk: remoteChunk.default
        })
    }

    return chunks

}