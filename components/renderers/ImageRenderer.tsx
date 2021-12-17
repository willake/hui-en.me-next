import { ImageProps } from "next/image";

export default function ImageRenderer(props: ImageProps) {
    const imageSrc = props.src;
    const altText = props.alt;
    return (
        <figure className="wp-block-image size-large is-resized">
            <img
                data-loading="lazy" 
                data-orig-file={imageSrc}
                data-orig-size="1248,533"
                data-comments-opened="1"
                data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}"
                data-image-title="builtin_vs_dotnetwarp"
                data-image-description=""
                data-medium-file={imageSrc + "?w=300"}
                data-large-file={imageSrc + "?w=750"}
                src={imageSrc + "?w=10241"}
                alt={altText}
                srcSet={imageSrc + "?w=1024 1024w, " + imageSrc + "?w=705 705w, " + imageSrc + "?w=150 150w, " + imageSrc + "?w=300 300w, " + imageSrc + "?w=768 768w, " + imageSrc + "?1248w"}
                sizes="(max-width: 707px) 100vw, 707px" />
            <figcaption style={{ textAlign: "center" }}>{altText}</figcaption>
        </figure>
    );
}