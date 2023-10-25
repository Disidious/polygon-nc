import staticMetadata from 'public/static_metadata.json'

type Metadata = {
    title?: string;
    description?: string;
    image?: string;
}

export class MetadataHandler {
    static setMetadata(params: {
        path?: string,
        metadata?: Metadata
    }) {
        const metadata: Metadata = {...staticMetadata.default}
        if(params.metadata != null) {
            params.metadata.title && (metadata.title = params.metadata.title)
            params.metadata.description && (metadata.description = params.metadata.description)
            params.metadata.image && (metadata.image = params.metadata.image)
        } else if(params.path != null) {
            for(let metadataPath of staticMetadata.paths) {
                if(metadataPath.path === params.path) {
                    metadataPath.title && (metadata.title = metadataPath.title)
                    metadataPath.description && (metadata.description = metadataPath.description)
                    //@ts-ignore
                    metadataPath.image && (metadata.image = metadataPath.image)
                }
            }
        }

        document.title = metadata.title!

        const metaElements = document.getElementsByTagName("meta")
        for(let element of metaElements) {
            const name = element.getAttribute("name") || element.getAttribute("property")
            if(name != null) {
                if(/title/.test(name)) {
                    element.setAttribute("content", metadata.title!)
                } else if(/description/.test(name)) {
                    element.setAttribute("content", metadata.description!)
                } else if(/image/.test(name)) {
                    element.setAttribute("content", metadata.image!)
                }
            }
        }

    } 
}