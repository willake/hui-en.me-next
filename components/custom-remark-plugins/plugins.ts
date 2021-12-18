import { visit } from 'unist-util-visit';

// This plugin is an example to turn `::youtube` into iframes.
/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function youtube() {
    return (tree: any, file: any) => {
        visit(tree, (node: any) => {
            if (
                node.type === 'textDirective' ||
                node.type === 'leafDirective' ||
                node.type === 'containerDirective'
            ) {
                if (node.name !== 'youtube') return;

                const data = node.data || (node.data = {})
                const attributes = node.attributes || {}
                const id = attributes.id
        
                if (node.type === 'textDirective') file.fail('Text directives for `youtube` not supported', node)
                if (!id) file.fail('Missing video id', node)

                data.hName = 'div'

                data.hchildren = {
                    
                }
                data.hProperties = {
                    src: 'https://www.youtube.com/embed/' + id,
                    class: 'articleVideo',
                    width: 600,
                    height: 200,
                    frameBorder: 0,
                    allow: 'picture-in-picture',
                    allowFullScreen: true
                }
        
                // data.hName = 'iframe'
                // data.hProperties = {
                //     src: 'https://www.youtube.com/embed/' + id,
                //     class: 'articleVideo',
                //     width: 600,
                //     height: 200,
                //     frameBorder: 0,
                //     allow: 'picture-in-picture',
                //     allowFullScreen: true
                // }
            }
        })
    }
}