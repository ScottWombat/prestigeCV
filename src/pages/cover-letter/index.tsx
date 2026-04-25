import styles from './index.module.css'
import './index.css'
const CoverLetter = () => {
    return (
        <div className="page">
            <h2>Example Iframe: OpenStreetMap</h2>
      <iframe
        src="https://react.dev"
        title="Inline Frame Example"
        width="600"
        height="400"
        allowFullScreen
        // Inline styles can be added using the style prop
        style={{ border: "1px solid black" }}
      >
        {/* Fallback content for browsers that do not support iframes */}
        Your browser does not support iframes.
      </iframe>
           
        </div>
    )
}

export default CoverLetter;